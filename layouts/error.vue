<template>
  <div class="flex justify-center items-center max-w-90 mx-auto py-8">
    <div>
      <h1 class="mb-8 sm:mb-16">
        <span
          class="text-lg font-heading font-medium flex flex-row items-center mb-2"
        >
          <span class="inline-block bg-brand w-7 h-0.75 mr-2"></span>
          <span v-if="error.statusCode === 404" class="inline-block">404</span>
        </span>
        <span
          v-if="error.statusCode === 404"
          class="text-4xl lg:text-6xl font-heading font-bold"
        >
          Seite wurde nicht gefunden
        </span>
        <span v-else>Es ist ein Fehler aufgetreten</span>
      </h1>
      <NuxtLink to="/" class="btn-primary btn--large">
        zurück zur Startseite
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import { useFetchShopify } from '~/composable/useFetchShopify'
import { useShopifyCart } from '~/composable/useShopifyCart'

defineProps({
  error: {
    type: Object,
    default: () => {
      return {
        error: {
          statusCode: 404,
        },
      }
    },
    required: false,
  },
})
const { initShop } = useFetchShopify()
const { resetCart } = useShopifyCart()
onMounted(() => {
  resetCart()
  initShop()
})
</script>
