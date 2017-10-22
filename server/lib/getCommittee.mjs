import fs from 'fs-extra';
import path from 'path';
import { parse as parseFrontMatter } from 'hexo-front-matter';
import yaml from 'js-yaml';
import isUndefined from 'lodash/isUndefined';
import { readFileAsString } from './utils.mjs';

const configFile = fs.readFileSync('_config.yml', 'utf8');
const config = yaml.safeLoad(configFile).server;

export default async function getCommittee(year) {
  try {
    let committeePage;
    if (new Date().getFullYear() === parseInt(year, 10) || isUndefined(year)) {
      committeePage = path.join(process.cwd(), 'source', 'about', 'committee', 'index.md');
    } else if (new Date().getFullYear() > parseInt(year, 10)) {
      committeePage = path.join(
        process.cwd(),
        'source',
        'about',
        'past-committees',
        `the-committee-${year}-${parseInt(year, 10) + 1}`,
        'index.md',
      );
    } else {
      throw new Error(`There is no committee for ${year}`);
    }
    const page = await readFileAsString(committeePage);
    const frontMatter = parseFrontMatter(page);
    const committee = frontMatter.cmt;
    committee.forEach(({ image }, i) => {
      if (image) committee[i].image = `${config.siteroot}/assets/images/${image}`;
    });
    return committee;
  } catch (err) {
    throw err;
  }
}
