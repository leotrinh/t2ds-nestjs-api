FROM node:lts-alpine
LABEL maintainer "p.nhatminh1502@gmail.com"

WORKDIR /app

COPY package.json .
RUN set -x && yarn

COPY . .

RUN mv .env.docker ./.env
RUN yarn prebuild && yarn build
EXPOSE 3000

CMD yarn start:dev

