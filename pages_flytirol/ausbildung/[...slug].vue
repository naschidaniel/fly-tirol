<template>
  <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
    <div v-if="page.slug == 'grundkurs'">
      <Grundkurs />
    </div>
    <div v-if="page.slug == 'hoehenflugkurs'">
      <Hoehenflugkurs />
    </div>
    <div v-if="page.slug == 'kompaktkurs'">
      <Kompaktkurs />
    </div>
    <div v-if="page.slug == 'paragleiterschein-theoriekurs'">
      <ParagleiterscheinTheoriekurs />
    </div>
    <div v-if="page.slug == 'schnupperkurs'">
      <Schnupperkurs />
    </div>
    <div v-if="page.slug == 'tagesbetreuung'">
      <Tagesbetreuung />
    </div>
    <ProductBookCourse :is-course="true" />
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import ProductBookCourse from '@/components/ProductBookCourse.vue'
import { usePage } from '@/composable/usePage'
import { useMetaTags } from '@/composable/useMetaTags'
import Grundkurs from '@/content_flytirol/ausbildung/grundkurs.vue'
import Hoehenflugkurs from '@/content_flytirol/ausbildung/hoehenflugkurs.vue'
import Kompaktkurs from '@/content_flytirol/ausbildung/kompaktkurs.vue'
import ParagleiterscheinTheoriekurs from '@/content_flytirol/ausbildung/paragleiterschein-theoriekurs.vue'
import Schnupperkurs from '@/content_flytirol/ausbildung/schnupperkurs.vue'
import Tagesbetreuung from '@/content_flytirol/ausbildung/tagesbetreuung.vue'

const { page } = usePage()
useMetaTags()
</script>
