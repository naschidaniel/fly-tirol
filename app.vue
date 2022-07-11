<template>
  <div>
    <div class="flex min-h-screen flex-col">
      <SiteCookieBanner />
      <SiteHeader class="py-6" />
      <NuxtPage class="text-brand pb-6 flex-grow" />
      <SiteFooter />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import SiteCookieBanner from '~/components/global/SiteCookieBanner.vue'
import SiteFooter from '~/components/global/SiteFooter.vue'
import SiteHeader from '~/components/global/SiteHeader.vue'
import { useFetchShopify } from '~/composable/useFetchShopify'
import { useShopifyCart } from '~/composable/useShopifyCart'

const { initShop } = useFetchShopify()
const { loadCheckout } = useShopifyCart()
onMounted(() => {
  initShop()
  loadCheckout()
})
</script>
