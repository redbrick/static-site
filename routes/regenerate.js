const path = require('path');
const { writeFile, unlink } = require('fs-extra');
const { spawn } = require('child_process');

const logger = require('../lib/logger');
const emailNewPosts = require('../lib/emailNewPosts');

/* This pretty much violates REST since it has side effects
 * and doesn't GET anything of substance, but making it a GET
 * request means you can easily run this from a browser window.
 * also, normal users won't be hitting this endpoint.
 */
module.exports = ({ query }, res, next) => {
  if (query.token !== process.env.SECRET_API_TOKEN) {
    return res.status(401).end('Bad token.');
  }

  /* Using wx write flag to combine check and write into one atomic operation;
   * This prevents concurrent initiation of hexo child processes.
   */
  writeFile('hexo_lock', 'hexo_lock', { flag: 'wx' })
    .then(() => {
      // don't wait for whole process; go ahead and respond optimistically.
      res.end('Re-generating static site...');
      logger.info('Pulling from Github');
      const gitPull = spawn('git', ['pull', 'origin', 'master']);
      gitPull.stdout.on('data', (buffer) => {
        logger.info(buffer.toString());
      });
      gitPull.stderr.on('data', (buffer) => {
        logger.error(buffer.toString());
      });
      logger.info('Pulling Submodules');
      const gitModule = spawn('git', ['submodule', 'update', '--remote']);
      gitModule.stdout.on('data', (buffer) => {
        logger.info(buffer.toString());
      });
      gitModule.stderr.on('data', (buffer) => {
        logger.error(buffer.toString());
      });
      logger.info('Generating hexo static files...');
      let generateOk = true;
      const hexoGenerate = spawn(path.join(process.cwd(), 'node_modules/.bin/hexo'), ['generate']);
      hexoGenerate.stdout.on('data', (buffer) => {
        logger.info(buffer.toString());
      });
      hexoGenerate.stderr.on('data', (buffer) => {
        logger.error(buffer.toString());
        generateOk = false;
      });
      hexoGenerate.on('close', () => {
        unlink('hexo_lock'); // async delete
        if (!generateOk) return logger.error('Hexo generation failed.');
        logger.log('Hexo generation was successful.');
        emailNewPosts().catch(logger.error);
      });
    })
    .catch(({ code }) => {
      const error = new Error();
      if (code === 'EEXIST') {
        error.status = 423;
        error.message = 'Site generation already in progress. Please wait.';
        next(error);
      }
      unlink('hexo_lock'); // async delete just in case write started
      error.status = 500;
      error.message = 'Unable to create lock file for site generation.';
      next(error);
    });
};
