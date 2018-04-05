const { wrap, readFileAsString, orderBy } = require('../lib/utils');
const { readFileSync, readdir } = require('fs-extra');
const path = require('path');
const { parse } = require('hexo-front-matter');
const moment = require('moment');
const { safeLoad } = require('js-yaml');
const { merge } = require('lodash');

const config = safeLoad(readFileSync('_config.yml', 'utf8')).server;

const postsDirectory = path.join(process.cwd(), 'source/_posts');

const postData = (slugs, { include }) => (post, index) => {
  const frontMatter = parse(post);
  const directory = moment(frontMatter.date, 'YYYY/MM/DD').format('YYYY/MM/DD');
  const permalink = `${config.siteroot}/${path.join(directory, slugs[index])}`;
  const content = frontMatter._content.split(/!\[[\w\W]*]\([\w\W]*\)/).join('');

  return {
    title: frontMatter.title,
    date: frontMatter.date,
    author: frontMatter.author,
    tags: frontMatter.tags,
    permalink,
    thumbnail: frontMatter.thumbnail ? `${permalink}/${frontMatter.thumbnail}` : undefined,
    content: include.includes('content') ? content.split('<!-- more -->').join('') : '',
    excerpt: include.includes('excerpt') ? content.split('<!-- more -->')[0] : '',
  };
};

const getPosts = options => ({ fullpaths, slugs }) =>
  Promise.all(fullpaths.map(readFileAsString)).then(posts =>
    orderBy(posts.map(postData(slugs, options)), ({ date }) => new Date(date))
      .reverse()
      .slice(options.offset, options.offset + options.limit));

const postFilenames = filenames => filenames.filter(filename => filename.includes('.md'));

const getLatestPosts = options =>
  readdir(postsDirectory)
    .then(filenames => ({
      fullpaths: postFilenames(filenames).map(filename => path.join(postsDirectory, filename)),
      slugs: postFilenames(filenames).map(filename => filename.slice(0, -3)),
    }))
    .then(getPosts(merge(
      {
        offset: 0,
        limit: 10,
        include: [],
      },
      options,
    )));

/* fetches latest blog posts as JSON list
 * optional query params:
 *  - offset (0-indexed starting point - default 0)
 *  - limit (0-indexed maximum number of returned results - default 10)
 *  - include (comma-separated list possibly including 'content,excerpt')
 */
module.exports = wrap(async ({ query }, res, next) => {
  res
    .json(await getLatestPosts({
      offset: parseInt(query.offset, 10),
      limit: parseInt(query.limit, 10),
      include: (query.include || '').split(','),
    }))
    .end();
});
