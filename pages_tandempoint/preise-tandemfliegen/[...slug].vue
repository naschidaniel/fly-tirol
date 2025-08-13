<template>
  <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
    <div v-if="page.slug == 'morgenflug'">
      <MorgenFlug />
    </div>
    <div v-if="page.slug == 'hoehenflug'">
      <HoehenFlug />
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
import MorgenFlug from '@/content_tandempoint/preise-tandemfliegen/morgenflug.vue'
import HoehenFlug from '@/content_tandempoint/preise-tandemfliegen/hoehenflug.vue'

useMetaTags()
const { page } = usePage()
</script>
