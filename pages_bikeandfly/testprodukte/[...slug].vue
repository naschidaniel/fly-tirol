<template>
  <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
    <div v-if="page.slug == 'test'">
      <Test />
      <ProductBookCourse :is-course="false" />
    </div>
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import ProductBookCourse from '@/components/ProductBookCourse.vue'
import { usePage } from '@/composable/usePage'
import { useMetaTags } from '@/composable/useMetaTags'
import Test from '@/content_bikeandfly/testprodukte/test.vue'

const { page } = usePage()
useMetaTags()
</script>
