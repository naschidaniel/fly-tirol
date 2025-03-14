<template>
  <div>
    <PageHeader
      pre-headline="Shop"
      headline="Testprodukte"
    >
      Hier findest du eine Auflistung an Testprodukten.
    </PageHeader>
    <ProductList />
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import SocialBar from '@/components/SocialBar.vue'
import ProductList from '@/components/ProductList.vue'
import { useMetaTags } from '@/composable/useMetaTags'
import { useBackend } from '@/composable/useBackend'
import { usePage } from '@/composable/usePage'

useMetaTags()
const { page } = usePage()
const { initShopBackend } = useBackend()

initShopBackend(page.value.category)
</script>
