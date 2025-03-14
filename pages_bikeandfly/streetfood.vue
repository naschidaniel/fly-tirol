<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="Streetfood"
      picture="/media/page-header.jpg"
    >
      <p>
        Erlebe die Vielfalt des Streetfoods beim Bike & Fly – Festival! Wir freuen uns, euch mitteilen zu können, dass in diesem Jahr zum ersten Mal der Street Food Market Austria Teil unseres Festivals ist!
      </p>
      <p>Freut euch auf eine köstliche Auswahl an Leckereien und Fingerfoods, die garantiert jeden Geschmack treffen. Mit über 15 Jahren Erfahrung sind sie die Nummer 1 in ganz Österreich.</p>
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
      <Streetfood />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMetaTags } from '@/composable/useMetaTags'
import Streetfood from '~/content_bikeandfly/streetfood.vue'

useMetaTags()
</script>
