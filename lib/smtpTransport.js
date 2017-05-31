const nodemailer = require('nodemailer');

const fs = require('fs');
const yaml = require('js-yaml');

const configFile = fs.readFileSync('./_config.yml', 'utf8');
const config = yaml.safeLoad(configFile).server;

const smtp = config.email;
smtp.host = process.env.SMTP_HOST || config.email.host;
smtp.port = process.env.SMTP_PORT || config.email.port;
smtp.secure = process.env.SMTP_SECURE || config.email.secure;
smtp.authMethod = process.env.SMTP_AUTH_METHOD || config.email.authMethod;
smtp.user = process.env.SMTP_USER || config.email.user;
smtp.pass = process.env.SMTP_PASS || config.email.pass;

const smtpTransport = nodemailer.createTransport(smtp);

module.exports = smtpTransport;
