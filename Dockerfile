FROM node:6-onbuild

ENV NODE_ENV=production

RUN npm install -g hexo-cli
CMD npm start

EXPOSE 3000
