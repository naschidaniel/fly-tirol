import { existsSync, readFileSync } from 'fs'
import type { License } from '@/types/data'

const packages = JSON.parse(readFileSync('package.json', { encoding: 'utf8' }))

const isFlyTirol = process.env.NUXT_PAGE === 'flytirol'
const isBikeAndFly = process.env.NUXT_PAGE === 'bikeandfly'
const isHydrogen = process.env.NUXT_PAGE === 'hydrogen'
const isGh2di = process.env.NUXT_PAGE === 'gh2di'
const isTandemPoint = process.env.NUXT_PAGE === 'tandempoint'

const licenses: License[] = Object.keys(packages.dependencies)
  .map(dependency =>
    JSON.parse(
      readFileSync(`node_modules/${dependency}/package.json`, {
        encoding: 'utf8',
      }),
    ),
  )
  .map(
    ({ name, version, license }) =>
      (({
        name,
        version,
        license,
      }) as License),
  )

if (!(isBikeAndFly || isFlyTirol || isHydrogen || isGh2di || isTandemPoint)) {
  throw new Error(
    `NUXT_PAGE = ${process.env.NUXT_PAGE} | NUXT_PAGE is not set!`,
  )
}

if (
  !(
    existsSync('data/metadataFlyTirol.ts')
    || existsSync('data/metadataBikeAndFly.ts')
    || existsSync('data/metadataHydrogen.ts')
    || existsSync('data/metadataGh2di.ts')
    || existsSync('data/metadataTandemPoint.ts')
  )
) {
  console.error(
    'No metadata could be found in ./data! RUN yarn generateContent',
  )
}

