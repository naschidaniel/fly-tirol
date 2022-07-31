FROM node:16-bullseye as builder

ARG NUXT_PAGE

ENV NUXT_PAGE=$NUXT_PAGE

ARG PORT

ENV NITRO_PORT=$PORT

ENV TZ=Europe/Berlin

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update -y

WORKDIR /app

COPY . .

RUN curl -L https://github.com/naschidaniel/image-optimizer/releases/download/v0.3.6/image-optimizer-linux --output image-optimizer && chmod +x image-optimizer

RUN yarn optimize-images:$NUXT_PAGE

RUN yarn install --non-interactive

RUN yarn generateContent

RUN yarn generateMediaInformation

RUN yarn build

RUN rm -rf .git

FROM node:16-bullseye

ARG NUXT_PAGE

ENV NUXT_PAGE=$NUXT_PAGE

ARG PORT

ENV NITRO_PORT=$PORT

RUN apt-get update -y

WORKDIR /app

COPY --from=builder /app/.output  /app/

ENV HOST 0.0.0.0

EXPOSE $PORT

CMD ["node", "server/index.mjs"]
