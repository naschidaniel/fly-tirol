<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="Programm"
      picture="/media/page-header.jpg"
    >
      <p>
        Die Vorbereitungen für 2025 laufen bereits auf Hochtouren!

        Es erwartet euch wieder ein unvergessliches Erlebnis mit vielen Highlights und neuen Überraschungen, die das Event noch spektakulärer machen werden.

        Bleibt gespannt auf weitere Details!
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
