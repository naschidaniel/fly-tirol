<template>
  <div v-if="page.slug != ''" class="max-w-90 w-full mx-auto pt-8 nuxt-content">
    <div v-if="page.slug == 'b-schein-theoriekurs'">
      <BScheinTheoriekurs />
    </div>
    <div v-if="page.slug == 'tandemkurs'">
      <Tandemkurs />
    </div>
    <div v-if="page.slug == 'thermikfliegen'">
      <Thermikfliegen />
    </div>
    <ProductBookCourse :is-course="true" />
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import { usePage } from '@/composable/usePage'
import { useMetaTags } from '@/composable/useMetaTags'
import ProductBookCourse from '@/components/ProductBookCourse.vue'
import SocialBar from '@/components/SocialBar.vue'
import BScheinTheoriekurs from '@/content_flytirol/fortbildung/b-schein-theoriekurs.vue'
import Tandemkurs from '@/content_flytirol/fortbildung/tandemkurs.vue'
import Thermikfliegen from '@/content_flytirol/fortbildung/thermikfliegen.vue'

useMetaTags()
const { page } = usePage()
</script>
