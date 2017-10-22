import fs from 'fs';
import path from 'path';
import { parse as parseFrontMatter } from 'hexo-front-matter';
import moment from 'moment';
import yaml from 'js-yaml';
import wordwrap from 'wordwrap';
import logger from './logger.mjs';
import smtpTransport from './smtpTransport.mjs';
import sendMailTransport from './sendMailTransport.mjs';
import { readFileAsArray, readFileAsString, writeArrayToFile } from './utils.mjs';

const wrap80 = wordwrap(80);
const configFile = fs.readFileSync('_config.yml', 'utf8');
const config = yaml.safeLoad(configFile).server;
const sendMailDefault = true;

const postsDirectory = path.join(process.cwd(), 'source', '_posts');
const emailLogFilename = path.join(process.cwd(), 'logs', 'email_update_log');
const mailingListFilename = path.join(process.cwd(), 'mailing_list');

async function sendEmail({ senderName, subject, body }, address) {
  const mailOptions = {
    from   : `${senderName} <${config.email.auth.user}>`,
    to     : address,
    subject: `[${config.mailsubject}] ${subject}`,
    text   : body,
  };
  return !config.useSendMail || sendMailDefault
    ? smtpTransport.sendMail(mailOptions, err => {
      if (err) {
        logger.error(
          `SMTP failed: ${err}\nUnable to send email "${subject}" to recipient: ${address}`,
        );
        throw err;
      }
    })
    : sendMailTransport.sendMail(mailOptions, err => {
      if (err) {
        logger.error(
          `sendMail failed: ${err}\nUnable to send email "${subject}" to recipient: ${address}`,
        );
        throw err;
      }
    });
}

function sendEmails(addresses, emailData) {
  return Promise.all(addresses.map(address => sendEmail(emailData, address)))
    .then(logger.info(`Email update for "${emailData.subject}" succeeded.`))
    .catch(err => {
      logger.error(
        `Failed to send email "${emailData.subject}" to some recipients.\n error: ${err}`,
      );
    });
}

function getEmailBody({ frontMatter, contents, slug }) {
  const title = frontMatter.title;
  const date = new Date(frontMatter.date);
  const author = frontMatter.author;
  const tags = (frontMatter.tags || []).map(tag => `#${tag}`).join(', ');
  const plainTextContents = contents
    .split(/<[\w\W]+>/)
    .join('')
    .split(/!\[[\w\W]*]\([\w\W]*\)/)
    .join(''); // strip html // strip images
  const directory = moment(date).format('YYYY/MM/DD');
  const permalink = `${config.siteroot}/${path.join(directory, slug)}`;
  return wrap80(
    `${title}\n${moment(date).format(
      'DD/MM/YYYY',
    )}\ntags: ${tags}\nposted by ${author}\n\nSee full post at: ${permalink}\n\n${plainTextContents}`,
  );
}

export default async function emailNewPosts() {
  try {
    logger.info('Sending email update(s) for any new posts...');
    const addresses = await readFileAsArray(mailingListFilename);
    const realAddresses = addresses.map(a => a.trim()).filter(a => /^.+@.+$/.test(a)); // barebones email address validation
    const log = await readFileAsArray(emailLogFilename);
    // if date doesn't exist, choose beginning of (unix) time
    const lastUpdated = new Date(log[0] || 0);
    const filenames = await fs.readdir(postsDirectory);
    const lastCheckedDirectory = new Date();
    const postFilenames = filenames
      .filter(filename => filename.includes('.md'))
      .map(filename => path.join(postsDirectory, filename));
    const posts = await Promise.all(postFilenames.map(readFileAsString));
    const emailDataList = posts
      .map((post, index) => ({
        // cut out front matter and surrounding whitespace
        contents   : post.replace(/---[\w\W]*---/, '').trim(),
        frontMatter: parseFrontMatter(post),
        // get filename without parent directory and without '.md'
        slug       : postFilenames[index].split('/').slice(-1)[0].slice(0, -3),
      }))
      .filter(({ frontMatter }) => {
        const date = frontMatter.date;
        return new Date(date) > lastUpdated;
      })
      .map(postData => ({
        subject   : postData.frontMatter.title,
        body      : getEmailBody(postData),
        senderName: postData.frontMatter.author,
      }));
    await Promise.all(emailDataList.map(emailData => sendEmails(realAddresses, emailData)));
    if (emailDataList.length) {
      logger.info(`Email update(s) successfully sent to ${realAddresses.length} recipients.`);
    } else {
      logger.info('No email updates were necessary.');
    }
    const updatedEmailLog = [lastCheckedDirectory.toISOString()].concat(log);
    await writeArrayToFile(emailLogFilename, updatedEmailLog);
  } catch (err) {
    logger.error('Unable to complete email update for new posts:');
    logger.error(err);
  }
}
