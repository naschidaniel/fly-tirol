import path from 'path'
import fs from 'fs'

export default {
  dev: process.env.NODE_ENV !== 'production',
  target: 'static',
  ssr: false,
  head: {
    titleTemplate: 'Fly-Tirol.com - Flugschule Kitzbühleralpen - %s',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Fly-Tirol.com - Flugschule Kitzbühleralpen',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Die Fly Tirol Flugschule in Westendorf ist dein Ansprechpartner rund um das Thema “Paragleiten” in den Kitzbüheler Alpen und darüber hinaus!',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Die Fly Tirol Flugschule in Westendorf ist dein Ansprechpartner rund um das Thema “Paragleiten” in den Kitzbüheler Alpen und darüber hinaus!',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://fly-tirol.com/media/FlyTirolLogo_sm.jpg',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://fly-tirol.com',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/styles/main.scss'],

  plugins: ['~/plugins/formatters.js'],

  components: true,

  buildModules: [
    'cookie-universal-nuxt',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-shopify',
  ],
  shopify: {
    domain: process.env.SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
    unoptimized: true,
  },
  modules: ['@nuxt/content', 'cookie-universal-nuxt'],

  generate: {
    fallback: '404.html',
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map((file) =>
        file.path.includes('/index') ? '/' : file.path
      )
    },
  },

  content: {
    liveEdit: false,
  },

  build: {
    extractCSS: true,
  },

  router: {
    linkExactActiveClass: 'active',
  },

  server: {
    host: '0.0.0.0', // default: localhost,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt')),
    },
  },

  babel: {
    presets: [
      [
        '@nuxtjs/babel-preset-app',
        {
          targets: '> 5%, not dead',
        },
      ],
    ],
  },
}
