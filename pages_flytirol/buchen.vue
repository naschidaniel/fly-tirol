<template>
  <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
    <h1>Buchen</h1>
    <Cart />
  </div>
</template>

<script setup lang="ts">
import Cart from '@/components/Cart.vue'
import { useMetaTags } from '@/composable/useMetaTags'

useMetaTags()
</script>
