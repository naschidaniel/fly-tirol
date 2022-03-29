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

if (
  !(
    process.env.NUXT_PAGE === 'whitecloud' ||
    process.env.NUXT_PAGE === 'flytirol'
  )
) {
  // eslint-disable-next-line no-console
  throw console.error(
    `NUXT_PAGE = ${process.env.NUXT_PAGE} | NUXT_PAGE is not set!`
  )
}

export default {
  target: 'server',
  dir: {
    pages:
      process.env.NUXT_PAGE === 'whitecloud'
        ? 'pages_whitecloud'
        : 'pages_flytirol',
    static:
      process.env.NUXT_PAGE === 'whitecloud'
        ? 'static_whitecloud'
        : 'static_flytirol',
  },
  head: {
    titleTemplate:
      process.env.NUXT_PAGE === 'whitecloud'
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
        content:
          process.env.NUXT_PAGE === 'whitecloud'
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
        content:
          process.env.NUXT_PAGE === 'whitecloud'
            ? 'WHITE-CLOUD TANDEMFLÜGE - Paragleiten in Söll am Wilden Kaiser, oder von Hopfgarten in Brixental. Mit der Bergbahn hinauf auf der Hohe Salve.'
            : 'Die Fly Tirol Flugschule in Westendorf ist dein Ansprechpartner rund um das Thema “Paragleiten” in den Kitzbüheler Alpen und darüber hinaus!',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          process.env.NUXT_PAGE === 'whitecloud'
            ? 'WHITE-CLOUD TANDEMFLÜGE - Paragleiten in Söll am Wilden Kaiser, oder von Hopfgarten in Brixental. Mit der Bergbahn hinauf auf der Hohe Salve.'
            : 'Die Fly Tirol Flugschule in Westendorf ist dein Ansprechpartner rund um das Thema “Paragleiten” in den Kitzbüheler Alpen und darüber hinaus!',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          process.env.NUXT_PAGE === 'whitecloud'
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
        content:
          process.env.NUXT_PAGE === 'whitecloud'
            ? 'https://white-cloud.tirol/'
            : 'https://fly-tirol.com',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css:
    process.env.NUXT_PAGE === 'whitecloud'
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
    licenses: dependencies,
    NUXT_PAGE: process.env.NUXT_PAGE,
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
    port: process.env.NUXT_PAGE === 'whitecloud' ? 3001 : 3000,
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
