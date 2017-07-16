import express from 'express';
import getLatestPosts from '../lib/getLatestPosts';

const router = express.Router();
/* fetches latest blog posts as JSON list
 * optional query params:
 *  - offset (0-indexed starting point - default 0)
 *  - limit (0-indexed maximum number of returned results - default 10)
 *  - include (comma-separated list possibly including 'content,excerpt')
 */
router.get('/posts', ({ query }, res) => {
  getLatestPosts({
    offset : parseInt(query.offset),
    limit  : parseInt(query.limit),
    include: (query.include || '').split(','),
  }).then((posts) => {
    res.json(posts).end();
  })
  .catch((err) => {
    return res.status(500).json(err).end();
  });
});

export default router;
