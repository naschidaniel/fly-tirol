<template>
  <div>
    <PageHeader
      pre-headline="HYDROGEN"
      headline="Basics"
      picture="/media/anwendungsgebiete.png"
    >
      <div>
        <p class="mb-2">
          This page provides links to basic documents in the hydrogen context.
          It includes both policy documents but also studies and fundamentals to
          learn more about the overall context of hydrogen.
        </p>
      </div>
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6">
      <Basics class="nuxt-content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Basics from '@/content_hydrogen/basics.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useMetaTags } from '@/composable/useMetaTags'

useMetaTags()
</script>
