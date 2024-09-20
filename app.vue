<template>
  <div>
    <div class="flex min-h-screen flex-col">
      <SiteGlobalAlert v-if="isShowAlert" />
      <SiteCookieBanner v-if="!(isHydrogen || isGh2di)" />
      <SiteHeader
        v-if="!isGh2di"
        class="py-6"
      />
      <NuxtPage class="text-brand pb-6 flex-grow" />
      <SiteFooter v-if="!isGh2di" />
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

const { isHydrogen, isGh2di } = useData()
const { isShowAlert, initShopBackend, initCart, getCsrfToken, whoami } = useBackend()

getCsrfToken()
whoami()
initShopBackend()
initCart()
</script>
