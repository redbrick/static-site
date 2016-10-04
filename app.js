'use strict';
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const ReCAPTCHA = require('recaptcha2');
const yaml = require('js-yaml');
const fs = require('fs');

const emailNewPosts = require('./emailNewPosts');

const app = express();

const configFile = fs.readFileSync('./_config.yml', 'utf8');
const config = yaml.safeLoad(configFile).server;
const recaptcha = new ReCAPTCHA({
  siteKey: config.recaptcha.siteKey,
  secretKey: config.recaptcha.secretKey
});
const baseUrl = '/api/';

const smtpTransport = require('./smtpTransport');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve Static files generate from hexo
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// dynamically create contact page
app.get('/about/contact/*', function (req, res) {
  let options = {
    root: path.join(__dirname, '/public/'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  const fileName = 'about/contact/contact.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
  });
});

// contact form email sender
app.get(baseUrl + 'contact', function (req, res) {
  recaptcha.verify(function (success, error) {
    if (!success) {
      res.send('Recaptcha response invalid.');
    } else {
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
          res.end('error');
        } else {
          res.end('sent');
        }
      });
    }
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  res.status(err.status).sendFile(path.join(__dirname, '/public/404.html'));
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500).sendFile(path.join(__dirname, '/public/404.html'));
});

emailNewPosts();

module.exports = app;
