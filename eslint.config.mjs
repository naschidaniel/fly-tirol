import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.ts', '**/*.tsx'],
}).override('nuxt/typescript/rules', {
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
}).override('nuxt/javascript', {
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: [
          '[...slug]',
          'Account',
          'afterparty',
          'Agb',
          'Alert',
          'Buchen',
          'charity',
          'Calender',
          'Cart',
          'contact',
          'default',
          'dsgvo',
          'faq',
          'basics',
          'error',
          'expo',
          'grundkurs',
          'hoehenflug',
          'hoehenflugkurs',
          'impressum',
          'index',
          'imprint',
          'komplettkurs',
          'kontakt',
          'panoramaflug',
          'programm',
          'shop',
          'partner',
          'livemusik',
          'streetfood',
          'rettungspackservice',
          'schnupperkurs',
          'service',
          'tagesbetreuung',
          'tandemkurs',
          'tandemsafari',
          'team',
          'termine',
          'thermikflug',
          'tandemfluege',
          'news',
          'tagesticket',
          'Test',
          'testflug',
          'testprodukt',
          'Thermikkurs',
          'Version',
          'vortrag',
          'Webcam',
          'Westendorf',
          'weekendticket',
          'wanderbird',
          'wanderlokal',
          'buildings',
          'general',
          'industry',
          'mobility',
          'production',
          'transmission',
        ],
      },
    ],
  },
},

)
