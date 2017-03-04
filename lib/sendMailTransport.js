const nodemailer = require('nodemailer');

const sendmail = {
  sendmail: true,
  newline : 'unix',
  path    : '/usr/sbin/sendmail',
};

const sendMailTransport = nodemailer.createTransport(sendmail);

module.exports = sendMailTransport;
