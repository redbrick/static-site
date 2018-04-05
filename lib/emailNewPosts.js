const { readFileSync, readdir } = require('fs-extra');
const path = require('path');
const { parse } = require('hexo-front-matter');
const moment = require('moment');
const wrap80 = require('wordwrap')(80);
const { safeLoad } = require('js-yaml');
const logger = require('./logger');
const mailTransport = require('./mailTransport');
const { readFileAsString, readFileAsArray, writeArrayToFile } = require('./utils');

const { email, mailsubject, siteroot } = safeLoad(readFileSync('_config.yml', 'utf8')).server;

const postsDirectory = path.join(process.cwd(), 'source', '_posts');
const emailLogFilename = path.join(process.cwd(), 'logs', 'email_update_log');
const mailingListFilename = path.join(process.cwd(), 'mailing_list');

const sendEmail = ({ senderName, subject, body }) => address =>
  mailTransport.sendMail(
    {
      from: `${senderName} <${email.auth.user}>`,
      to: address,
      subject: `[${mailsubject}] ${subject}`,
      text: body,
    },
    (err) => {
      if (err) {
        logger.error(`Mail failed: ${err}\nUnable to send email "${subject}" to recipient: ${address}`);
        throw err;
      }
    },
  );

const sendEmails = emailData => addresses => Promise.all(addresses.map(sendEmail(emailData)));

const getEmailBody = ({ frontMatter, contents, slug }) =>
  wrap80(`${frontMatter.title}\n${moment(new Date(frontMatter.date)).format('DD/MM/YYYY')}\ntags: ${(
    frontMatter.tags || []
  )
    .map(tag => `#${tag}`)
    .join(', ')}\nposted by ${frontMatter.author}\n\nSee full post at: ${siteroot}/${path.join(
    moment(new Date(frontMatter.date)).format('YYYY/MM/DD'),
    slug,
  )}\n\n${contents
    .split(/<[\w\W]+>/)
    .join('')
    .split(/!\[[\w\W]*]\([\w\W]*\)/)
    .join('')}`);

module.exports = async function emailNewPosts() {
  try {
    logger.info('Sending email update(s) for any new posts...');
    const addresses = await readFileAsArray(mailingListFilename);
    // barebones email address validation
    const realAddresses = addresses.map(a => a.trim()).filter(a => /^.+@.+$/.test(a));
    const log = readFileAsArray(emailLogFilename);
    // if date doesn't exist, choose beginning of (unix) time
    const lastUpdated = new Date(log[0] || 0);
    const filenames = await readdir(postsDirectory);
    const lastCheckedDirectory = new Date();
    const postFilenames = filenames
      .filter(filename => filename.includes('.md'))
      .map(filename => path.join(postsDirectory, filename));
    const posts = await postFilenames.map(readFileAsString);
    const emailDataList = posts
      .map((post, index) => ({
        // cut out front matter and surrounding whitespace
        contents: post.replace(/---[\w\W]*---/, '').trim(),
        frontMatter: parse(post),
        // get filename without parent directory and without '.md'
        slug: postFilenames[index]
          .split('/')
          .slice(-1)[0]
          .slice(0, -3),
      }))
      .filter(({ frontMatter }) => new Date(frontMatter.date) > lastUpdated)
      .map(postData => ({
        subject: postData.frontMatter.title,
        body: getEmailBody(postData),
        senderName: postData.frontMatter.author,
      }));
    if (emailDataList.length) {
      await Promise.all(emailDataList.map(sendEmails(realAddresses)));
      logger.info(`Email update(s) successfully sent to ${realAddresses.length} recipients.`);
    } else {
      logger.info('No email updates were necessary.');
    }
    const updatedEmailLog = [lastCheckedDirectory.toISOString()].concat(log);
    await writeArrayToFile(emailLogFilename, updatedEmailLog);
  } catch (err) {
    logger.error(`Failed to send some emails.\n${err}`);
  }
};
