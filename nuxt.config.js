export default {
  target: 'static',
  ssr: false,
  head: {
    titleTemplate: 'Fly-Tirol.com - Flugschule Kitzbühleralpen - %s',
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

  css: ['~assets/styles/tailwind.css'],

  plugins: ['~/plugins/formatters.js'],

  components: true,

  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: ['@nuxt/content'],

  generate: {
    interval: 500,
    fallback: '404.html',
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map((file) =>
        file.path.includes('/index') ? '/' : file.path
      )
    },
  },

  content: {
    liveEdit: false,
  },

  build: {},
}
