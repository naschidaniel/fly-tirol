<template>
  <div>
    <PageHeader
      pre-headline="Brixental"
      headline="Westendorf"
      picture="/media/fluggebiet/uebungshang_westendorf.jpg"
    >
      <p>Das Echte erleben im Herzen der Kitzbüheler Alpen.</p>
      <p>
        Die Orte Brixen im Thale, Kirchberg in Tirol und Westendorf liegen
        eingebettet mitten in den Kitzbüheler Alpen auf dem Sonnenplateau des
        Brixentals auf rund 800 m. Sie bieten ein großes Netz an Wander- und
        Radwegen, vielfältige Veranstaltungen und tolle Ausflugsziele.
      </p>
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6 pt-8 nuxt-content">
      <Westendorf />
    </div>
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useMetaTags } from '@/composable/useMetaTags'
import Westendorf from '@/content_flytirol/fluggebiet/westendorf.vue'

useMetaTags()
</script>
