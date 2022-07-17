import { existsSync, readFileSync } from 'fs'
import { defineNuxtConfig } from 'nuxt'

const packages = JSON.parse(
  readFileSync('./package.json', { encoding: 'utf8' })
)

const isFlyTirol = process.env.NUXT_PAGE === 'flytirol'
const isWhiteCloud = process.env.NUXT_PAGE === 'whitecloud'

const licenses = Object.keys(packages.dependencies)
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

if (!(isWhiteCloud || isFlyTirol)) {
  throw new Error(
    `NUXT_PAGE = ${process.env.NUXT_PAGE} | NUXT_PAGE is not set!`
  )
}

if (
  !(
    existsSync('./data/metadataFlyTirol.js') ||
    existsSync('./data/metadataWhiteCloud.js')
  )
) {
  throw new Error(
    'No metadata could be found in ./data! RUN yarn generateContent'
  )
}

const instagram = isFlyTirol ? 'fly.tirol' : 'white_cloud_paragliding'
const mail = isFlyTirol ? 'info@fly-tirol.com' : 'info@white-cloud.tirol'
const phone = isFlyTirol ? '+436766422088' : '+4368181589568'
const phoneString = isFlyTirol ? '+43 676 6422088' : '+43 681 81589568'
const shopifyDomain = process.env.SHOPIFY_DOMAIN
const shopifyAccessToken = process.env.SHOPIFY_ACCESS_TOKEN
const website = isFlyTirol ? 'fly-tirol.com' : 'white-cloud.tirol'
const websiteUrl = isFlyTirol
  ? 'https://fly-tirol.com'
  : 'https://white-cloud.tirol'

export default defineNuxtConfig({
  target: 'server',
  dir: {
    pages: isWhiteCloud ? 'pages_whitecloud' : 'pages_flytirol',
    public: isWhiteCloud ? 'public_whitecloud' : 'public_flytirol',
  },
  head: {
    // TODO NUXT3
    // migrate to useHead
    // titleTemplate: isWhiteCloud
    //   ? 'WHITE-CLOUD TANDEMFLÜGE - Paragleiten am Wilden Kaiser - %s'
    //   : 'Fly-Tirol.com - Flugschule Kitzbühleralpen - %s',
    title: isWhiteCloud
      ? 'WHITE-CLOUD TANDEMFLÜGE - Paragleiten am Wilden Kaiser'
      : 'Fly-Tirol.com - Flugschule Kitzbühleralpen',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: isWhiteCloud
          ? 'WHITE-CLOUD TANDEMFLÜGE - Paragleiten am Wilden Kaiser'
          : 'Fly-Tirol.com - Flugschule Kitzbühleralpen',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'description',
        name: 'description',
        content: isWhiteCloud
          ? 'WHITE-CLOUD TANDEMFLÜGE - Paragleiten in Söll am Wilden Kaiser, oder von Hopfgarten in Brixental. Mit der Bergbahn hinauf auf der Hohe Salve.'
          : 'Die Fly Tirol Flugschule in Westendorf ist dein Ansprechpartner rund um das Thema “Paragleiten” in den Kitzbüheler Alpen und darüber hinaus!',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: isWhiteCloud
          ? 'WHITE-CLOUD TANDEMFLÜGE - Paragleiten in Söll am Wilden Kaiser, oder von Hopfgarten in Brixental. Mit der Bergbahn hinauf auf der Hohe Salve.'
          : 'Die Fly Tirol Flugschule in Westendorf ist dein Ansprechpartner rund um das Thema “Paragleiten” in den Kitzbüheler Alpen und darüber hinaus!',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: isWhiteCloud
          ? 'https://white-cloud.tirol/media/WhiteCloudLogo_sm.jpg'
          : 'https://fly-tirol.com/media/FlyTirolLogo_sm.jpg',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: isWhiteCloud
          ? 'https://white-cloud.tirol/'
          : 'https://fly-tirol.com',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: isWhiteCloud
    ? ['~/assets/css/main.css', '~/assets/css/whitecloud.css']
    : ['~/assets/css/main.css', '~/assets/css/flytirol.css'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],
  runtimeConfig: {
    public: {
      buildTime: +new Date(),
      instagram,
      isDevelopment: process.env.NODE_ENV === 'development',
      isFlyTirol,
      isWhiteCloud,
      licenses,
      mail,
      phone,
      phoneString,
      shopifyDomain,
      shopifyAccessToken,
      website,
      websiteUrl,
    },
  },
  modules: ['@nuxtjs/tailwindcss'],

  generate: {
    fallback: '404.html',
    generate: {
      interval: 2000,
    },
  },

  tailwindcss: {
    configPath: '~/tailwind.config.cjs',
  },

  experimental: {
    viteNode: true,
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
})
