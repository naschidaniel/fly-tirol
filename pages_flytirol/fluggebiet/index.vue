<template>
  <div>
    <PageHeader
      pre-headline="Flugebiet"
      headline="Westendorf"
      picture="/media/fluggebiet/uebungshang_westendorf.jpg"
    >
      Coming soon.
    </PageHeader>

    <div class="max-w-90 w-full mx-auto py-6 pt-8 nuxt-content">
      <Fluggebiet />

      <div
        class="card--grid grid-gap-1 lg:max-w-90 mx-auto py-4 w-full xl:py-12 xl:ml-4 3xl:flex"
      >
        <LinkCard
          card-image="/media/fluggebiet/uebungshang_westendorf.jpg"
          card-title="Partner"
          description="Eine starke Flugschule braucht starke Partner! Mit den angeführten Gaststätten, Restaurants, Hotels, Unterkünften und Betrieben pflegen wir einen sehr guten Kontakt. Sie kennen die Bedürfnisse von Piloten und stellen sicher, dass dein Aufenthalt in der Region ein besonderes Erlebniss wird."
          to="/fluggebiet/partner"
        />
        <LinkCard
          card-image="/media/available-soon.jpg"
          card-title="Brixental - Westendorf"
          description="Die Orte Brixen im Thale, Kirchberg in Tirol und Westendorf liegen eingebettet mitten in den Kitzbüheler Alpen auf dem Sonnenplateau des Brixentals auf rund 800 m. Sie bieten ein großes Netz an Wander- und Radwegen, vielfältige Veranstaltungen und tolle Ausflugsziele."
          to="/fluggebiet/westendorf"
        />
      </div>
      <SocialBar />
    </div>
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useMetaTags } from '@/composable/useMetaTags'
import Fluggebiet from '@/content_flytirol/fluggebiet/index.vue'

useMetaTags()
</script>
