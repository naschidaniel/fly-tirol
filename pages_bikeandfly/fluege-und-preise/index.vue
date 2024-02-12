<template>
  <div>
    <div class="max-w-90 w-full mx-auto nuxt-content">
      <h1><small>Tandemfliegen</small>Flüge und <strong>Preise</strong></h1>
      <ProductList />
    </div>
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import { useMetaTags } from '@/composable/useMetaTags'
import SocialBar from '@/components/SocialBar.vue'
import ProductList from '@/components/ProductList.vue'

useMetaTags()
</script>
