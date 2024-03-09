<template>
  <div>
    <PageHeader pre-headline="Shop" headline="Testprodukte">
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

useMetaTags()
</script>
