FROM node:16-bullseye

ARG NUXT_PAGE

ENV NUXT_PAGE=$NUXT_PAGE

ARG PORT

ENV NITRO_PORT=$PORT

RUN apt-get update -y

WORKDIR /app

COPY .output  /app/

ENV HOST 0.0.0.0

EXPOSE $PORT

CMD ["node", "server/index.mjs"]
