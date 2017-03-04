const FileStreamRotator = require('file-stream-rotator');
const logger = require('winston');
const yaml = require('js-yaml');
const path = require('path');
const fs = require('fs');

const configFile = fs.readFileSync('_config.yml', 'utf8');
const config = yaml.safeLoad(configFile).server;
const logDirectory = path.join(__dirname, '..', config.logDirectory);

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const winstonLogStream = FileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename   : path.join(logDirectory, 'winston-%DATE%.log'),
  frequency  : config.logRotationFreqency,
  verbose    : false,
});

logger.add(logger.transports.File, {
  stream: winstonLogStream,
});

module.exports = logger;
