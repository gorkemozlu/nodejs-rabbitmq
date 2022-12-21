FROM node:19.1.0-alpine3.15

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5555
CMD [ "node", "app.js" ]