FROM node:16-bullseye as builder

ARG NUXT_PAGE

ENV NUXT_PAGE=$NUXT_PAGE

ENV TZ=Europe/Berlin

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update -y

RUN apt-get install rsync -y

WORKDIR /app

COPY . .

RUN yarn install \
  --non-interactive \
  --production=false

RUN yarn generateContent

RUN yarn lintContent

RUN yarn build

RUN rm -rf .git

RUN rm -rf .nuxt/dist/media

RUN curl -L https://github.com/naschidaniel/image-optimizer/releases/download/main/image-optimizer-linux --output image-optimizer && chmod +x image-optimizer

RUN yarn generateMediaInformation

RUN yarn optimize-images:$NUXT_PAGE

RUN rsync -a .nuxt/dist/media/ ./static_$NUXT_PAGE/media/

RUN rm -rf .nuxt/dist/media/

RUN rm -rf node_modules

RUN NODE_ENV=production yarn install \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:16-bullseye

ARG NUXT_PAGE

ENV NUXT_PAGE=$NUXT_PAGE

ARG PORT

RUN apt-get update -y

WORKDIR /app

COPY --from=builder /app  .

ENV HOST 0.0.0.0

EXPOSE $PORT

CMD [ "yarn", "start" ]
