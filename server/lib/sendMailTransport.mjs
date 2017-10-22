import nodemailer from 'nodemailer';

const sendmail = {
  sendmail: true,
  newline : 'unix',
  path    : '/usr/sbin/sendmail',
};

export default nodemailer.createTransport(sendmail);
