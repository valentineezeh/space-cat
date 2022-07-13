FROM node:14-alpine3.15 AS base
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 4000
CMD ["npm", "start"]
