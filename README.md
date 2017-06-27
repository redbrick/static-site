# Static-Site

[![CircleCI](https://circleci.com/gh/redbrick/static-site.svg?style=shield)](https://circleci.com/gh/redbrick/static-site)
[![Code Climate](https://codeclimate.com/github/redbrick/static-site/badges/gpa.svg)](https://codeclimate.com/github/redbrick/static-site)
[![Docker Build Status](https://img.shields.io/docker/build/jrottenberg/ffmpeg.svg)](https://hub.docker.com/r/redbrick/site/)
[![](https://images.microbadger.com/badges/version/redbrick/site.svg)](https://microbadger.com/images/redbrick/site)
[![](https://images.microbadger.com/badges/image/redbrick/site.svg)](https://microbadger.com/images/redbrick/site)

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
  - Run `yarn posts [title]` This will create a new post in `source/_post/[title].md`
- To generate new pages:
  - Run `yarn page [title]` this will create a new page in `source/[title]/index.md`
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

- You can edit the css for the theme in `themes/redbrick-theme/source/css`
- You can edit the templates in `themes/redbrick-theme/layout`

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
- Set any Environment Variables through the env file

`mailing_list` and `email_update_log` can be left blank, though updates for every post in history
will be sent if no previous send date is specified.

Then using apache or nginx proxy traffic to port 3000.

And done.

### Docker

To use docker in production theres a `docker-compose.yml` in the production folder.
- Copy the `.env.example` to `.env` relative to the `docker-compose.yml`.
- Modify `.env`
- Create a file called `mailing_list` and add email addresses for announce
- run `docker-compose up -d`

### Generate via API
- While the server is live, a visit to `http://[sitehost]/api/regenerate?token=your_secret_token`
  will run `hexo generate` and send emails for any new posts so long as that process is not already underway.

### Mail Options

To use sendmail rather then SMTP in the `_config.yml` set `useSendMail` to `true`.

To disable auth on SMTP leave `auth.user` and `auth.pass` as empty.

Modify the host, and port options as needed for SMTP either in the config or using the env
variables.

## Environment Variables

| Variable               | Example                    | Description                                                      |
| :---                   | :---:                      | ---:                                                             |
| `SECRET_API_TOKEN`     |                            | API key for regenerating the site                                |
| `RECAPTCHA_SECRET_KEY` |                            | Recaptcha server key from Google                                 |
| `RECAPTCHA_SITE_KEY`   |                            | Recaptcha site key same as the on in the theme                   |
| `LOG_ROTATE`           | `24h`                      | When to rotate logs                                              |
| `SMTP_HOST`            | `mailhost.redbrick.dcu.ie` | SMTP host address                                                |
| `SMTP_PORT`            | `25`                       | SMTP port for server                                             |
| `SMTP_SECURE`          | `false`                    | if using SSL or not                                              |
| `SMTP_USER`            | `no-reply`                 | redbrick username for SMTP auth leave off the `@redbrick.dcu.ie` |
| `SMTP_PASS`            |                            | account password                                                 |
| `SMTP_AUTH_METHOD`     | `plain`                    | auth method to use with SMTP. Defaults to plain                  |
| `PORT`                 | `3000`                     | port to run the server on defaults to 3000                       |
