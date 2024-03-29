import { existsSync, readFileSync } from 'fs'
import type { License } from '@/types/data'

const packages = JSON.parse(readFileSync('package.json', { encoding: 'utf8' }))

const isFlyTirol = process.env.NUXT_PAGE === 'flytirol'
const isBikeAndFly = process.env.NUXT_PAGE === 'bikeandfly'
const isHydrogen = process.env.NUXT_PAGE === 'hydrogen'

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

if (!(isBikeAndFly || isFlyTirol || isHydrogen)) {
  throw new Error(
    `NUXT_PAGE = ${process.env.NUXT_PAGE} | NUXT_PAGE is not set!`,
  )
}

if (
  !(
    existsSync('data/metadataFlyTirol.ts') ||
    existsSync('data/metadataBikeAndFly.ts') ||
    existsSync('data/metadataHydrogen.ts')
  )
) {
  console.error(
    'No metadata could be found in ./data! RUN yarn generateContent',
  )
}

export default defineNuxtConfig({
  ssr: true,
  dir: {
    pages: isHydrogen
      ? 'pages_hydrogen'
      : isBikeAndFly
        ? 'pages_bikeandfly'
        : 'pages_flytirol',
    public: isHydrogen
      ? '.public_hydrogen'
      : isBikeAndFly
        ? '.public_bikeandfly'
        : '.public_flytirol',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'de',
      },
      titleTemplate: isHydrogen
        ? 'hydrogen-advisers.eu - %s'
        : isBikeAndFly
          ? 'Bike&Fly. Festival Brixental - %s'
          : 'Fly-Tirol.com - Flugschule Kitzbühleralpen - %s',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: isHydrogen
            ? 'hydrogen-advisers.eu Strategic Advice for your Green Hydrogen Projects'
            : isBikeAndFly
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
          content: isHydrogen
            ? 'We are an advisory service to provide strategic advice to all actors seeking to advance their green hydrogen Agenda and to start roll-out.'
            : isBikeAndFly
              ? 'Das Bike&Fly. Festival Brixental - Von 9. bis 11. August wird die Talstation der Alpenrosenbahn zum Treffpunkt für Abenteuerlustige und Freizeitsportler.'
              : 'Die Fly Tirol Flugschule in Westendorf ist dein Ansprechpartner rund um das Thema “Paragleiten” in den Kitzbüheler Alpen und darüber hinaus!',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: isHydrogen
            ? 'We are an advisory service to provide strategic advice to all actors seeking to advance their green hydrogen Agenda and to start roll-out.'
            : isBikeAndFly
              ? 'Das Bike&Fly. Festival Brixental '
              : 'Die Fly Tirol Flugschule in Westendorf ist dein Ansprechpartner rund um das Thema “Paragleiten” in den Kitzbüheler Alpen und darüber hinaus!',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: isHydrogen
            ? 'https://hydrogen-advisers.eu/media/Rechteck-2_384.png'
            : isBikeAndFly
              ? 'https://bikeandfly.at/media/BikeAndFlyFestival_384.jpg'
              : 'https://fly-tirol.com/media/FlyTirolLogo_384.jpg',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: isHydrogen
            ? 'https://hydrogen-advisers.eu'
            : isBikeAndFly
              ? 'https://bikeandfly.at/'
              : 'https://fly-tirol.com',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: isHydrogen
    ? ['~/assets/css/main.css', '~/assets/css/hydrogen.css']
    : isBikeAndFly
      ? ['~/assets/css/main.css', '~/assets/css/bikeandfly.css']
      : ['~/assets/css/main.css', '~/assets/css/flytirol.css'],

  components: true,

  runtimeConfig: {
    public: {
      backend:
        process.env.NUXT_BACKEND === 'hydrogen'
          ? 'https://http://hydrogen-advisers.eu'
          : process.env.NUXT_BACKEND === 'flytirol'
            ? 'https://fly-tirol.com'
            : process.env.NUXT_BACKEND === 'bikeandfly'
              ? 'https://bikeandfly.at'
              : 'http://127.0.0.1:8000',
      buildTime: +new Date(),
      instagram: isHydrogen
        ? ''
        : isFlyTirol
          ? 'fly.tirol'
          : 'bike_fly_festival_brixental',
      isDevelopment: process.env.NODE_ENV === 'development',
      isFlyTirol,
      isBikeAndFly,
      isHydrogen,
      // @ts-ignore
      licenses,
      xing: isHydrogen ? 'christian-weinberger-62aaa8114' : '',
      mail: isHydrogen
        ? 'office@hydrogen-advisers.eu'
        : isFlyTirol
          ? 'info@fly-tirol.com'
          : 'info@bikeandfly.at',
      phone: isHydrogen
        ? '+436767007594'
        : isFlyTirol
          ? '+436763931494'
          : '+436643585449',
      phoneString: isHydrogen
        ? '+43 676 7007594'
        : isFlyTirol
          ? '+43 676 3931494'
          : '+43 664 3585449',
      website: isHydrogen
        ? 'hydrogen-advisers.eu'
        : isFlyTirol
          ? 'fly-tirol.com'
          : 'bikeandfly.at',
      websiteUrl: isHydrogen
        ? 'https://hydrogen-advisers.eu'
        : isFlyTirol
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
