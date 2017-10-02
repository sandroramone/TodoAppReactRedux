FROM node:8.4

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm i

EXPOSE 8080
