'use strict';
const express = require('express');
const path = require('path');
const fs = require('fs');
const spawn = require('child_process').spawn;
const router = express.Router();
const logger = require('../lib/logger');
const emailNewPosts = require('../lib/emailNewPosts');

/* This pretty much violates REST since it has side effects
 * and doesn't GET anything of substance, but making it a GET
 * request means you can easily run this from a browser window.
 * also, normal users won't be hitting this endpoint.
 */
router.get('/regenerate', function (req, res) {
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
    logger.info('Pulling from Github');
    const gitPull = spawn('git', ['pull', 'origin', 'master']);
    gitPull.stdout.on('data', function (buffer) {
      logger.info(buffer.toString());
    });
    gitPull.stderr.on('data', function (buffer) {
      logger.error(buffer.toString());
    });

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

module.exports = router;
