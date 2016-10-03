const nodemailer = require('nodemailer');

const fs = require('fs');
const yaml = require('js-yaml');

const configFile = fs.readFileSync('./_config.yml', 'utf8');
const config = yaml.safeLoad(configFile).server;

const smtpTransport = nodemailer.createTransport(config.email);

module.exports = smtpTransport;
