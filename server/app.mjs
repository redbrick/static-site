import express from 'express';
import compression from 'compression';
import path from 'path';
import favicon from 'serve-favicon';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import yaml from 'js-yaml';
import fs from 'fs-extra';
import protect from '@risingstack/protect';
import FileStreamRotator from 'file-stream-rotator';
import dotenv from 'dotenv-safe';
import logger from './lib/logger.mjs';
import emailNewPosts from './lib/emailNewPosts.mjs';
import regenerate from './routes/regenerate.mjs';
import committee from './routes/committee.mjs';
import posts from './routes/posts.mjs';

dotenv.load();
const config = yaml.safeLoad(fs.readFileSync('_config.yml', 'utf8')).server;
const baseUrl = '/api';
const app = express();
const logDirectory = path.join(__dirname, '..', config.logDirectory);
const webRoot = path.join(__dirname, '..', 'public');

fs.ensureDir(logDirectory).then(() => {
  app.use(
    morgan('combined', {
      stream: FileStreamRotator.getStream({
        date_format: 'YYYYMMDD',
        filename   : path.join(logDirectory, 'access-%DATE%.log'),
        frequency  : process.env.LOG_ROTATE || config.logRotationFreqency,
        verbose    : false,
      }),
    }),
  );
});
app.use(express.static(webRoot));
app.use(favicon(path.join(webRoot, 'favicon.ico')));
app.use(bodyParser.json());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  protect.express.xss({
    body          : true,
    loggerFunction: logger.error,
  }),
);
app.use(baseUrl, posts);
app.use(baseUrl, committee);
app.use(baseUrl, regenerate);
app.get(`${baseUrl}/fetchMeSomeTea`, (req, res) => {
  res
    .status(418)
    .json({ message: "I'm a teapot", image: 'https://httpstatusdogs.com/img/418.jpg' });
});

// catch 404 and forward to error handler
app.use((req, res) => {
  const err = new Error('Not Found');
  err.status = 404;
  res.status(err.status).sendFile(path.join(webRoot, '404.html'));
});

// error handlers
app.use((err, req, res) => {
  logger.error(err);
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
    // no stacktraces leaked to user
    res.status(err.status || 500).sendFile(path.join(webRoot, '500.html'));
  }
});

logger.info('Server running on port', process.env.PORT || '3000');
emailNewPosts();

export default app;
