import fs from 'fs';
import path from 'path';
import {parse as parseFrontMatter} from 'hexo-front-matter';
import yaml from 'js-yaml';
import isUndefined from 'lodash.isundefined';
import {readFileAsString} from './utils';

const configFile = fs.readFileSync('_config.yml', 'utf8');
const config = yaml.safeLoad(configFile).server;

const getCommittee = (year) => {
  return new Promise((resolve, reject) => {
    let committeePage;
    if (new Date().getFullYear() === parseInt(year) || isUndefined(year)) {
      committeePage = path.join(process.cwd(), 'source', 'about', 'committee', 'index.md');
    } else if (new Date().getFullYear() > parseInt(year)) {
      committeePage = path.join(process.cwd(), 'source', 'about', 'past-committees', `the-committee-${year}-${parseInt(year) + 1}`, 'index.md');
    } else {
      return reject(new Error(`There is no committee for ${year}`));
    }
    readFileAsString(committeePage, (err, page) => {
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

export default getCommittee;
