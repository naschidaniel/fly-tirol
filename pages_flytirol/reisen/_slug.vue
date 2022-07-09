<template>
  <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
    <div v-if="page.slug == 'dolomiten-italien'">
      <DolomitenItalien />
    </div>
    <div v-if="page.slug == 'dune-de-pilat-frankreich'">
      <DuneDePilatFrankreich />
    </div>
    <div v-if="page.slug == 'flugsafari-kitzbueheler-alpen'">
      <FlugsafariKitzbuehelerAlpen />
    </div>
    <div v-if="page.slug == 'meduno-italien'">
      <MedunoItalien />
    </div>
    <div v-if="page.slug == 'oeluedeniz-tuerkei'">
      <OeluedenizTuerkei />
    </div>
    <ProductBookCourse :is-course="true" />
    <SocialBar />
  </div>
</template>

<script setup>
import { useMetaTags } from '~/composable/useMetaTags'
import SocialBar from '~/components/SocialBar.vue'
import ProductBookCourse from '~/components/ProductBookCourse.vue'
import DolomitenItalien from '~/content_flytirol/reisen/dolomiten-italien.vue'
import DuneDePilatFrankreich from '~/content_flytirol/reisen/dune-de-pilat-frankreich.vue'
import FlugsafariKitzbuehelerAlpen from '~/content_flytirol/reisen/flugsafari-kitzbueheler-alpen.vue'
import MedunoItalien from '~/content_flytirol/reisen/meduno-italien.vue'
import OeluedenizTuerkei from '~/content_flytirol/reisen/oeluedeniz-tuerkei.vue'

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
