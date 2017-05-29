FROM node:boron-alpine
WORKDIR /usr/src/app
VOLUME /usr/src/app/public /usr/src/app/logs
EXPOSE 3000
ADD . /usr/src/app/
RUN ls -al && apk add --no-cache git && yarn
ENV NODE_ENV=production
CMD yarn docker
