FROM node:13.10.1

COPY . /app

WORKDIR /app

RUN npm install

CMD ["npm", "run", "prod"]