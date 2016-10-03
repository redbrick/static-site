var express = require('express');
var nodemailer = require('nodemailer');
var ReCAPTCHA = require('recaptcha2');

var config = require('../config.json');
var recaptcha = new ReCAPTCHA({
  siteKey: config.recaptcha.siteKey,
  secretKey: config.recaptcha.secretKey
});
var smtpTransport = nodemailer.createTransport(config.email);
var router = express.Router();

// contact form email sender
router.get('/contact', function (req, res) {
  console.log(recaptcha);
  recaptcha.verify(function (success, error) {
    if (!success) {
      res.send('Recaptcha response invalid.');
    } else {
      var to = req.query.to;
      var mailOptions = {
        from: req.query.name + ' <' + req.query.email + '>',
        to: to + '@redbrick.dcu.ie',
        subject: '[Sent from the website] ' + req.query.subject,
        text: req.query.text,
        replyTo: req.query.email
      };
      smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
          res.end('error');
        } else {
          res.end('sent');
        }
      });
    }
  });
});

module.exports = router;
