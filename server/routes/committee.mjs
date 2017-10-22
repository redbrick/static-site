import express from 'express';
import getCommittee from '../lib/getCommittee.mjs';

const router = express.Router();

/*
 * Fetches Array of Current committee
 */
router.get('/committee', ({ query }, res, next) => {
  getCommittee(query.year)
    .then(committee => {
      res.json(committee).end();
    })
    .catch(next);
});

export default router;
