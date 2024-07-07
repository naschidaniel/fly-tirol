<template>
  <div>
    <PageHeader
      pre-headline="Paragliding"
      headline="Acrotrainings"
    >
      Fahre mit Fly Tirol und Sebastian Kahn, dem Team-Weltmeister im
      Acro-Paragleiten 2014 und Vizeweltmeister im Synchron-Acro-Paragleiten, zu
      den zwei schönsten Fluggebieten Europas, um dort zu trainieren und neue Tricks zu erlernen
      oder bereits erlernte zu perfektionieren.
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

useMetaTags()
</script>
