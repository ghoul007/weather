###### stage1
FROM node:latest as node
LABEL author="ahmed GHOUL"
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build

###### stage2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/dist/weather /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
