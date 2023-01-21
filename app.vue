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

<script setup lang="ts">
import { onMounted } from 'vue'
import SiteCookieBanner from '@/components/global/SiteCookieBanner.vue'
import SiteFooter from '@/components/global/SiteFooter.vue'
import SiteHeader from '@/components/global/SiteHeader.vue'
import { useBackend } from '@/composable/useBackend'

const { initShopBackend, initCart } = useBackend()
onMounted(() => {
  initShopBackend()
  initCart()
})
</script>
