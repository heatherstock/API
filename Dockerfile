FROM node:alpine
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
COPY . /app
CMD node server.js
EXPOSE 3000