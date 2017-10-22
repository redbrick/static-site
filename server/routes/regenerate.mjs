import express from 'express';
import fs from 'fs-extra';
import childProcess from 'child-process-promise';
import logger from '../lib/logger.mjs';
import emailNewPosts from '../lib/emailNewPosts.mjs';

const router = express.Router();
const exec = childProcess.exec;

/*
 * This pretty much violates REST since it has side effects
 * and doesn't GET anything of substance, but making it a GET
 * request means you can easily run this from a browser window.
 * also, normal users won't be hitting this endpoint.
 */
router.get('/regenerate', ({ query }, res) => {
  if (query.token !== process.env.SECRET_API_TOKEN) return res.status(401).end('Bad token.');
  /**
   * Using wx write flag to combine check and write into one atomic operation;
   * This prevents concurrent initiation of hexo child processes.
   * */
  fs
    .writeFile('hexo_lock', 'hexo_lock', { flag: 'wx' })
    .then(() => {
      // don't wait for whole process; go ahead and respond optimistically.
      res.end('Re-generating static site...');
    })
    .then(exec('git pull origin master'))
    .then(result => {
      logger.info('Pulling from Github');
      logger.info(result.stdout);
      logger.error(result.stderr);
    })
    .then(exec('git submodule update --remote'))
    .then(result => {
      logger.info('Pulling Submodules');
      logger.info(result.stdout);
      logger.error(result.stderr);
    })
    .then(logger.info('Generating hexo static files...'))
    .then(exec(`${process.cwd()}/node_modules/.bin/hexo generate`))
    .then(result => {
      logger.info(result.stdout);
      logger.error(result.stderr);
      if (result.stderr) return false;
      return true;
    })
    .then(generateOk => {
      if (!generateOk) throw new Error('Hexo generation failed.');
      logger.log('Hexo generation was successful.');
    })
    .then(emailNewPosts)
    .then(fs.unlink('hexo_lock'))
    .catch(err => {
      logger.error(err);
      if (err.code === 'EEXIST') {
        return res.status(423).end('Site generation already in progress. Please wait.');
      }
      fs.unlink('hexo_lock'); // async delete just in case write started
      return res.status(500).end('Unable to create lock file for site generation.');
    });
});

export default router;
