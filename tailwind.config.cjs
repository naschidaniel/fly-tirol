const isWhiteCloud = process.env.NUXT_PAGE === 'whitecloud'

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

const colors = {
  current: 'currentColor',
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  emerald: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  amber: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  violet: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
  },
}

const content = [
  './components/**/*.{js,vue,ts}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './plugins/**/*.{js,ts}',
  './nuxt.config.js',
]

isWhiteCloud
  ? content.push('./pages_whitecloud/**/*.vue')
  : content.push('./pages_flytirol/**/*.vue')

const brandColor = isWhiteCloud ? '#666' : '#160D42'

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
        '10': '10%',
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
