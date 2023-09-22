FROM node:latest

RUN mkdir -p /usr/src/app/frontend
WORKDIR /usr/src/app

RUN npm install -g nodemon

COPY package.json /usr/src/app/
RUN npm install

COPY frontend/package.json /usr/src/app/frontend
RUN npm install

COPY . /usr/src/app

EXPOSE 3000 4200
