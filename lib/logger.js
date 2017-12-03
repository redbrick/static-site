const FileStreamRotator = require('file-stream-rotator');
const logger = require('winston');
const { safeLoad } = require('js-yaml');
const path = require('path');
const { readFileSync, ensureDir } = require('fs-extra');

const { logRotationFreqency, logDirectory } = safeLoad(readFileSync('_config.yml', 'utf8')).server;

ensureDir(logDirectory).then(() => {
  logger.add(logger.transports.File, {
    stream: FileStreamRotator.getStream({
      date_format: 'YYYYMMDD',
      filename: path.join(__dirname, '..', logDirectory, 'winston-%DATE%.log'),
      frequency: logRotationFreqency,
      verbose: false,
    }),
  });
});

module.exports = logger;
