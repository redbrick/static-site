const nodemailer = require('nodemailer');

const config = require('./config.json');

const smtpTransport = nodemailer.createTransport(config.email);

module.exports = smtpTransport;
