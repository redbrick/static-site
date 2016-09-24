# Static-Site
[![Build Status](https://travis-ci.org/redbrick/static-site.svg?branch=master)](https://travis-ci.org/redbrick/static-site)

A Static Site for [redbrick](http://redbrick.dcu.ie) generated with [hexo](hexo.io) using a theme
based off [icarus](https://github.com/redbrick/hexo-theme-icarus)

Demo on [redbrick.github.io](http://redbrick.github.io), (some links are broken due being served by the express router such as the contact page

## Requirements

1. **Node** : v0.10.35 or higher. Download [Node](https://nodejs.org/download/)
2. **Hexo CLI** : v0.1.4 or higher. Run `npm install hexo-cli -g`

## Setup

To set up just run:
  - `npm install` this will install all the dependencies

## Generate
- To demo the site run `npm start`. This will create a server that runs on localhost:3000
- To work on css and have it auto regenerate use `hexo server`. This will create a server that runs on localhost:4000

## Development
- To generate new posts
  - Run `hexo new posts [title]` This will create a new post in source/_post/[title].md
- To generate new pages:
  - Run `hexo new page [title]` this will create a new page in source/[title]/index.md
- To edit the sidebar:
  - Edit theme/tranquilpeak/_config.yaml - this is where all the theme configuration is controlled from.

### CSS and Templates
- You can edit the css for the theme in theme/redbrick-theme/source/css
- You can edit the templates in theme/redbrick-theme/layout

### Google analytics
Analytics can be enabled by adding your analytics key to theme/redbrick/_config.yaml

## Deployment
To deploy to a server run:
  - `npm install`
  - modify config.json with mailhost info
  - `npm start`

Then using apache or nginx proxy traffic to port 3000. 
And done. 
You can create a sevice to run the server on startup if you want refer to express docs and using a service for this

### Docker
Theres a docker file if you want to generate a contair that runs in production mode
