FROM node:lts-buster as builder

ENV TZ=Europe/Berlin

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update

RUN apt-get install rsync -y

WORKDIR /app

RUN curl -L https://github.com/naschidaniel/image-optimizer/releases/download/main/image-optimizer-linux --output image-optimizer && chmod +x image-optimizer

COPY . .

RUN echo "NUXT_ENV_CURRENT_DATE=\"$(date '+%F %H:%M:%S')\"" >> .env

RUN yarn install \
  --non-interactive \
  --production=false

RUN yarn build

RUN rm -rf .git && rm -rf ./dist/media

RUN yarn generateMediaInformation

RUN yarn optimize-images

RUN rsync -a ./dist/media/ ./static/media/

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:lts-buster

WORKDIR /app

COPY --from=builder /app  .

ENV HOST 0.0.0.0

EXPOSE 5000

CMD [ "yarn", "start" ]
