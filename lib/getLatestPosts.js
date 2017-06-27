const fs = require('fs');
const path = require('path');
const async = require('async');
const parseFrontMatter = require('hexo-front-matter').parse;
const moment = require('moment');
const yaml = require('js-yaml');

const utils = require('./utils');
const readFileAsString = utils.readFileAsString;
const orderBy = utils.orderBy;

const configFile = fs.readFileSync('_config.yml', 'utf8');
const config = yaml.safeLoad(configFile).server;

const postsDirectory = path.join(process.cwd(), 'source/_posts');

const getLatestPosts = (options) => {
  return new Promise((resolve, reject) => {
    options.offset = options.offset || 0;
    options.limit = options.limit || 10;
    options.include = options.include || [];

    fs.readdir(postsDirectory, (err, filenames) => {
      if (err) {
        return reject(err);
      }
      const postFilenames = filenames.filter(filename => filename.indexOf('.md') !== -1);
      const fullpaths = postFilenames.map(filename => path.join(postsDirectory, filename));
      const slugs = postFilenames.map(filename => filename.slice(0, -3));
      async.map(fullpaths, readFileAsString, (err, posts) => {
        if (err) {
          return reject(err);
        }
        const postDataList = posts.map((post, index) => {
          const frontMatter = parseFrontMatter(post);
          const directory = moment(frontMatter.date, 'YYYY/MM/DD').format('YYYY/MM/DD');
          const permalink = `${config.siteroot}/${path.join(directory, slugs[index])}`;
          const thumbnail = frontMatter.thumbnail ? `${permalink}/${frontMatter.thumbnail}` : void 0;

          const data = {
            title : frontMatter.title,
            date  : frontMatter.date,
            author: frontMatter.author,
            tags  : frontMatter.tags,
            permalink,
            thumbnail,
          };

          // strip out images
          const content = frontMatter._content.split(/!\[[\w\W]*]\([\w\W]*\)/).join('');
          if (options.include.indexOf('content') !== -1) {
            data.content = content.split('<!-- more -->').join('');
          }
          if (options.include.indexOf('excerpt') !== -1) {
            data.excerpt = content.split('<!-- more -->')[0];
          }
          return data;
        });

        const selectedPostData = orderBy(postDataList, ({ date }) => new Date(date)).reverse().slice(options.offset, options.offset + options.limit);
        resolve(selectedPostData);
      });
    });
  });
};

module.exports = getLatestPosts;
