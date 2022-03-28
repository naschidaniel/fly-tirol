const colors = require('tailwindcss/colors')
const em = (px) => `${px / 16}em`

const screensizes = {
  sm: em(640),
  // => @media (min-width: 640px) { ... }
  md: em(768),
  // => @media (min-width: 768px) { ... }
  lg: em(1024),
  // => @media (min-width: 1024px) { ... }
  xl: em(1280),
  // => @media (min-width: 1280px) { ... }
  '2xl': em(1536),
  // => @media (min-width: 1536px) { ... }
}

const content = [
  './components/**/*.{js,vue,ts}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './plugins/**/*.{js,ts}',
  './nuxt.config.js',
]

process.env.NUXT_PAGE === 'whitecloud'
  ? content.push('./pages_whitecloud/**/*.vue')
  : content.push('./pages_flytirol/**/*.vue')

const brandColor =
  process.env.NUXT_PAGE === 'whitecloud' ? '#1c9dd8' : '#160D42'

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
      },
      fontFamily: {
        sans: ['RedHatText', 'sans-serif'],
        heading: ['RedHatDisplay', 'sans-serif'],
      },
      spacing: {
        0.75: '0.1875rem',
        '5p': '5%',
        '10p': '10%',
      },
      maxWidth: {
        // eslint-disable-next-line prettier/prettier
        '90': '90%',
        95: '95%',
      },
      minWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
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
