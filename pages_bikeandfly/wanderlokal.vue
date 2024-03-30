<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="Wanderlokal"
      picture="/media/page-header.jpg"
    >
      <p>Wir sind KochArt.</p>
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
      <Wanderlokal />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMetaTags } from '@/composable/useMetaTags'
import Wanderlokal from '~/content_bikeandfly/wanderlokal.vue'

useMetaTags()
</script>
