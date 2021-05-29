const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/',
        },
      }
    : {}

export default {
  ...routerBase,
  target: 'static',
  ssr: false,
  head: {
    title: 'feelfree.tirol',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: ['@nuxt/content'],

  generate: {
    interval: 500,
  },

  content: {
    liveEdit: false,
  },

  build: {},
}
