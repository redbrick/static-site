const fs = require('fs');
const path = require('path');
const parseFrontMatter = require('hexo-front-matter').parse;
const yaml = require('js-yaml');

const configFile = fs.readFileSync('_config.yml', 'utf8');
const config = yaml.safeLoad(configFile).server;

const utils = require('./utils');
const readFileAsString = utils.readFileAsString;

const getCommittee = (page) => {
  return new Promise((resolve, reject) => {
    readFileAsString(page, (err, page) => {
      if (err) {
        return reject(err);
      };

      const frontMatter = parseFrontMatter(page);
      const committee = frontMatter.cmt;
      for (const i in committee) {
        if (committee[i].image) {
          committee[i].image = `${config.siteroot}/assets/images/${committee[i].image}`;
        }
      }
      resolve(committee);
    });
  });
};

const getCurrentCommittee = () => {
  return new Promise((resolve, reject) => {
    const committeePage = path.join(process.cwd(), 'source', 'about', 'committee', 'index.md');
    getCommittee(committeePage).then((cmt) => {
      resolve(cmt);
    })
    .catch((err) => {
      reject(err);
    });
  });
};

const getPastCommittee = (year) => {
  return new Promise((resolve, reject) => {
    const committeePage = path.join(process.cwd(), 'source', 'about', 'past-committee', `the-committee-${year}-${year + 1}`, 'index.md');
    getCommittee(committeePage).then((cmt) => {
      resolve(cmt);
    })
    .catch((err) => {
      reject(err);
    });
  });
};

module.exports = {
  getCurrentCommittee,
  getPastCommittee,
};
