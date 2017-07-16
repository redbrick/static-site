import getCommittee from '../lib/getCommittee';
import express from 'express';
const router = express.Router();

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

export default router;
