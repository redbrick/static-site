'use strict';
require('dotenv-safe').load();

const express = require('express');
const compression = require('compression');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const ReCAPTCHA = require('recaptcha2');
const yaml = require('js-yaml');
const fs = require('fs');
const spawn = require('child_process').spawn;
const FileStreamRotator = require('file-stream-rotator');
const logger = require('./logger');

const getLatestPosts = require('./getLatestPosts');
const emailNewPosts = require('./emailNewPosts');

const app = express();

const configFile = fs.readFileSync('./_config.yml', 'utf8');
const config = yaml.safeLoad(configFile).server;
const recaptcha = new ReCAPTCHA({
  siteKey: config.recaptcha.siteKey,
  secretKey: config.recaptcha.secretKey
});
const baseUrl = '/api/';

const logDirectory = path.join(__dirname, config.logDirectory);
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename: path.join(logDirectory, 'access-%DATE%.log'),
  frequency: config.logRotationFreqency,
  verbose: false
});

const smtpTransport = require('./smtpTransport');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve Static files generate from hexo
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('combined', {
  stream: accessLogStream
}));
app.use(bodyParser.json());
app.use(compression());
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
      logger.error(err);
      res.status(err.status).end();
    }
  });
});

// contact form email sender
app.get(baseUrl + 'contact', function (req, res) {
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
        res.send('error');
      } else {
        logger.info(info);
        res.send('sent');
      }
    });
  })
  .catch(function (errorCodes) {
    // invalid
    logger.error(errorCodes);
    res.send('error');
  });
});

/* fetches latest blog posts as JSON list
 * optional query params:
 *  - offset (0-indexed starting point - default 0)
 *  - limit (0-indexed maximum number of returned results - default 10)
 *  - include (comma-separated list possibly including 'content,excerpt')
 */
app.get(path.join(baseUrl, 'posts'), function (req, res) {
  getLatestPosts({
    offset: parseInt(req.query.offset),
    limit: parseInt(req.query.limit),
    include: (req.query.include || '').split(',')
  }, function (err, posts) {
    if (err) {
      return res.status(500).json(err).end();
    }
    res.json(posts).end();
  });
});

app.get(baseUrl + 'fetchMeSomeTea', function (req, res) {
  res.status(418).json({message: "I'm a teapot", image: 'https://httpstatusdogs.com/img/418.jpg'});
});

/* This pretty much violates REST since it has side effects
 * and doesn't GET anything of substance, but making it a GET
 * request means you can easily run this from a browser window.
 * also, normal users won't be hitting this endpoint.
 */
app.get(path.join(baseUrl, 'regenerate'), function (req, res) {
  if (req.query.token !== process.env.SECRET_API_TOKEN) {
    return res.status(401).end('Bad token.');
  }

  /* Using wx write flag to combine check and write into one atomic operation;
   * This prevents concurrent initiation of hexo child processes.
   */
  fs.writeFile('hexo_lock', 'hexo_lock', { flag: 'wx' }, function (err) {
    if (err) {
      if (err.code === 'EEXIST') {
        return res.status(423).end('Site generation already in progress. Please wait.');
      }
      fs.unlink('hexo_lock'); // async delete just in case write started
      return res.status(500).end('Unable to create lock file for site generation.');
    }
    // don't wait for whole process; go ahead and respond optimistically.
    res.end('Re-generating static site...');

    logger.info('Generating hexo static files...');
    let generateOk = true;
    const hexoGenerate = spawn(
      path.join(process.cwd(), 'node_modules/.bin/hexo'),
      ['generate']
    );
    hexoGenerate.stdout.on('data', function (buffer) {
      logger.info(buffer.toString());
    });
    hexoGenerate.stderr.on('data', function (buffer) {
      logger.error(buffer.toString());
      generateOk = false;
    });
    hexoGenerate.on('close', function () {
      if (!generateOk) {
        fs.unlink('hexo_lock'); // async delete
        return logger.error('Hexo generation failed.');
      }
      logger.log('Hexo generation was successful.');
      emailNewPosts(function (err) {
        if (err) {
          logger.error(err);
        }
        fs.unlink('hexo_lock'); // async delete
      });
    });
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  res.status(err.status).sendFile(path.join(__dirname, '/public/404.html'));
});

// error handlers
app.use(function (err, req, res, next) {
  if (app.get('env') === 'development') {
    // development error handler
    // will print stacktrace
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  } else {
    // production error handler
    res.redirect('/500.html');
  }
});

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500).sendFile(path.join(__dirname, '/public/404.html'));
});

emailNewPosts();

module.exports = app;
