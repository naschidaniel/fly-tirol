<template>
  <div>
    <PageHeader
      pre-headline="Paragliding"
      headline="Sicherheitstrainings"
    >
      Fahre mit Fly Tirol und Sebastian Kahn, dem Team-Weltmeister im
      Acro-Paragleiten 2014 und Vizeweltmeister im Synchron-Acro-Paragleiten, zu
      den zwei schönsten Fluggebieten Europas, um dort zu trainieren und dein
      Verhalten in Extremsituationen zu verbessern.
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
