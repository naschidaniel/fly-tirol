<template>
  <div>
    <div class="flex min-h-screen flex-col">
      <SiteGlobalAlert v-if="isShowAlert" />
      <SiteCookieBanner v-if="!isHydrogen" />
      <SiteHeader class="py-6" />
      <NuxtPage class="text-brand pb-6 flex-grow" />
      <SiteFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from './composable/useData'
import SiteCookieBanner from '@/components/global/SiteCookieBanner.vue'
import SiteGlobalAlert from '@/components/global/SiteGlobalAlert.vue'
import SiteFooter from '@/components/global/SiteFooter.vue'
import SiteHeader from '@/components/global/SiteHeader.vue'
import { useBackend } from '@/composable/useBackend'

const { isHydrogen } = useData()
const { isShowAlert, initShopBackend, initCart, getCsrfToken, whoami } = useBackend()

getCsrfToken()
whoami()
initShopBackend()
initCart()
</script>
