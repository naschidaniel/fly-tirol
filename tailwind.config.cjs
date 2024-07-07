const isBikeAndFly = process.env.NUXT_PAGE === 'bikeandfly'
const isFlyTirol = process.env.NUXT_PAGE === 'flytirol'
const isHydrogen = process.env.NUXT_PAGE === 'hydrogen'

const colors = require('tailwindcss/colors')

const em = px => `${px / 16}em`

const screensizes = {
  'sm': em(640),
  // => @media (min-width: 640px) { ... }
  'md': em(768),
  // => @media (min-width: 768px) { ... }
  'lg': em(1024),
  // => @media (min-width: 1024px) { ... }
  'xl': em(1280),
  // => @media (min-width: 1280px) { ... }
  '2xl': em(1536),
  // => @media (min-width: 1536px) { ... }
}

const content = [
  'components/**/*.vue',
  'layouts/**/*.vue',
  'pages/**/*.vue',
  'content_flytirol/**/*.vue',
  'content_bikeandfly/**/*.vue',
  'pages_flytirol/**/*.vue',
  'pages_bikeandfly/**/*.vue',
  'plugins/**/*.{js,ts}',
  'app.vue',
  'error.vue',
]

isBikeAndFly
  ? content.push('pages_bikeandfly/**/*.vue')
  : isFlyTirol
    ? content.push('pages_flytirol/**/*.vue')
    : content.push('pages_flytirol/**/*.vue')

const brandColor = isBikeAndFly ? '#22211f' : '#160D42'

module.exports = {
  content,
  corePlugins: {
    preflight: true,
  },
  theme: {
    screens: screensizes,
    extend: {
      colors: {
        brand: {
          DEFAULT: brandColor,
        },
        current: 'currentColor',
        gray: colors.neutral,
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        bike: '#c2deba',
        fly: '#b0def1',
        hydrogreen: '#7dc42b',
        hydroblue: '#3984bc',
      },
      fontFamily: {
        sans: isHydrogen ? ['Comfortaa', 'RedHatText', 'sans-serif'] : isBikeAndFly ? ['Glimer', 'RedHatText', 'sans-serif'] : ['RedHatText', 'sans-serif'],
        heading: isHydrogen ? ['Comfortaa-Bold', 'RedHatText', 'sans-serif'] : isBikeAndFly ? ['Glimer-Bold', 'RedHatText', 'sans-serif'] : ['RedHatText', 'sans-serif'],
      },
      spacing: {
        '0.75': '0.1875rem',
        '5p': '5%',
        '10p': '10%',
      },
      maxWidth: {
        10: '10%',
        20: '20%',
        30: '30%',
        40: '40%',
        50: '50%',
        60: '60%',
        70: '70%',
        80: '80%',
        90: '90%',
        95: '95%',
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      minHeight: {
        'screen-10': '10vh',
        'screen-20': '20vh',
        'screen-30': '30vh',
        'screen-40': '40vh',
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-70': '70vh',
        'screen-80': '80vh',
        'screen-90': '90vh',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
