'use strict';
const express = require('express');
const router = express.Router();
const yaml = require('js-yaml');
const fs = require('fs');
const ReCAPTCHA = require('recaptcha2');
const logger = require('../lib/logger');
const smtpTransport = require('../lib/smtpTransport');

const configFile = fs.readFileSync('./_config.yml', 'utf8');
const config = yaml.safeLoad(configFile).server;
const recaptcha = new ReCAPTCHA({
  siteKey: process.env.RECAPTCHA_SITE_KEY || config.recaptcha.siteKey,
  secretKey: process.env.RECAPTCHA_SECRET_KEY || config.recaptcha.secretKey
});

// contact form email sender
router.get('/contact', function (req, res) {
  recaptcha.validate(req.query.recaptcha).then(function () {
    // validated and secure
    let to = req.query.to;
    let mailOptions = {
      from: req.query.name + ' <' + req.query.email + '>',
      to: to + '@redbrick.dcu.ie',
      subject: '[Sent from the website] ' + req.query.subject,
      text: req.query.text,
      replyTo: req.query.email
    };
    smtpTransport.sendMail(mailOptions, function (error, info) {
      if (error) {
        logger.error(error);
        res.json({formSubmit: true, errors: 'error in SMTP Server'});
      } else {
        logger.info(info);
        res.json({formSubmit: true, errors: null});
      }
    });
  })
  .catch(function (errorCodes) {
    // invalid
    console.log('error in captcha', errorCodes);
    logger.error(errorCodes);
    res.json({formSubmit: false, errors: recaptcha.translateErrors(errorCodes)});
  });
});

module.exports = router;
