const { readFileSync } = require('fs-extra');
const path = require('path');
const { parse } = require('hexo-front-matter');
const { safeLoad } = require('js-yaml');
const { isUndefined, merge } = require('lodash');
const { wrap, readFileAsString } = require('../lib/utils.js');

const { siteroot } = safeLoad(readFileSync('_config.yml', 'utf8')).server;

/*
 * Fetches Array of Current committee
 */
const getCommittee = async (year) => {
  if (!isUndefined(year) && new Date().getFullYear() < parseInt(year, 10)) {
    throw new Error(`There is no committee for ${year}`);
  }
  return readFileAsString(new Date().getFullYear() === parseInt(year, 10) || isUndefined(year)
    ? path.join(process.cwd(), 'source', 'about', 'committee', 'index.md')
    : path.join(
      process.cwd(),
      'source',
      'about',
      'past-committees',
      `the-committee-${year}-${parseInt(year, 10) + 1}`,
      'index.md',
    ))
    .then(page => parse(page).cmt)
    .then(committee =>
      committee.map(member =>
        merge(member, {
          image: `${siteroot}/assets/images/${member.image}` || '',
        })));
};

module.exports = wrap(async ({ query }, res, next) => {
  res.json(await getCommittee(query.year)).end();
});
