FROM node:carbon
WORKDIR /app
ADD . /app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 8080
CMD ["yarn", "start"]
