module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: [
          '[...slug]',
          'Agb',
          'Alert',
          'Buchen',
          'Calender',
          'Cart',
          'default',
          'dsgvo',
          'error',
          'grundkurs',
          'hoehenflug',
          'hoehenflugkurs',
          'impressum',
          'index',
          'komplettkurs',
          'kontakt',
          'panoramaflug',
          'partner',
          'rettungspackservice',
          'schnupperkurs',
          'service',
          'tagesbetreuung',
          'tandemkurs',
          'tandemsafari',
          'team',
          'termine',
          'thermikflug',
          'Test',
          'testflug',
          'Thermikkurs',
          'Version',
          'Webcam',
          'Westendorf',
        ],
      },
    ],
  },
}
