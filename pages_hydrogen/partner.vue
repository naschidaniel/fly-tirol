<template>
  <div>
    <PageHeader
      pre-headline="hydrogen-advisers.eu"
      headline="Partner"
      picture="/media/martin-adams-a_PDPUPuNZ8-unsplash-scaled.jpg"
    >
      <p>A list of partners with whom we realize projects.</p>
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6">
      <Partner class="nuxt-content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import { useMetaTags } from '@/composable/useMetaTags'
import Partner from '@/content_hydrogen/partner.vue'

useMetaTags()
</script>
