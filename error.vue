<template>
  <div class="max-w-90 w-full mx-auto">
    <h1 class="text-4xl lg:text-6xl font-heading font-bold mt-10">Fehler</h1>
    <div class="flex flex-col items-center mt-10">
      <div>
        <div
          class="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700"
          role="alert"
        >
          Es is folgender Fehler aufgetretten: {{ error?.message }}
        </div>
      </div>
      <p class="text-lg font-heading font-medium mt-10">
        Vielleicht haben Sie ein altes Lesezeichen aufgerufen oder einen
        Tippfehler in der Adresse. Eventuell wurde die Seite gelöscht oder ist
        unter einer neuen Adresse verfügbar.
      </p>
      <div class="mt-6">
        <button class="btn-primary btn--large" @click="handleError">
          zurück zur Startseite
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line import/named
import { defineProps, onMounted } from 'vue'
import { useShopifyCart } from '~/composable/useShopifyCart'
defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })
const { initShop, resetCart } = useShopifyCart()

onMounted(() => {
  resetCart()
  initShop()
})
</script>
