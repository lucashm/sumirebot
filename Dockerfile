FROM node:13

COPY . /app

WORKDIR /app

RUN npm install

CMD ["npm", "start"]