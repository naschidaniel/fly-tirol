<template>
  <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
    <h1>Buchen</h1>
    <Cart />
  </div>
</template>

<script setup>
import Cart from '~/components/Cart.vue'
import { useMetaTags } from '~/composable/useMetaTags'

const { generateMetaTags, page } = useMetaTags()

// TODO NUXT3
// head() {
//   const metatags = this.generateMetaTags(
//     this.page.title,
//     this.page.description,
//     this.page.path
//   )
//   return { title: this.page.title, meta: metatags }
// },
</script>
