# Static-Site

[![CircleCI](https://circleci.com/gh/redbrick/static-site.svg?style=svg)](https://circleci.com/gh/redbrick/static-site)

A Static Site for [redbrick](http://redbrick.dcu.ie) generated with [hexo](https://hexo.io/) using a theme
based off [icarus](https://github.com/redbrick/hexo-theme-icarus)

## Requirements

1. **Node** : v6.9(LTS)  Download [Node](https://nodejs.org/download/)

## Development

To set up the for development

- `yarn` this will install all the dependencies
- copy `.env.example` to `.env`
- `yarn start` to create start the serve

- To generate new posts
  - Run `yarn posts [title]` This will create a new post in source/_post/[title].md
- To generate new pages:
  - Run `yarn page [title]` this will create a new page in source/[title]/index.md
- To edit the sidebar:
  - Edit `themes/redbrick-theme/_config.yaml` - this is where all the theme configuration is controlled from.

### Docker

Theres a `docker-compose.yml` for development.

- Copy `.env.example` to `.env`
- Run `docker-compose up`

### Generate

- To demo the site run `yarn start`. This will create a server that runs on `localhost:3000`
- To work on css and have it auto regenerate use `yarn hexo`. This will create a server that runs on `localhost:4000`

### CSS and Templates

- You can edit the css for the theme in themes/redbrick-theme/source/css
- You can edit the templates in themes/redbrick-theme/layout

### Google analytics

Analytics can be enabled by adding your analytics key to `theme/redbrick/_config.yaml`

## Production

### Setup

To deploy to a server run:

- `yarn` this will install all the dependencies
- modify `_config.yml` as needed
- copy `production/website.service` to `/etc/systemd/system`
- `yarn generate` to create initial site
- `systemctl start website` to start the express server

You will also need to create three files:

- `mailing_list` a newline-separated list of email addresses
- `email_update_log` a newline-separated reverse-chronological list of times email updates were sent
- `.env` by copying `.env.example` and **modifying values (*important*)**
- Set any Enviroment Variables through the env file

`mailing_list` and `email_update_log` can be left blank, though updates for every post in history will be sent if no previous send date is specified.

Then using apache or nginx proxy traffic to port 3000.

And done.

### Docker

To use docker in production theres a `docker-compose.yml` in the production folder.
Copy the `.env.example` to `.env` relative to the `docker-compose.yml`.
Modify `.env` and run `docker-compose up -d`

### Generate via API
- While the server is live, a visit to `http://[sitehost]/api/regenerate?token=your_secret_token` will run `hexo generate` and send emails for any new posts so long as that process is not already underway.

### Mail Options

## Environment Variables

| Variable | Example | Description |
| ---      | ---     | ---         |
|          |         |             |
