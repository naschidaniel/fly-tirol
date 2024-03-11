<template>
  <div>
    <PageHeader
      pre-headline="Hydrogen"
      headline="Frequently Asked Questions"
      picture="/media/general.jpg"
    >
      <div>
        <p class="mb-2">What you always wanted to know about hydrogen</p>
      </div>
    </PageHeader>
    <ProductList />
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useMetaTags } from '@/composable/useMetaTags'

useMetaTags()
</script>
