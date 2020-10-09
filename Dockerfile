FROM node:12.19.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3080

CMD [ "yarn", "start" ]