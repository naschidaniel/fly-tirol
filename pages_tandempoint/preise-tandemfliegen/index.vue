<template>
  <div>
    <PageHeader
      pre-headline="Preise"
      headline="Tandemfliegen"
    >
      Einmal das Gefühl der Freiheit hoch über den Gipfeln den Stubaier Alpen mit Blick auf den Stubaier Gletscher und die Nordkette bei einem Tandemflug mit einem unserer Top-Tandempiloten genießen! Egal ob im Winter oder Sommer, wir zeigt dir das Alpenpanorama aus der Vogelperspektive.
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
