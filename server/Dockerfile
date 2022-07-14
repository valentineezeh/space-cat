FROM node:14-alpine3.15 AS base
WORKDIR /app
COPY package.json /app
RUN npm install
EXPOSE 4000
COPY . /app
ENTRYPOINT ["npm", "start"]
