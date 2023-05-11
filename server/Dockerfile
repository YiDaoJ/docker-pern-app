FROM node:20-alpine

WORKDIR /home/src/app

COPY ./package.json ./

RUN npm install

COPY . .

EXPOSE 3050

CMD ["node", "index.js"]