var fs = require('fs');
var yaml = require('js-yaml');
var nodemailer = require('nodemailer');

var configFile = fs.readFileSync('./_config.yml', 'utf8');
var config = yaml.safeLoad(configFile).server;

var smtpTransport = nodemailer.createTransport(config.email);

module.exports = smtpTransport;
