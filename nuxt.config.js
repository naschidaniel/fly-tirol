import { readFileSync } from 'fs'

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
  // eslint-disable-next-line no-console
  throw console.error(
    `NUXT_PAGE = ${process.env.NUXT_PAGE} | NUXT_PAGE is not set!`
  )
}

const instagram = isFlyTirol ? 'fly.tirol' : 'white_cloud_paragliding'
const mail = isFlyTirol ? 'info@fly-tirol.com' : 'info@white-cloud.tirol'
const phone = isFlyTirol ? '+436766422088' : '+4368181589568'
const phoneString = isFlyTirol ? '+43 676 6422088' : '+43 681 81589568'
const website = isFlyTirol ? 'fly-tirol.com' : 'white-cloud.tirol'
const websiteUrl = isFlyTirol
  ? 'https://fly-tirol.com'
  : 'https://white-cloud.tirol'

export default {
  target: 'server',
  dir: {
    pages: isWhiteCloud ? 'pages_whitecloud' : 'pages_flytirol',
    static: isWhiteCloud ? 'static_whitecloud' : 'static_flytirol',
  },
  head: {
    titleTemplate: isWhiteCloud
      ? 'WHITE-CLOUD TANDEMFLÜGE - Paragleiten am Wilden Kaiser - %s'
      : 'Fly-Tirol.com - Flugschule Kitzbühleralpen - %s',
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

  buildModules: [
    'cookie-universal-nuxt',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    'nuxt-shopify',
  ],
  env: {
    buildTime: +new Date(),
    instagram,
    isFlyTirol,
    isWhiteCloud,
    licenses,
    mail,
    phone,
    phoneString,
    website,
    websiteUrl,
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
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  router: {
    linkExactActiveClass: 'active',
  },

  server: {
    port: isWhiteCloud ? 3001 : 3000,
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
