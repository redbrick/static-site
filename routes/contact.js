const express = require('express');
const router = express.Router();
const yaml = require('js-yaml');
const fs = require('fs');
const ReCAPTCHA = require('recaptcha2');
const logger = require('../lib/logger');
const smtpTransport = require('../lib/smtpTransport');
const sendMailTransport = require('../lib/sendMailTransport');

const configFile = fs.readFileSync('./_config.yml', 'utf8');
const config = yaml.safeLoad(configFile).server;
const sendMailDefault = true;
const recaptcha = new ReCAPTCHA({
  siteKey  : process.env.RECAPTCHA_SITE_KEY || config.recaptcha.siteKey,
  secretKey: process.env.RECAPTCHA_SECRET_KEY || config.recaptcha.secretKey,
});

// contact form email sender
router.get('/contact', ({ query }, res) => {
  recaptcha
    .validate(query.recaptcha)
    .then(() => {
      // validated and secure
      const to = query.to;
      const mailOptions = {
        from   : `${query.name} <${query.email}>`,
        to     : `${to}@redbrick.dcu.ie`,
        subject: `[Sent from the website] ${query.subject}`,
        text   : query.text,
        replyTo: query.email,
      };
      if (!config.useSendMail || sendMailDefault) {
        smtpTransport.sendMail(mailOptions, (error, info) => {
          if (error) {
            logger.error(`error in smtp server ${error}`);
            res.json({ formSubmit: true, errors: 'error in SMTP Server' });
          } else {
            logger.info(info);
            res.json({ formSubmit: true, errors: null });
          }
        });
      } else {
        sendMailTransport.sendMail(mailOptions, (error, info) => {
          if (error) {
            logger.error(`error in SendMail ${error}`);
            res.json({ formSubmit: true, errors: 'error in SendMail' });
          } else {
            logger.info(info);
            res.json({ formSubmit: true, errors: null });
          }
        });
      }
    })
    .catch(errorCodes => {
      // invalid
      logger.error(`error in captcha ${errorCodes}`);
      res.json({ formSubmit: false, errors: recaptcha.translateErrors(errorCodes) });
    });
});

module.exports = router;
