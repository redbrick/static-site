import nodemailer from 'nodemailer';

const sendmail = {
  sendmail: true,
  newline : 'unix',
  path    : '/usr/sbin/sendmail',
};

const sendMailTransport = nodemailer.createTransport(sendmail);

export default sendMailTransport;
