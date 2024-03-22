<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="Programm"
      picture="/media/page-header.jpg"
    >
      <p>
        Vom <strong>09.08. – 11.08.2024</strong> erwartet euch erstmalig ein
        absolutes Highlight in Westendorf!
      </p>
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
      <Programm />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMetaTags } from '@/composable/useMetaTags'
import Programm from '@/content_bikeandfly/programm.vue'

useMetaTags()
</script>
