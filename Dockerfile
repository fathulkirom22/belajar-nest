FROM node:12.19.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

# seeder user
# RUN yarn nestjs-command create:user

EXPOSE 3080

CMD [ "yarn", "start" ]