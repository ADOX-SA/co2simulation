FROM node:18.20.8
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build
EXPOSE 3000
RUN npm start