FROM node:boron-onbuild
ENV NODE_ENV=production
VOLUME /usr/src/app/public
VOLUME /usr/src/app/logs
EXPOSE 3000
