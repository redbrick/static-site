var express = require('express'),
nodemailer = require("nodemailer"),
favicon = require('serve-favicon'),
app = express(),
config = require("./config.json");

var smtpTransport = nodemailer.createTransport(config);
var baseUrl = '/api/';

app.use(express.static('public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

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

app.get(baseUrl + 'contact', function(req, res) {

  recaptcha.verify(function(success, error_code) {
    if (success) {
      res.send('Recaptcha response valid.');
    } else {
      to = req.query.to
      var mailOptions = {
        from: req.query.name + ' <' + req.query.email + '>',
        to: to + '@redbrick.dcu.ie',
        subject: '[Sent from the website] ' + req.query.subject,
        text : req.query.text,
        replyTo: req.query.email
      }

      smtpTransport.sendMail(mailOptions, function (error, info) {
        if(error) {
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
app.use(function(req, res) {
    res.status(404).sendFile(__dirname + '/public/404.html');
});

// Handle 500
app.use(function(error, req, res, next) {
    res.status(500);
    res.render('500.jade', {title:'500: Internal Server Error', error: error});
});

app.listen(3000, function() {
  console.log("Express Started on Port 3000");
});
