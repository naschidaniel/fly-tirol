FROM node:22.14.0-bullseye

ARG NUXT_PAGE

ARG NUXT_BACKEND

ENV NUXT_PAGE=$NUXT_PAGE

ENV NUXT_BACKEND=$NUXT_BACKEND

ARG PORT

ENV NITRO_PORT=$PORT

RUN apt-get update -y

WORKDIR /app

COPY .output  /app/

ENV HOST=0.0.0.0

EXPOSE $PORT

CMD ["node", "server/index.mjs"]
