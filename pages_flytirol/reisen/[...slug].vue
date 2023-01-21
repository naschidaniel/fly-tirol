<template>
  <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
    <div v-if="page.slug == 'bassano-italien'">
      <BassanoItalien />
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

<script setup lang="ts">
import { usePage } from '@/composable/usePage'
import { useMetaTags } from '@/composable/useMetaTags'
import SocialBar from '@/components/SocialBar.vue'
import ProductBookCourse from '@/components/ProductBookCourse.vue'
import BassanoItalien from '@/content_flytirol/reisen/bassano-italien.vue'
import DuneDePilatFrankreich from '@/content_flytirol/reisen/dune-de-pilat-frankreich.vue'
import FlugsafariKitzbuehelerAlpen from '@/content_flytirol/reisen/flugsafari-kitzbueheler-alpen.vue'
import MedunoItalien from '@/content_flytirol/reisen/meduno-italien.vue'

useMetaTags()
const { page } = usePage()
</script>
