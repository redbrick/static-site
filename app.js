require('dotenv-safe').load();

const express = require('express');
const compression = require('compression');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const yaml = require('js-yaml');
const fs = require('fs');
const protect = require('@risingstack/protect');
const FileStreamRotator = require('file-stream-rotator');
const logger = require('./lib/logger');
const emailNewPosts = require('./lib/emailNewPosts');

const app = express();

const configFile = fs.readFileSync('./_config.yml', 'utf8');
const config = yaml.safeLoad(configFile).server;
const baseUrl = '/api';

const logDirectory = path.join(__dirname, config.logDirectory);
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename   : path.join(logDirectory, 'access-%DATE%.log'),
  frequency  : process.env.LOG_ROTATE || config.logRotationFreqency,
  verbose    : false,
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve Static files generate from hexo
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(
  morgan('combined', {
    stream: accessLogStream,
  })
);
app.use(bodyParser.json());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(protect.express.xss({
  body          : true,
  loggerFunction: logger.error,
}));

// /api/posts returns latets blog posts as json
const postsRoute = require('./routes/posts');
app.use(baseUrl, postsRoute);

// /api/committee returns committee as json
const committeeRoute = require('./routes/committee');
app.use(baseUrl, committeeRoute);

// /api/regenerate regenerates content without restarting the server
const regenerateRoute = require('./routes/regenerate');
app.use(baseUrl, regenerateRoute);

// /api/fetchMeSomeTea 418 responce
app.get(path.join(baseUrl, 'fetchMeSomeTea'), (req, res) => {
  res.status(418).json({ message: "I'm a teapot", image: 'https://httpstatusdogs.com/img/418.jpg' });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  res.status(err.status).sendFile(path.join(__dirname, '/public/404.html'));
});

// error handlers
app.use((err, req, res, next) => {
  if (app.get('env') === 'development') {
    // development error handler
    // will print stacktrace
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error  : err,
    });
  } else {
    // production error handler
    res.redirect('/500.html');
  }
});

// production error handler
// no stacktraces leaked to user
app.use(({ status }, req, res, next) => {
  res.status(status || 500).sendFile(path.join(__dirname, '/public/404.html'));
});

emailNewPosts();
logger.info('Server running on port', process.env.PORT || '3000');

module.exports = app;
