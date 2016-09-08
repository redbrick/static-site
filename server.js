var express = require('express'),
nodemailer = require("nodemailer"),
favicon = require('serve-favicon'),
fs = require('fs'),
config = require("./config.json"),
app = express(),
smtpTransport = nodemailer.createTransport(config.email),
baseUrl = '/api/';

// Serve Static files generate from hexo
// TODO Freshly generate files with hexo on start
app.use(express.static('public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

// dynamically create contact page
app.get('/about/contact/*',function(req,res) {
  var options = {
    root: __dirname + '/public/',
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
    else {
      console.log('Sent:', fileName);
    }
  });
});

// contact form email sender
app.get(baseUrl + 'contact', function(req, res) {
  recaptcha.verify( function (success, error_code) {
    if (success) {
      res.send('Recaptcha response valid.');
    } else {
      to = req.query.to;
      var mailOptions = {
        from: req.query.name + ' <' + req.query.email + '>',
        to: to + '@redbrick.dcu.ie',
        subject: '[Sent from the website] ' + req.query.subject,
        text : req.query.text,
        replyTo: req.query.email
      }
      smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          res.end("error");
        } else {
          console.log("Message sent: " + info.response);
          res.end("sent");
        }
      });
    }
  });
});

// Handle 404
app.use( function(req, res) {
  res.status(404).sendFile(__dirname + '/public/404.html');
  console.log('404', req);
});

// Handle 500
app.use( function(error, req, res, next) {
  res.status(500);
  res.render('500.jade', {title:'500: Internal Server Error', error: error});
  console.log('500', req);
});

app.listen(3000, function() {
  console.log("Express Started on Port 3000");
});
