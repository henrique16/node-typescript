FROM alpine:latest
WORKDIR /util
COPY package*.json ./
COPY tsconfig.json ./
COPY pm2.json ./
RUN apk add --update npm
RUN npm install pm2 -g
RUN npm install tsc -g
RUN npm install
RUN tsc
COPY ./src ./src
CMD [ "pm2-runtime", "start", "pm2.json" ]