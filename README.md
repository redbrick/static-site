# Static-Site
[![Build Status](https://travis-ci.org/redbrick/static-site.svg?branch=master)](https://travis-ci.org/redbrick/static-site)

A Static Site for [redbrick](http://redbrick.dcu.ie) generated with [hexo](hexo.io) using a theme
based off [tranquilpeak](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak)
Documentation for hexo can be found [here](hexo.io/docs/) and the themes documentaion can be
found in
[themes/tranquilpeak/docs](https://github.com/redbrick/static-site/tree/master/themes/tranquilpeak/docs)

Demo at [butlerx site](http://redbrick.dcu.ie/~butlerx/demo)

## Requirements

1. **Node** : v0.10.35 or higher. Download [Node](https://nodejs.org/download/)
2. **Hexo CLI** : v0.1.4 or higher. Run `npm install hexo-cli -g`
3. **ESLint** : v2.3.0 or higher. Run `npm install eslint -g`
4. **ESLint config Google** : v0.4.0 or higher. Run `npm install eslint eslint-config-google -g`

## Setup

To set up just run:
  - `npm run setup` this will install the theme
  - `npm install` this will install all the dependencies

## Generate
- To demo the site run `hexo server`. This will create a server that runs on localhost:4000
- To generate HTML to be deployed
  1. Set `url` & `root` in _config.yaml
  2. Run `hexo generate` - The generated site will be located in the public directory
- To deploy:
  1. Edit the `deploy` section in _config.yaml
  2. Run `hexo deploy`
    - Alternatively, you can run `hexo generate --deploy`

## Development
- To generate new posts
  - Run `hexo new posts [title]` This will create a new post in source/_post/[title].md
- To generate new pages:
  - Run `hexo new page [title]` this will create a new page in source/[title]/index.md
- To edit the sidebar:
  - Edit theme/tranquilpeak/_config.yaml - this is where all the theme configuration is controlled from.

### CSS and Templates
- You can edit the css for the theme in theme/tranquilpeak/source/_css
- You can edit the templates in theme/tranquilpeak/layout
- If you edit the theme it will need to be regenerated. This is done by running `grunt buildProd` from theme/tranquilpeak

## Deployment
To deploy to a server run:
  - `npm run setup` to download the theme
  - `npm install`
  - `hexo generate`
  - modify config.json with mailhost info
  - node server

Then using apache or nginx proxy traffic to port 3000. 
And done. 
You can create a sevice to run the server on startup if you want refer to express docs and using a service for this

### Google analytics
Analytics can be enabled by adding your analytics key to theme/redbrick/_config.yaml
