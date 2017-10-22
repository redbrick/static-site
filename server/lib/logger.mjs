import FileStreamRotator from 'file-stream-rotator';
import logger from 'winston';
import yaml from 'js-yaml';
import path from 'path';
import fs from 'fs-extra';

const config = yaml.safeLoad(fs.readFileSync('_config.yml', 'utf8')).server;
const logDirectory = path.join(__dirname, '..', '..', config.logDirectory);
fs.ensureDir(logDirectory).then(() => {
  logger.add(logger.transports.File, {
    stream: FileStreamRotator.getStream({
      date_format: 'YYYYMMDD',
      filename   : path.join(logDirectory, 'winston-%DATE%.log'),
      frequency  : config.logRotationFreqency,
      verbose    : false,
    }),
  });
});

export default logger;
