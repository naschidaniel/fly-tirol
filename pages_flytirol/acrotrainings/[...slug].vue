<template>
  <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
    <div v-if="page.slug == 'acrotraining-am-gardasee'">
      <AcrotrainingAmGardasee />
    </div>
    <div v-if="page.slug == 'acrotraining-in-oeluedeniz'">
      <AcrotrainingInOelideniz />
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
import AcrotrainingAmGardasee from '@/content_flytirol/acrotrainings/acrotraining-am-gardasee.vue'
import AcrotrainingInOelideniz from '@/content_flytirol/acrotrainings/acrotraining-in-oeluedeniz.vue'

useMetaTags()
const { page } = usePage()
</script>
