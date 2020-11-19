FROM node:12.19.1-alpine

ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install --production=false
COPY . .
EXPOSE 3000
RUN yarn build

CMD [ "yarn", "start:prod" ]