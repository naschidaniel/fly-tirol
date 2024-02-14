<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="Programm"
      picture="/media/partner/partner.jpg"
    >
      <p>Eine tolles Festival starke Partner!</p>
      <p>
        Mit den angeführten <strong>Gaststätten</strong>,
        <strong>Restaurants</strong>, <strong>Hotels</strong>,
        <strong>Unterkünften</strong> und <strong>Betrieben</strong>
        pflegen wir einen sehr guten Kontakt. Sie kennen die Bedürfnisse von
        Piloten und stellen sicher, dass dein Aufenthalt in der Region ein
        besonderes Erlebniss wird.
      </p>
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6">
      <Programm class="nuxt-content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMetaTags } from '@/composable/useMetaTags'
import Programm from '@/content_bikeandfly/programm.vue'

useMetaTags()
</script>
