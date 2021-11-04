<template>
  <div
    :class="{ hidden: isCookieAgreement }"
    class="w-full bg-gray-200 px-3 pt-3 pb-1 relative text-sm"
  >
    <div class="w-full">
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
      <div class="w-full text-right py-1">
        <button
          aria-label="accept cookie agreement"
          class="btn-primary bg-green-600"
          @click="acceptCookieAgreement()"
        >
          Alle Cookies akzeptieren
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useData } from '~/composable/useData'

export default defineComponent({
  name: 'SiteCookieBanner',
  setup() {
    const { isCookieAgreement, acceptCookieAgreement } = useData()
    return { isCookieAgreement, acceptCookieAgreement }
  },
})
</script>
