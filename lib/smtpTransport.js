'use strict';
const nodemailer = require('nodemailer');

const fs = require('fs');
const yaml = require('js-yaml');

const configFile = fs.readFileSync('./_config.yml', 'utf8');
const config = yaml.safeLoad(configFile).server;

let email = config.email;
email.host = process.env.SMTP_HOST || config.email.host;
email.port = process.env.SMTP_PORT || config.email.port;
email.secure = process.env.SMTP_SECURE || config.email.secure;
email.user = process.env.SMTP_USER || config.email.user;
email.pass = process.env.SMTP_PASS || config.email.pass;

const smtpTransport = nodemailer.createTransport(email);

module.exports = smtpTransport;
