<template>
  <div>
    <div
      v-if="pages.length === 0"
      class="flex justify-center max-w-90 mx-auto py-4"
    >
      <span class="text-lg font-bold"
        >Vielen Dank für dein Interesse. Leider sind die Produkte noch nicht
        online. Gerne kannst du mit uns
        <NuxtLink class="underline" to="/kontakt">kontakt</NuxtLink>
        aufnehmen.</span
      >
    </div>
    <div
      v-else
      class="card--grid grid-gap-1 max-w-full md:max-w-90 mx-auto md:py-12"
    >
      <div v-for="page in pages" :key="page.title">
        <ProductCard v-if="!page.draft" class="p-4" :path="page.path" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
import { usePage } from '~/composable/usePage'

const { pages } = usePage()
</script>
