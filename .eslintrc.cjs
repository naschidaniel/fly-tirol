module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  rules: {
  //   "rules": {
  //     'vue/multi-word-component-names': 
  //       ['error', {
  //         'ignores': ["Alert",
  //           "Buchen",
  //           "Calender",
  //           "Cart",
  //           "default",
  //           "dsgvo",
  //           "error",
  //           "grundkurs",
  //           "hoehenflug",
  //           "hoehenflugkurs",
  //           "impressum",
  //           "index",
  //           "kombikurs",
  //           "kontakt",
  //           "panoramaflug",
  //           "partner",
  //           "schnupperkurs",
  //           "tagesbetreuung",
  //           "tandemkurs",
  //           "tandemsafari",
  //           "team",
  //           "termine",
  //           "testflug",
  //           "thermikfliegen",
  //           "Version",
  //           "Webcam",
  //         ]
  //       }]
  // }
  },
}
