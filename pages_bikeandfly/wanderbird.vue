<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="Wanderbird"
      picture="/media/page-header.jpg"
    >
      <p>
        Der Hike an Fly Wettbewerb für jedermann! Präsentiert wird dieser
        aufregende Wettbewerb von Paul Guschelbauer, Red Bull und Partner.
      </p>
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
      <Wanderbird />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMetaTags } from '@/composable/useMetaTags'
import Wanderbird from '~/content_bikeandfly/wanderbird.vue'

useMetaTags()
</script>
