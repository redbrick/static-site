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

function getLatestPosts (options, callback) {
  options.offset = parseInt(options.offset) || 0;
  options.limit = parseInt(options.limit) || 10;
  options.include = (options.include || '').split(',').filter(function (i) {
    return i === 'content' || i === 'excerpt';
  });

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
        const frontMatter = parseFrontMatter(post);
        const directory = moment(frontMatter.date).format('YYYY/MM/DD');
        const permalink = config.siteroot + '/' + path.join(directory, slugs[index]);
        const thumbnail = frontMatter.thumbnail ? permalink + '/' + frontMatter.thumbnail : void 0;

        const data = {
          title: frontMatter.title,
          date: frontMatter.date,
          author: frontMatter.author,
          tags: frontMatter.tags,
          permalink: permalink,
          thumbnail: thumbnail
        };

        // strip out images
        const content = (
          frontMatter._content
            .split(/!\[[\w\W]*\]\([\w\W]*\)/)
            .join('')
        );

        if (options.include.indexOf('content') !== -1) {
          data.content = content.split('<!-- more -->').join('');
        }

        if (options.include.indexOf('excerpt') !== -1) {
          data.excerpt = content.split('<!-- more -->')[0];
        }

        return data;
      });

      const selectedPostData = orderBy(postDataList, function (data) {
        return new Date(data.date);
      }).reverse().slice(options.offset, options.offset + options.limit);

      callback(null, selectedPostData);
    });
  });
}

module.exports = getLatestPosts;
