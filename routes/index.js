const express = require('express');
const postsRoute = require('./posts');
const committeeRoute = require('./committee');
const regenerateRoute = require('./regenerate');

const router = express.Router();

// Legecy routes pre-version held to try not break anyithing
router
  .get('/api/posts', postsRoute)
  .get('/api/committee', committeeRoute)
  .get('/api/regenerate', regenerateRoute)
  .get('/api/fetchMeSomeTea', teapot);

const baseUrl = '/api/v1';
router
  .get(`${baseUrl}/posts`, postsRoute)
  .get(`${baseUrl}/committee`, committeeRoute)
  .get(`${baseUrl}/regenerate`, regenerateRoute)
  .get(`${baseUrl}/fetchMeSomeTea`, teapot)
  .get(`${baseUrl}/coffee`, teapot);

function teapot(req, res, next) {
  res
    .status(418)
    .json({ message: "I'm a teapot", image: 'https://httpstatusdogs.com/img/418.jpg' });
}

module.exports = router;
