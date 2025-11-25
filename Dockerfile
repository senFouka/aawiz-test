FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --force

COPY . .

RUN npx next build

EXPOSE 3000

CMD npx next start -p 3000