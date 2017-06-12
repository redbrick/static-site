const express = require('express');
const router = express.Router();
const getCommittee = require('../lib/getCommittee');

/*
 * Fetches Array of Current committee
 */
router.get('/committee', ({ query }, res) => {
  getCommittee(query.year).then((committee) => {
    res.json(committee).end();
  })
  .catch((err) => {
    return res.status(500).json(err).end();
  });
});

module.exports = router;
