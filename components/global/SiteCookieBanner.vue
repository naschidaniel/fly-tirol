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
        <NuxtLink to="/dsgvo" class="underline" exact>
          Nähere Informationen finden Sie in unseren
          Datenschutzbestimmungen.</NuxtLink
        >
      </p>
      <div class="w-full text-right py-1">
        <button
          aria-label="accept cookie agreement"
          class="btn-primary"
          @click="acceptCookieAgreement()"
        >
          Alle Cookies akzeptieren
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFlyCookies } from '@/composable/useFlyCookies'

const { isCookieAgreement, acceptCookieAgreement } = useFlyCookies()
</script>
