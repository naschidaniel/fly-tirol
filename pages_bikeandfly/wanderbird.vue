<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="Wanderbird Community Hike & Fly"
      :picture="headerImage"
    >
      <p>
        Lass uns gemeinsam das Hike & Fly-Spiel spielen!! Präsentiert wird dieser aufregende Hike & Fly Community Event von Paul Guschelbauer.
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
