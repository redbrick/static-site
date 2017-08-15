FROM node:alpine
MAINTAINER webmaster@redbrick.dcu.ie
WORKDIR /usr/src/app
VOLUME /usr/src/app/public /usr/src/app/logs
EXPOSE 3000
COPY. /usr/src/app/
ENV NODE_ENV=production
RUN apk add --no-cache git build-base file nasm autoconf libpng-dev openssl && yarn
CMD yarn docker
