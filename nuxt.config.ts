import { existsSync, readFileSync } from 'fs'
import type { License } from '@/types/data'

const packages = JSON.parse(readFileSync('package.json', { encoding: 'utf8' }))

const isFlyTirol = process.env.NUXT_PAGE === 'flytirol'
const isBikeAndFly = process.env.NUXT_PAGE === 'bikeandfly'

const licenses: License[] = Object.keys(packages.dependencies)
  .map((dependency) =>
    JSON.parse(
      readFileSync(`node_modules/${dependency}/package.json`, {
        encoding: 'utf8',
      }),
    ),
  )
  .map(
    ({ name, version, license }) =>
      ({
        name,
        version,
        license,
      }) as License,
  )

if (!(isBikeAndFly || isFlyTirol)) {
  throw new Error(
    `NUXT_PAGE = ${process.env.NUXT_PAGE} | NUXT_PAGE is not set!`,
  )
}

if (
  !(
    existsSync('data/metadataFlyTirol.ts') ||
    existsSync('data/metadataBikeAndFly.ts')
  )
) {
  console.error(
    'No metadata could be found in ./data! RUN yarn generateContent',
  )
}

export default defineNuxtConfig({
  ssr: true,
  dir: {
    pages: isBikeAndFly ? 'pages_bikeandfly' : 'pages_flytirol',
    public: isBikeAndFly ? '.public_bikeandfly' : '.public_flytirol',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'de',
      },
      titleTemplate: isBikeAndFly
        ? 'Bike&Fly. Festival Brixental - %s'
        : 'Fly-Tirol.com - Flugschule Kitzbühleralpen - %s',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: isBikeAndFly
            ? 'Bike&Fly. Festival Brixental'
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
          content: isBikeAndFly
            ? 'Das Bike&Fly. Festival Brixental - Von 9. bis 11. August wird die Talstation der Alpenrosenbahn zum Treffpunkt für Abenteuerlustige und Freizeitsportler.'
            : 'Die Fly Tirol Flugschule in Westendorf ist dein Ansprechpartner rund um das Thema “Paragleiten” in den Kitzbüheler Alpen und darüber hinaus!',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: isBikeAndFly
            ? 'Das Bike&Fly. Festival Brixental '
            : 'Die Fly Tirol Flugschule in Westendorf ist dein Ansprechpartner rund um das Thema “Paragleiten” in den Kitzbüheler Alpen und darüber hinaus!',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: isBikeAndFly
            ? 'https://bikeandfly.at/media/BikeAndFlyLogo_sm.jpg'
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
          content: isBikeAndFly
            ? 'https://bikeandfly.at/'
            : 'https://fly-tirol.com',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: isBikeAndFly
    ? ['~/assets/css/main.css', '~/assets/css/bikeandfly.css']
    : ['~/assets/css/main.css', '~/assets/css/flytirol.css'],

  components: true,

  runtimeConfig: {
    public: {
      backend:
        process.env.NUXT_BACKEND === 'flytirol'
          ? 'https://fly-tirol.com'
          : process.env.NUXT_BACKEND === 'bikeandfly'
            ? 'https://bikeandfly.at'
            : 'http://127.0.0.1:8000',
      buildTime: +new Date(),
      instagram: isFlyTirol ? 'fly.tirol' : 'bike_fly_festival_brixental',
      isDevelopment: process.env.NODE_ENV === 'development',
      isFlyTirol,
      isBikeAndFly,
      // @ts-ignore
      licenses,
      mail: isFlyTirol ? 'info@fly-tirol.com' : 'info@bikeandfly.at',
      phone: isFlyTirol ? '+436763931494' : '+436763931494',
      phoneString: isFlyTirol ? '+43 676 3931494' : '+43 676 3931494',
      website: isFlyTirol ? 'fly-tirol.com' : 'bikeandfly.at',
      websiteUrl: isFlyTirol
        ? 'https://fly-tirol.com'
        : 'https://bikeandfly.at',
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
