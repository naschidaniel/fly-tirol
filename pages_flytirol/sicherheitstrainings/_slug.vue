<template>
  <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
    <div v-if="page.slug == 'sicherheitstraining-am-gardasee'">
      <SicherheitstrainingAmGardasee />
    </div>
    <div v-if="page.slug == 'sicherheitstraining-in-oeluedeniz'">
      <SicherheitstrainingInOelideniz />
    </div>
    <ProductBookCourse :is-course="true" />
    <SocialBar />
  </div>
</template>

<script setup>
import { useMetaTags } from '~/composable/useMetaTags'
import SocialBar from '~/components/SocialBar.vue'
import ProductBookCourse from '~/components/ProductBookCourse.vue'
import SicherheitstrainingAmGardasee from '~/content_flytirol/sicherheitstrainings/sicherheitstraining-am-gardasee.vue'
import SicherheitstrainingInOelideniz from '~/content_flytirol/sicherheitstrainings/sicherheitstraining-in-oeluedeniz.vue'

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
