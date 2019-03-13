FROM node:dubnium-alpine

RUN apk update && apk add curl make python && rm -rf /var/cache/apk/*

ENV HOME /home/node/app
ENV LOG_PATH /var/log/app
ENV NODE_PATH $HOME/src
ENV OUTPUT_PATH $HOME/dist

RUN mkdir -p $LOG_PATH

WORKDIR $HOME

VOLUME [$HOME]
VOLUME [$LOG_PATH]

RUN chown -R node:node $HOME
RUN chown -R node:node $LOG_PATH
RUN chown -R node:node $OUTPUT_PATH
USER node
