<template>
  <div>
    <div class="max-w-90 w-full mx-auto nuxt-content">
      <h1><small>Tandemfliegen</small>Flüge und <strong>Preise</strong></h1>
      <ProductList />
    </div>
    <SocialBar />
  </div>
</template>

<script setup>
import { useMetaTags } from '~/composable/useMetaTags'
import SocialBar from '~/components/SocialBar'
import ProductList from '~/components/ProductList.vue'

useMetaTags()
</script>
