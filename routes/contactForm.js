'use strict';
const express = require('express');
const path = require('path');
const router = express.Router();
const logger = require('../lib/logger');

// dynamically create contact page
router.get('*', function (req, res) {
  let options = {
    root: path.join(__dirname, '..', '/public/'),
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

module.exports = router;
