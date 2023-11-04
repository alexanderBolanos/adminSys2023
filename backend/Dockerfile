FROM node:20-alpine3.17

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install --production
RUN npm install pm2 -g

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]