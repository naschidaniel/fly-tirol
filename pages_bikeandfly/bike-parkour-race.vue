<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="BikeParkourRace"
      picture="/media/page-header.jpg"
    >
      <p>
        Seid dabei, wenn wir am Samstag, den 08.08. um 10:00 Uhr, unser aufregendes Fahrradrennen für Groß und Klein starten! Egal, ob ihr Anfänger oder erfahrene Radfahrer seid, unser Festival bietet für jede Altersgruppe die perfekte Herausforderung.
      </p>
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6">
      <BikeParkourRace class="nuxt-content" />
    </div>
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useMetaTags } from '@/composable/useMetaTags'
import BikeParkourRace from '@/content_bikeandfly/bike-parkour-race.vue'

useMetaTags()
</script>
