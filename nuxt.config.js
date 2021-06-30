import path from 'path'
import fs from 'fs'

export default {
  dev: process.env.NODE_ENV !== 'production',
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

  css: ['~/assets/styles/main.scss'],

  plugins: ['~/plugins/formatters.js'],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt-hero-icons/solid/nuxt',
    '@nuxt-hero-icons/outline/nuxt',
  ],

  modules: ['@nuxt/content'],

  generate: {
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

  build: {
    extractCSS: true,
  },

  router: {
    linkExactActiveClass: 'active',
  },

  server: {
    host: '0.0.0.0', // default: localhost,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt')),
    }
  },
}
