<template>
  <div
    :class="{ hidden: isCookieAgreement }"
    class="
      w-screen
      h-40
      bg-gray-200
      flex
      items-center
      justify-center
      px-5
      py-5
      relative
    "
  >
    <div>
      Informationen zu Cookies
      <p>
        Diese Seite verwendet Cookies. Diese dienen dazu, die Funktionalität
        dieser Website zu gewährleisten sowie die Nutzung der Website zu
        analysieren. Weiters verwenden wir optionale Cookies, um unsere
        Werbeaktivitäten zu unterstützen.<br />
      </p>
      <nuxt-link
        to="/dsgvo"
        class="block outline-none w-24 whitespace-nowrap underline"
        exact
        >Nähere Informationen finden Sie in unseren
        Datenschutzbestimmungen.</nuxt-link
      >
      <button class="btn-primary" @click="acceptCookieAgreement()">
        Alle Cookies akzeptieren
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteCookieBanner',
  computed: {
    isCookieAgreement() {
      return this.$store.state.cookieAgreement
    },
  },
  mounted() {
    this.getCookieAgreementCookie()
  },
  methods: {
    acceptCookieAgreement() {
      this.$cookies.set('FlyTirol-cookieAgreement', 'true', {
        path: '/',
        maxAge: 60 * 60 * 24 * 7 * 31,
      })
      this.$store.commit('setCookieAgreement', true)
    },
    getCookieAgreementCookie() {
      const cookieAgreement = this.$cookies.get('FlyTirol-cookieAgreement')
      if (cookieAgreement) {
        this.$store.commit('setCookieAgreement', cookieAgreement)
      }
    },
  },
}
</script>
