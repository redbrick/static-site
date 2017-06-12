const express = require('express');
const router = express.Router();
const cmt = require('../lib/getCommittee');

/*
 * Fetches Array of Current committee
 */
router.get('/committee', ({ query }, res) => {
  cmt.getCurrentCommittee().then((committee) => {
    res.json(committee).end();
  })
  .catch((err) => {
    return res.status(500).json(err).end();
  });
});

module.exports = router;
