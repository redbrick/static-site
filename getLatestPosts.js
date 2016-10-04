'use strict';
const fs = require('fs');
const path = require('path');
const async = require('async');
const parseFrontMatter = require('hexo-front-matter').parse;
const moment = require('moment');
const yaml = require('js-yaml');

const utils = require('./utils');
const readFileAsString = utils.readFileAsString;
const orderBy = utils.orderBy;

const configFile = fs.readFileSync('./_config.yml', 'utf8');
const config = yaml.safeLoad(configFile).server;

const postsDirectory = path.join(process.cwd(), 'source/_posts');

function getLatestPosts (offset, limit, callback) {
  offset = offset || 0;
  limit = limit || 10;

  fs.readdir(postsDirectory, function (err, filenames) {
    if (err) {
      return callback(err);
    }

    const postFilenames = filenames.filter(function (filename) {
      return filename.indexOf('.md') !== -1;
    });
    const fullpaths = postFilenames.map(function (filename) {
      return path.join(postsDirectory, filename);
    });
    const slugs = postFilenames.map(function (filename) {
      return filename.slice(0, -3);
    });

    async.map(fullpaths, readFileAsString, function (err, posts) {
      if (err) {
        return callback(err);
      }

      const postDataList = posts.map(function (post, index) {
        const data = parseFrontMatter(post);

        const directory = moment(data.date).format('YYYY/MM/DD');
        data.permalink = config.siteroot + '/' + path.join(directory, slugs[index]);

        return data;
      });

      const selectedPostData = orderBy(postDataList, function (data) {
        return new Date(data.date);
      }).reverse().slice(offset, offset + limit);
      console.log(offset, limit, offset+limit);

      callback(null, selectedPostData);
    });
  });
}

module.exports = getLatestPosts;
