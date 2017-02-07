# Static-Site
[![CircleCI](https://circleci.com/gh/redbrick/static-site.svg?style=svg)](https://circleci.com/gh/redbrick/static-site)

A Static Site for [redbrick](http://redbrick.dcu.ie) generated with [hexo](hexo.io) using a theme
based off [icarus](https://github.com/redbrick/hexo-theme-icarus)

## Requirements

1. **Node** : v6.9(LTS)  Download [Node](https://nodejs.org/download/)

## Setup

To set up run:
  - `yarn` this will install all the dependencies

You will also need to create three files:
  - `mailing_list` a newline-separated list of email addresses
  - `email_update_log` a newline-separated reverse-chronological list of times email updates were sent
  - `.env` by copying `.env.example` and **modifying values (*important*)**

`mailing_list` and `email_update_log` can be left blank, though updates for every post in history will be sent if no previous send date is specified.

## Generate
- To demo the site run `npm start`. This will create a server that runs on localhost:3000
- To work on css and have it auto regenerate use `yarn hexo`. This will create a server that runs on localhost:4000

## Generate via API
- While the server is live, a visit to `http://[sitehost]/api/regenerate?token=your_secret_token` will run `hexo generate` and send emails for any new posts so long as that process is not already underway.

## Development
- To generate new posts
  - Run `yarn posts [title]` This will create a new post in source/_post/[title].md
- To generate new pages:
  - Run `yarn page [title]` this will create a new page in source/[title]/index.md
- To edit the sidebar:
  - Edit themes/redbrick-theme/_config.yaml - this is where all the theme configuration is controlled from.

### CSS and Templates
- You can edit the css for the theme in themes/redbrick-theme/source/css
- You can edit the templates in themes/redbrick-theme/layout

### Google analytics
Analytics can be enabled by adding your analytics key to theme/redbrick/_config.yaml

## Deployment
To deploy to a server run:
  - `yarn`
  - modify _config.yml with mailhost info
  - `yarn start`

Then using apache or nginx proxy traffic to port 3000. 
And done. 
You can create a service to run the server on startup if you want refer to express docs and using a service for this

### Docker
There is a docker file if you want to generate a container that runs in production mode.
To build just run `docker build . -t redbrick/site`
Then to run just run `docker run -it --rm -p=3000:3000 -v source:/usr/src/spp/source --name redbrick-site redbrick/site`
Source volume needs to be specified otherwise it wont have anything to generate
Or Just run `docker-compose up`
