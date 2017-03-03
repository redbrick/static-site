const express = require('express');
const router = express.Router();
const getLatestPosts = require('../lib/getLatestPosts');

/* fetches latest blog posts as JSON list
 * optional query params:
 *  - offset (0-indexed starting point - default 0)
 *  - limit (0-indexed maximum number of returned results - default 10)
 *  - include (comma-separated list possibly including 'content,excerpt')
 */
router.get('/posts', ({ query }, res) => {
  getLatestPosts(
    {
      offset : parseInt(query.offset),
      limit  : parseInt(query.limit),
      include: (query.include || '').split(','),
    },
    (err, posts) => {
      if (err) {
        return res.status(500).json(err).end();
      }
      res.json(posts).end();
    }
  );
});

module.exports = router;
