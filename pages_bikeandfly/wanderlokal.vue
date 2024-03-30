<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="Wanderlokal"
      picture="/media/page-header.jpg"
    >
      <p>Wo unser Foodtruck haltmacht, verströmt er den Duft der großen, weiten Welt der Kulinarik.</p>
      <p>Von exotischen Spezialitäten bis hin zu vertrauten Klassikern genießen Sie frische Köstlichkeiten und originelle Rezepte, die wir vor Ort im Truck zubereiten.</p>
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
