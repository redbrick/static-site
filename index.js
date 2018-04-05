require('dotenv-safe').load();

const express = require('express');
const compression = require('compression');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { safeLoad } = require('js-yaml');
const { readFileSync, ensureDir } = require('fs-extra');
const protect = require('@risingstack/protect');
const FileStreamRotator = require('file-stream-rotator');
const http = require('http');
const logger = require('./lib/logger');
const emailNewPosts = require('./lib/emailNewPosts');
const routes = require('./routes');

const app = express();
const server = http.createServer(app);
const { logDirectory, logRotationFreqency } = safeLoad(readFileSync('./_config.yml', 'utf8')).server;

const checkPipe = portNum => (Number.isNaN(parseInt(portNum, 10)) ? portNum : false);
const checkPort = portNum => (parseInt(portNum, 10) >= 0 ? parseInt(portNum, 10) : false);
const normalizePort = val => checkPipe(val) || checkPort(val);
const port = normalizePort(process.env.PORT || '3000');

server
  .on('error', (error) => {
    if (error.syscall !== 'listen') throw error;

    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        logger.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        logger.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  })
  .on('listening', () => {
    const addr = server.address();
    logger.info(`Server listening on ${typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`}`);
  });

ensureDir(logDirectory).then(() => {
  app
    .use(morgan('combined', {
      stream: FileStreamRotator.getStream({
        date_format: 'YYYYMMDD',
        filename: path.join(__dirname, logDirectory, 'access-%DATE%.log'),
        frequency: process.env.LOG_ROTATE || logRotationFreqency,
        verbose: false,
      }),
    }))
    .use(express.static(path.join(__dirname, 'public')))
    .use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
    .use(bodyParser.json())
    .use(compression())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(cookieParser())
    .use(protect.express.xss({
      body: true,
      loggerFunction: logger.error,
    }))
    .set('port', port)
    .use('/', routes)

    .use((req, res, next) => {
      // catch 404 and forward to error handler
      const err = new Error('Not Found');
      err.status = 404;
      res.status(err.status).sendFile(path.join(__dirname, '/public/404.html'));
    })

    .use((err, req, res, next) => {
      // error handlers
      if (app.get('env') === 'development') {
        // development error handler
        // will print stacktrace
        res.status(err.status || 500);
        res.json({
          message: err.message,
          error: err,
        });
      } else {
        // production error handler
        res.status(err.status || 500).sendFile(path.join(__dirname, '/public/500.html'));
      }
    });

  emailNewPosts();
  server.listen(port);
});
