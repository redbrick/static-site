var express = require('express');
var nodemailer = require("nodemailer");
var app = express();
var config = require("./config.json");

var smtpTransport = nodemailer.createTransport(config);
var baseUrl = '/api/';

app.use(express.static('public'));

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
	console.log(fileName);
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
  var mailOptions = {
    from: req.query.name + ' <' + req.query.email + '>',
    to: req.query.to + '@redbrick.dcu.ie',
    subject: '[Sent from the website] ' + req.query.subject,
    text : req.query.text,
		replyTo: req.query.email
  }

  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function (error, info) {
    if(error) {
      console.log(error);
      res.end("error");
    } else {
      console.log("Message sent: " + info.response);
      res.end("sent");
    }
  });
});

app.listen(3000, function() {
  console.log("Express Started on Port 3000");
});
