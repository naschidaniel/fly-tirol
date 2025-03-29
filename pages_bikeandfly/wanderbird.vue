<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="Wanderbird"
      :picture="headerImage"
    >
      <p>
        Der Hike & Fly Wettbewerb für jedermann! Präsentiert wird dieser
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
import { useMedia } from '@/composable/useMedia'

const { headerImage } = useMedia()
useMetaTags()
</script>
