# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /src
COPY . .
RUN yarn install --production
CMD ["node", "src/main.js"]
EXPOSE 3000