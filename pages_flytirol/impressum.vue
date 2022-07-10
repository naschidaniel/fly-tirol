<template>
  <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
    <Impressum />
    <Version />
  </div>
</template>

<script setup>
import { useMetaTags } from '~/composable/useMetaTags'
import Impressum from '~/content_flytirol/impressum.vue'
import Version from '~/components/Version.vue'

useMetaTags()
</script>

<style scoped>
.license-spacer {
  margin-left: 0.5em;
  margin-right: 0.5em;
}
#license-list:last-child span .license-spacer {
  display: none;
}
</style>
