const { createTransport } = require('nodemailer');
const { readFileSync } = require('fs');
const { safeLoad } = require('js-yaml');
const { merge } = require('lodash');

const { email, useSendMail } = safeLoad(readFileSync('./_config.yml', 'utf8')).server;

module.exports = createTransport(!useSendMail
  ? merge(email, {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    authMethod: process.env.SMTP_AUTH_METHOD,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
  : {
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail',
  });
