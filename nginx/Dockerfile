FROM node:11.10.1-alpine AS builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx

RUN mkdir /nginx

RUN rm -v /etc/nginx/nginx.conf
COPY ./nginx/nginx.conf /etc/nginx/
# COPY ./nginx/ssl/private.key /etc/ssl/private.key
# COPY ./nginx/ssl/site.crt /etc/ssl/site.crt

COPY --from=builder /app/dist /nginx/static
