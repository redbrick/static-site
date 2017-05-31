FROM node:boron-alpine
WORKDIR /usr/src/app
VOLUME /usr/src/app/public /usr/src/app/logs
EXPOSE 3000
ADD . /usr/src/app/
RUN apk add --no-cache git && yarn
WORKDIR /usr/src/app/themes/redbrick-theme
RUN yarn
WORKDIR /usr/src/app
ENV NODE_ENV=production
CMD yarn docker
