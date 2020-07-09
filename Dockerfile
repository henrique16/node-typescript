FROM alpine:latest
WORKDIR /util
ADD . /util
RUN apk add --update npm
RUN npm install
RUN npm install pm2 -g
RUN npm run tsc
CMD [ "pm2-runtime", "start", "pm2.json" ]