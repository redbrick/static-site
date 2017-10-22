import fs from 'fs-extra';
import path from 'path';
import { parse as parseFrontMatter } from 'hexo-front-matter';
import moment from 'moment';
import yaml from 'js-yaml';
import { orderBy, readFileAsString } from './utils.mjs';

const configFile = fs.readFileSync('_config.yml', 'utf8');
const config = yaml.safeLoad(configFile).server;

const postsDirectory = path.join(process.cwd(), 'source/_posts');

export default async function getLatestPosts(options) {
  try {
    options.offset = options.offset || 0;
    options.limit = options.limit || 10;
    options.include = options.include || [];
    const filenames = await fs.readdir(postsDirectory);
    const postFilenames = filenames.filter(filename => filename.includes('.md'));
    const fullpaths = postFilenames.map(filename => path.join(postsDirectory, filename));
    const slugs = postFilenames.map(filename => filename.slice(0, -3));
    const posts = Promise.all(fullpaths.map(readFileAsString));
    const postDataList = posts.map((post, index) => {
      const { title, date, author, tags, thumbnail, _content } = parseFrontMatter(post);
      const directory = moment(date, 'YYYY/MM/DD').format('YYYY/MM/DD');
      const permalink = `${config.siteroot}/${path.join(directory, slugs[index])}`;
      const data = {
        title,
        date,
        author,
        tags,
        permalink,
        thumbnail: thumbnail ? `${permalink}/${thumbnail}` : undefined,
      };

      // strip out images
      const content = _content.split(/!\[[\w\W]*]\([\w\W]*\)/).join('');
      if (options.include.includes('content')) {
        data.content = content.split('<!-- more -->').join('');
      }
      if (options.include.includes('excerpt')) data.excerpt = content.split('<!-- more -->')[0];
      return data;
    });
    const selectedPostData = orderBy(postDataList, ({ date }) => new Date(date))
      .reverse()
      .slice(options.offset, options.offset + options.limit);
    return selectedPostData;
  } catch (err) {
    throw err;
  }
}
