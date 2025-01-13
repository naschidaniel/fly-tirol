<template>
  <div>
    <PageHeader
      pre-headline="Paragliding"
      headline="Fortbildung"
    >
      Du hast deinen A-Schein bereits und möchtest deine Fähigkeiten ausbauen?
      Ob Thermikfliegen oder Tandemschein, wir helfen dir dabei ein besserer
      Pilot zu werden!
    </PageHeader>
    <ProductList />
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import PageHeader from '@/components/PageHeader.vue'
import ProductList from '@/components/ProductList.vue'
import { useMetaTags } from '@/composable/useMetaTags'
import { useBackend } from '@/composable/useBackend'
import { usePage } from '@/composable/usePage'

useMetaTags()
const { page } = usePage()
const { initShopBackend } = useBackend()

initShopBackend(page.value.category)
</script>
