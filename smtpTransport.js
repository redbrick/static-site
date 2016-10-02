var nodemailer = require('nodemailer');

var config = require('./config.json');

var smtpTransport = nodemailer.createTransport(config.email);

module.exports = smtpTransport;
