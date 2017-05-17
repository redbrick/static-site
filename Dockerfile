FROM node:boron-alpine
WORKDIR /usr/src/app
VOLUME /usr/src/app/public /usr/src/app/logs
EXPOSE 3000
ADD app.js _config.yml yarn.lock package.json .gitmodules /usr/src/app/
ADD .git /usr/src/app/.git
ADD bin /usr/src/app/bin
ADD lib /usr/src/app/lib
ADD routes /usr/src/app/routes
ADD source /usr/src/app/source
RUN ls -al && apk add --no-cache git && yarn
ENV NODE_ENV=production
CMD yarn docker
