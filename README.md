# Static-Site

[![CircleCI](https://circleci.com/gh/redbrick/static-site.svg?style=shield)](https://circleci.com/gh/redbrick/static-site)
[![Code Climate](https://codeclimate.com/github/redbrick/static-site/badges/gpa.svg)](https://codeclimate.com/github/redbrick/static-site)
[![Docker Build Status](https://img.shields.io/docker/build/jrottenberg/ffmpeg.svg)](https://hub.docker.com/r/redbrick/site/)
[![](https://images.microbadger.com/badges/version/redbrick/site.svg)](https://microbadger.com/images/redbrick/site)
[![](https://images.microbadger.com/badges/image/redbrick/site.svg)](https://microbadger.com/images/redbrick/site)

A Static Site for [redbrick](http://redbrick.dcu.ie) generated with
[hugo](https://gohugo.io/) using a theme based off icarus

## Development

To set up the for development you will need hugo installed

- `hugo serve` to start the dev server

- To generate new posts
  - Run `hugo new -k posts [title]` This will create a new post in
    `source/_post/[title].md`
- To generate new pages:
  - Run `hugo new [title]` this will create a new page in
    `content/[title]/index.md`
- To edit the sidebar:
  - Edit `config.toml` - this is where all the configuration is controlled from.

### Docker

There's a `docker-compose.yml` for development.

Run `docker-compose up --build` rather then `yarn` commands

If you want to edit theme edit the `docker-compose.yml` and the theme folder as
a volume and clone the theme locally

### CSS and Templates

- You can edit the css for the theme in `assets/scss`
- You can edit the templates in `layout`

### Google analytics

Analytics can be enabled by adding your analytics key to variable in
`config.toml`

## License

Official website of DCU Redbrick Society.

Copyright (C) 2017 Redbrick and all contributors.

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later
version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with
this program. If not, see <https://www.gnu.org/licenses/>.
