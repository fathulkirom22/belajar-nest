FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

# seeder user
# RUN yarn nestjs-command create:user

EXPOSE 3080

RUN yarn build

CMD [ "yarn", "start:prod" ]