export default defineNuxtConfig({

  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  ssr: true,

  components: true,

  app: {
    head: {
      htmlAttrs: {
        lang: 'de',
      },
      titleTemplate: isTandemPoint
        ? 'tandempoint.at - %s'
        : isGh2di
          ? 'gh2di.eu - %s'
          : isHydrogen
            ? 'hydrogen-advisers.eu - %s'
            : isBikeAndFly
              ? 'Bike&Fly. Festival Brixental - %s'
              : 'Fly-Tirol.com - Flugschule Kitzbühleralpen - %s',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          property: 'og:title',
          content: isTandemPoint
            ? 'tandempoint.at - Gleitschirm Tandemfliegen im Stubaital'
            : isGh2di
              ? 'gh2di.eu Strategic Advice for your Green Hydrogen Projects'
              : isHydrogen
                ? 'hydrogen-advisers.eu Strategic Advice for your Green Hydrogen Projects'
                : isBikeAndFly
                  ? 'Bike&Fly. Festival Brixental'
                  : 'Fly-Tirol.com - Flugschule Kitzbühleralpen',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'description',
          content: isTandemPoint
            ? 'Erleben Sie das Stubaital aus der Vogelperspektive! Buchen Sie Ihren unvergesslichen Tandemflug über die majestätische Alpenlandschaft. Unsere erfahrenen und zertifizierten Piloten sorgen für ein sicheres und atemberaubendes Abenteuer. Einfach buchen, abheben und die Freiheit spüren!'
            : (isHydrogen || isGh2di)
                ? 'We are an advisory service to provide strategic advice to all actors seeking to advance their green hydrogen Agenda and to start roll-out.'
                : isBikeAndFly
                  ? 'Das Bike&Fly. Festival Brixental - Von 08. bis 10. August 2025 wird die Talstation der Alpenrosenbahn zum Treffpunkt für Abenteuerlustige und Freizeitsportler.'
                  : 'Die Fly Tirol Flugschule in Westendorf ist dein Ansprechpartner rund um das Thema “Paragleiten” in den Kitzbüheler Alpen und darüber hinaus!',
        },
        {
          property: 'og:description',
          content: isTandemPoint
            ? 'Erleben Sie das Stubaital aus der Vogelperspektive! Buchen Sie Ihren unvergesslichen Tandemflug über die majestätische Alpenlandschaft. Unsere erfahrenen und zertifizierten Piloten sorgen für ein sicheres und atemberaubendes Abenteuer. Einfach buchen, abheben und die Freiheit spüren!'
            : (isHydrogen || isGh2di)
                ? 'We are an advisory service to provide strategic advice to all actors seeking to advance their green hydrogen Agenda and to start roll-out.'
                : isBikeAndFly
                  ? 'Das Bike&Fly. Festival Brixental '
                  : 'Die Fly Tirol Flugschule in Westendorf ist dein Ansprechpartner rund um das Thema “Paragleiten” in den Kitzbüheler Alpen und darüber hinaus!',
        },
        {
          property: 'og:image',
          content: isTandemPoint
            ? 'https://tandempoint.at/media/logo_384.png'
            : isGh2di
              ? 'https://gh2di.eu/media/logo_384.png'
              : isHydrogen
                ? 'https://hydrogen-advisers.eu/media/Rechteck-2_384.png'
                : isBikeAndFly
                  ? 'https://bikeandfly.at/media/BikeAndFlyFestival_384.jpg'
                  : 'https://fly-tirol.com/media/FlyTirolLogo_384.jpg',
        },
        {
          property: 'og:type',
          content: 'article',
        },
        {
          property: 'og:url',
          content: isTandemPoint
            ? 'https://tandempoint.at'
            : isGh2di
              ? 'https://gh2di.eu'
              : isHydrogen
                ? 'https://hydrogen-advisers.eu'
                : isBikeAndFly
                  ? 'https://bikeandfly.at/'
                  : 'https://fly-tirol.com',
        },
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },

  css: isTandemPoint
    ? ['~/assets/css/main.css', '~/assets/css/tandempoint.css']
    : (isHydrogen || isGh2di)
        ? ['~/assets/css/main.css', '~/assets/css/hydrogen.css']
        : isBikeAndFly
          ? ['~/assets/css/main.css', '~/assets/css/bikeandfly.css']
          : ['~/assets/css/main.css', '~/assets/css/flytirol.css'],

  router: {
    options: {
      linkExactActiveClass: 'active',
    },
  },

  runtimeConfig: {
    public: {
      backend:
      process.env.NUXT_BACKEND === 'tandempoint'
        ? 'https://tandempoint.eu'
        : process.env.NUXT_BACKEND === 'gh2di'
          ? 'https://gh2di.eu'
          : process.env.NUXT_BACKEND === 'hydrogen'
            ? 'https://hydrogen-advisers.eu'
            : process.env.NUXT_BACKEND === 'flytirol'
              ? 'https://fly-tirol.com'
              : process.env.NUXT_BACKEND === 'bikeandfly'
                ? 'https://bikeandfly.at'
                : 'http://127.0.0.1:8000',
      buildTime: +new Date(),
      instagram: (isHydrogen || isGh2di)
        ? ''
        : isFlyTirol
          ? 'fly.tirol'
          : 'bike_fly_festival_brixental',
      isDevelopment: process.env.NODE_ENV === 'development',
      isFlyTirol,
      isBikeAndFly,
      isHydrogen,
      isGh2di,
      isTandemPoint,
      licenses,
      xing: (isHydrogen || isGh2di) ? 'christian-weinberger-62aaa8114' : '',
      mail: isTandemPoint
        ? 'office@tandempoint.at'
        : isGh2di
          ? 'office@gh2di.eu'
          : isHydrogen
            ? 'office@hydrogen-advisers.eu'
            : isFlyTirol
              ? 'info@fly-tirol.com'
              : 'info@bikeandfly.at',
      phone: isTandemPoint
        ? '+4369917280304'
        : (isHydrogen || isGh2di)
            ? '+436767007594'
            : isFlyTirol
              ? '+436763931494'
              : '+436643585449',
      phoneString: isTandemPoint
        ? '+43 699 17280304'
        : (isHydrogen || isGh2di)
            ? '+43 676 7007594'
            : isFlyTirol
              ? '+43 676 3931494'
              : '+43 664 3585449',
      website: isTandemPoint
        ? 'tandempoint.at'
        : isGh2di
          ? 'gh2di.eu'
          : isHydrogen
            ? 'hydrogen-advisers.eu'
            : isFlyTirol
              ? 'fly-tirol.com'
              : 'bikeandfly.at',
      youtube: isBikeAndFly ? 'https://www.youtube.com/@BikeFlyFestivalBrixental' : '',
      websiteUrl: isTandemPoint
        ? 'https://tandempoint.at'
        : isGh2di
          ? 'https://gh2di.eu'
          : isHydrogen
            ? 'https://hydrogen-advisers.eu'
            : isFlyTirol
              ? 'https://fly-tirol.com'
              : 'https://bikeandfly.at',
    },
  },

  dir: {
    pages: isTandemPoint
      ? 'pages_tandempoint'
      : isGh2di
        ? 'pages_gh2di'
        : isHydrogen
          ? 'pages_hydrogen'
          : isBikeAndFly
            ? 'pages_bikeandfly'
            : 'pages_flytirol',
    public: isTandemPoint
      ? '.public_tandempoint'
      : isHydrogen
        ? '.public_hydrogen'
        : isBikeAndFly
          ? '.public_bikeandfly'
          : '.public_flytirol',
  },

  compatibilityDate: '2024-07-07',

  typescript: {
    typeCheck: true,
  },

  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },

  tailwindcss: {
    configPath: '~/tailwind.config.cjs',
  },
})
