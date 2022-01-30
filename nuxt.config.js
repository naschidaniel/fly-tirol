import { readFileSync } from 'fs'

const packages = JSON.parse(
  readFileSync('./package.json', { encoding: 'utf8' })
)
const dependencies = Object.keys(packages.dependencies)
  .map((dependency) =>
    JSON.parse(
      readFileSync(`node_modules/${dependency}/package.json`, {
        encoding: 'utf8',
      })
    )
  )
  .map(({ name, version, license }) => ({
    name,
    version,
    license,
  }))

export default {
  target: 'server',
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

  css: ['~/assets/css/main.css'],

  components: true,

  buildModules: [
    'cookie-universal-nuxt',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-shopify',
  ],
  env: {
    buildTime: +new Date(),
    licenses: dependencies,
  },
  shopify: {
    domain: process.env.SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
    unoptimized: false,
  },
  modules: ['cookie-universal-nuxt'],

  generate: {
    fallback: '404.html',
    generate: {
      interval: 2000,
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
