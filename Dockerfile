FROM node:14.21.3
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build