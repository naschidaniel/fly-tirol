<template>
  <div class="max-w-90 w-full mx-auto py-6">
    <Dsgvo class="nuxt-content" />
  </div>
</template>

<script setup>
import { useMetaTags } from '~/composable/useMetaTags'
import Dsgvo from '~/content_whitecloud/dsgvo.vue'

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
