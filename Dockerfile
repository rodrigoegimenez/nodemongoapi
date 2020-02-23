FROM node:lts

WORKDIR /usr/src/app

COPY package*json ./

RUN npm ci --only=production

COPY . .

RUN npm install pm2 -g

EXPOSE 3000

CMD ["pm2-docker", "start", "process.json"]