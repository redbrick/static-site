const nodemailer = require('nodemailer');
const fs         = require('fs');
const yaml       = require('js-yaml');

const configFile = fs.readFileSync('./_config.yml', 'utf8');
const config     = yaml.safeLoad(configFile).server;

const smtp      = config.email;
smtp.host       = process.env.SMTP_HOST        || config.email.host;
smtp.port       = process.env.SMTP_PORT        || config.email.port;
smtp.secure     = process.env.SMTP_SECURE      || config.email.secure;
smtp.authMethod = process.env.SMTP_AUTH_METHOD || config.email.authMethod;
smtp.auth.user  = process.env.SMTP_USER        || config.email.auth.user;
smtp.auth.pass  = process.env.SMTP_PASS        || config.email.auth.pass;

const smtpTransport = nodemailer.createTransport(smtp);

module.exports = smtpTransport;
