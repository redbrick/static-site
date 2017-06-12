const fs = require('fs');
const path = require('path');
const async = require('async');
const parseFrontMatter = require('hexo-front-matter').parse;
const moment = require('moment');
const wrap80 = require('wordwrap')(80);
const yaml = require('js-yaml');
const logger = require('./logger');

const smtpTransport = require('./smtpTransport');
const sendMailTransport = require('./sendMailTransport');
const utils = require('./utils');
const readFileAsString = utils.readFileAsString;
const readFileAsArray = utils.readFileAsArray;
const writeArrayToFile = utils.writeArrayToFile;

const configFile = fs.readFileSync('_config.yml', 'utf8');
const config = yaml.safeLoad(configFile).server;
const sendMailDefault = true;

const postsDirectory = path.join(process.cwd(), 'source', '_posts');
const emailLogFilename = path.join(process.cwd(), 'logs', 'email_update_log');
const mailingListFilename = path.join(process.cwd(), 'mailing_list');

function sendEmail ({ senderName, subject, body }, address, callback) {
  const mailOptions = {
    from   : `${senderName} <${config.email.auth.user}>`,
    to     : address,
    subject: `[${config.mailsubject}] ${subject}`,
    text   : body,
  };
  if (!config.useSendMail || sendMailDefault) {
    smtpTransport.sendMail(mailOptions, err => {
      if (err) {
        logger.error(`SMTP failed: ${err}\nUnable to send email "${subject}" to recipient: ${address}`);
      }
      callback(err);
    });
  } else {
    sendMailTransport.sendMail(mailOptions, err => {
      if (err) {
        logger.error(`sendMail failed: ${err}\nUnable to send email "${subject}" to recipient: ${address}`);
      }
      callback(err);
    });
  }
}

function sendEmails (addresses, emailData, callback) {
  async.each(addresses, sendEmail.bind(null, emailData), err => {
    if (err) {
      logger.error(`Failed to send email "${emailData.subject}" to some recipients.`);
    } else {
      logger.info(`Email update for "${emailData.subject}" succeeded.`);
    }
    callback(err);
  });
}

function getEmailBody ({ frontMatter, contents, slug }) {
  const title = frontMatter.title;
  const date = new Date(frontMatter.date);
  const author = frontMatter.author;
  const tags = (frontMatter.tags || []).map(tag => `#${tag}`).join(', ');
  const plainTextContents = contents.split(/<[\w\W]+>/).join('').split(/!\[[\w\W]*]\([\w\W]*\)/).join(''); // strip html // strip images
  const directory = moment(date).format('YYYY/MM/DD');
  const permalink = `${config.siteroot}/${path.join(directory, slug)}`;
  return wrap80(`${title}\n${moment(date).format('DD/MM/YYYY')}\ntags: ${tags}\nposted by ${author}\n\nSee full post at: ${permalink}\n\n${plainTextContents}`);
}

function bail (err, callback) {
  logger.error('Unable to complete email update for new posts:');
  if (typeof callback === 'function') {
    callback(err);
  } else {
    logger.error(err);
  }
}

function emailNewPosts (callback) {
  logger.info('Sending email update(s) for any new posts...');
  readFileAsArray(mailingListFilename, (err, addresses) => {
    if (err) {
      return bail(`Unable to read file: ${mailingListFilename}`, callback);
    }
    const realAddresses = addresses.map(a => a.trim()).filter(a => /^.+@.+$/.test(a)); // barebones email address validation
    readFileAsArray(emailLogFilename, (err, log) => {
      if (err) {
        return bail(`Unable to read file: ${emailLogFilename}`, callback);
      }
      // if date doesn't exist, choose beginning of (unix) time
      const lastUpdated = new Date(log[0] || 0);
      fs.readdir(postsDirectory, (err, filenames) => {
        if (err) {
          return bail(`Unable to read directory ${postsDirectory}`, callback);
        }
        const lastCheckedDirectory = new Date();
        const postFilenames = filenames.filter(filename => filename.indexOf('.md') !== -1).map(filename => path.join(postsDirectory, filename));
        async.map(postFilenames, readFileAsString, (err, posts) => {
          if (err) {
            return bail(`Unable to read files in directory: ${postsDirectory}`, callback);
          }
          const emailDataList = posts
            .map((post, index) => ({
              // cut out front matter and surrounding whitespace
              contents: post.replace(/---[\w\W]*---/, '').trim(),

              frontMatter: parseFrontMatter(post),

              // get filename without parent directory and without '.md'
              slug: postFilenames[index].split('/').slice(-1)[0].slice(0, -3),
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
          async.each(emailDataList, sendEmails.bind(null, realAddresses), err => {
            if (err) {
              logger.error('Failed to send some emails.');
            } else if (emailDataList.length) {
              logger.info(`Email update(s) successfully sent to ${realAddresses.length} recipients.`);
            } else {
              logger.info('No email updates were necessary.');
            }
            const updatedEmailLog = [lastCheckedDirectory.toISOString()].concat(log);
            writeArrayToFile(emailLogFilename, updatedEmailLog, err => {
              if (err) {
                return bail('Unable to update email log after send.', callback);
              }
              if (typeof callback === 'function') {
                callback();
              }
            });
          });
        });
      });
    });
  });
}

module.exports = emailNewPosts;
