ARG NODE_VERSION=12

FROM node:${NODE_VERSION} AS builder

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
