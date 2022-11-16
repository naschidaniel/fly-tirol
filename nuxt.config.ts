import { existsSync, readFileSync } from 'fs'
import { License } from './types/data'

const packages = JSON.parse(
  readFileSync('./package.json', { encoding: 'utf8' })
)

const isFlyTirol = process.env.NUXT_PAGE === 'flytirol'
const isWhiteCloud = process.env.NUXT_PAGE === 'whitecloud'

const licenses: License[] = Object.keys(packages.dependencies)
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
    existsSync('./data/metadataFlyTirol.ts') ||
    existsSync('./data/metadataWhiteCloud.ts')
  )
) {
  console.error(
    'No metadata could be found in ./data! RUN yarn generateContent'
  )
}

export default defineNuxtConfig({
  ssr: true,
  dir: {
    pages: isWhiteCloud ? 'pages_whitecloud' : 'pages_flytirol',
    public: isWhiteCloud ? '.public_whitecloud' : '.public_flytirol',
  },
  app: {
    head: {
      titleTemplate: isWhiteCloud
        ? 'WHITE-CLOUD TANDEMFLÜGE - Paragleiten am Wilden Kaiser - %s'
        : 'Fly-Tirol.com - Flugschule Kitzbühleralpen - %s',
      meta: [
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
  },

  css: isWhiteCloud
    ? ['~/assets/css/main.css', '~/assets/css/whitecloud.css']
    : ['~/assets/css/main.css', '~/assets/css/flytirol.css'],

  components: true,

  runtimeConfig: {
    public: {
      buildTime: +new Date(),
      instagram: isFlyTirol ? 'fly.tirol' : 'white_cloud_paragliding',
      isDevelopment: process.env.NODE_ENV === 'development',
      isFlyTirol,
      isWhiteCloud,
      licenses,
      mail: isFlyTirol ? 'info@fly-tirol.com' : 'info@white-cloud.tirol',
      phone: isFlyTirol ? '+436766422088' : '+4368181589568',
      phoneString: isFlyTirol ? '+43 676 6422088' : '+43 681 81589568',
      shopifyAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
      shopifyDomain: process.env.SHOPIFY_DOMAIN,
      website: isFlyTirol ? 'fly-tirol.com' : 'white-cloud.tirol',
      websiteUrl: isFlyTirol
        ? 'https://fly-tirol.com'
        : 'https://white-cloud.tirol',
    },
  },
  modules: ['@nuxtjs/tailwindcss'],

  typescript: {
    typeCheck: true,
  },

  tailwindcss: {
    configPath: '~/tailwind.config.cjs',
  },

  router: {
    options: {
      linkExactActiveClass: 'active',
    },
  },
})
