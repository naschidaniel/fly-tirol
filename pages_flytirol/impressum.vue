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

const { generateMetaTags, page } = useMetaTags()

// TODO NUXT3
// head() {
//   const metatags = this.generateMetaTags(
//     this.page.title,
//     this.page.description,
//     this.$route.fullPath
//   )
//   return { title: this.page.title, meta: metatags }
// },
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
