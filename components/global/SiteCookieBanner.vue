<template>
  <div
    :class="{ hidden: isCookieAgreement }"
    class="
      w-screen
      bg-gray-200
      flex
      items-center
      justify-center
      px-3
      py-3
      relative
      text-sm
    "
  >
    <div class="flex-grow">
      <strong>Informationen zu Cookies</strong>
      <p>
        Diese Seite verwendet Cookies. Diese dienen dazu, die Funktionalität
        dieser Website zu gewährleisten sowie die Nutzung der Website zu
        analysieren. Weiters verwenden wir optionale Cookies, um unsere
        Werbeaktivitäten zu unterstützen.
        <nuxt-link to="/dsgvo" class="underline" exact>
          Nähere Informationen finden Sie in unseren
          Datenschutzbestimmungen.</nuxt-link
        >
      </p>
      <div class="flex ml-2 mt-2">
        <div class="flex-grow text-right border-1">
          <button
            class="btn-primary bg-green-600"
            @click="acceptCookieAgreement()"
          >
            Alle Cookies akzeptieren
          </button>
        </div>
      </div>
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
