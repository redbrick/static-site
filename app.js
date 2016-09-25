var express = require('express');
var nodemailer = require('nodemailer');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ReCAPTCHA = require('recaptcha2');

var app = express();

var config = require('./config.json');
var recaptcha = new ReCAPTCHA({
  siteKey: config.recaptcha.siteKey,
  secretKey: config.repatcha.secretKey
});
var smtpTransport = nodemailer.createTransport(config.email);
var baseUrl = '/api/';

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
  var options = {
    root: path.join(__dirname, '/public/'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  var fileName = 'about/contact/contact.html';
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

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
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

module.exports = app;
