<template>
  <div>
    <PageHeader
      pre-headline="Paragliding"
      headline="Reisen"
    >
      Flieg mit uns im Urlaub! Kombiniere eine wunderschöne Reise mit deiner
      Leidenschaft fürs fliegen und lerne dabei von absoluten Profis dazu. Sieh
      dir unseren Reisekalender an und nutze die einmalige Möglichkeit
      wunderbare neue Landschaften aus der Vogelperspektive zu erkunden.
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
