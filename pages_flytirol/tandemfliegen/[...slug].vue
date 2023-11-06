<template>
  <div>
    <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
      <div v-if="page.slug == 'panoramaflug'">
        <Panoramaflug />
      </div>
      <div v-if="page.slug == 'thermikflug'">
        <Thermikflug />
      </div>
      <div v-if="page.slug == 'tandemflug-geschenkkarte'">
        <TandemflugGeschenkkarte />
      </div>
    </div>
    <div class="flex flex-wrap max-w-90 mx-auto py-12 lg:py-24">
      <div
        class="w-full lg:w-1/3 text-lg leading-relaxed max-w-prose nuxt-content"
      >
        <h2>Ablauf</h2>
        Treffpunkt ist unser Standort in Westendorf gegenüber der
        Alpenrosenbahn. Hier lernst du deinen Tandempiloten kennen. Mit der
        Gondel geht es dann zum Startplatz auf über 1800 m Seehöhe. Oben
        angekommen bekommst du nochmals Informationen zum Startvorgang und der
        Tandempilot checkt erneut alle nötigen Sicherheitsvorkehrungen, die für
        einen sicheren Flug notwendig sind. Mit nur wenigen Schritten hebt ihr
        dann gemeinsam in ein unvergessliches Erlebnis ab! Du kannst dich
        entspannt in das bequeme Gurtzeug zurücklehnen und den atemberaubenden
        Ausblick genießen! Möchtest du ein bisschen mehr Action erleben, fliegen
        unsere Tandempiloten auf Wunsch auch gerne einige Kunstflugmanöver mit
        dir.
      </div>
      <ContentImageGallery
        path="/media/tandemfliegen/galerie/"
        class="w-full lg:w-2/3 lg:pl-8"
      />
    </div>
    <ProductBookTandemflight />
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import ContentImageGallery from '@/components/ContentImageGallery.vue'
import SocialBar from '@/components/SocialBar.vue'
import ProductBookTandemflight from '@/components/ProductBookTandemflight.vue'
import { usePage } from '@/composable/usePage'
import { useMetaTags } from '@/composable/useMetaTags'
import Panoramaflug from '@/content_flytirol/tandemfliegen/panoramaflug.vue'
import Thermikflug from '@/content_flytirol/tandemfliegen/thermikflug.vue'
import TandemflugGeschenkkarte from '@/content_flytirol/tandemfliegen/tandemflug-geschenkkarte.vue'

useMetaTags()
const { page } = usePage()
</script>
