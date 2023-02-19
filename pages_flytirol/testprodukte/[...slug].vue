<template>
  <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
    <div v-if="page.slug == 'test'">
      <Test />
      <ProductBookCourse :is-course="false" />
    </div>
    <div v-if="page.slug == 'test-kurs'">
      <TestKurs />
      <ProductBookCourse :is-course="true" />
    </div>
    <div v-if="page.slug == 'test-tandemflug'">
      <TestTandemflug />
      <ProductBookTandemflight />
    </div>
    <div></div>
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import ProductBookCourse from '@/components/ProductBookCourse.vue'
import ProductBookTandemflight from '@/components/ProductBookTandemflight.vue'
import { usePage } from '@/composable/usePage'
import { useMetaTags } from '@/composable/useMetaTags'
import Test from '@/content_flytirol/testprodukte/test.vue'
import TestKurs from '@/content_flytirol/testprodukte/test-kurs.vue'
import TestTandemflug from '@/content_flytirol/testprodukte/test-tandemflug.vue'

const { page } = usePage()
useMetaTags()
</script>
