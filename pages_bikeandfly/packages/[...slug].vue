<template>
  <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
    <div v-if="page.slug == 'early-bird'">
      <EarlyBird />
    </div>
    <div v-if="page.slug == 'tagesticket'">
      <Tagesticket />
    </div>
    <ProductBookService />
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import ProductBookService from '@/components/ProductBookService.vue'
import EarlyBird from '@/content_bikeandfly/packages/early-bird.vue'
import Tagesticket from '@/content_bikeandfly/packages/tagesticket.vue'
import { usePage } from '@/composable/usePage'
import { useMetaTags } from '@/composable/useMetaTags'

const { page } = usePage()
useMetaTags()
</script>
