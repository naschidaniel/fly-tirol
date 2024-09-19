<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="Expo Area"
      picture="/media/page-header.jpg"
    >
      <div>
        <p class="mb-2">
          Besuche unsere Expo Area und tauche ein in die Welt der besten Bike- und Gleitschirmhersteller!
          Hier hast du die Gelegenheit, die neuesten Modelle und innovativsten Ausstattungen aus erster Hand zu erleben.
          Schlendere durch die Stände, lass dich von den Experten beraten, und teste die neuesten Bikes und Gleitschirme direkt vor Ort.
          Finde genau das Equipment, das zu deinem Abenteuer passt, und genieße die Vielfalt an Marken und Produkten, die wir für dich bereithalten.
          Verpasse nicht die Chance, dich vor Ort inspirieren zu lassen und deinen persönlichen Favoriten zu entdecken!
        </p>
        <p class="mb-2">
          An diesem Wochenende gibt es von Fly Tirol und Morgensonne auf alle
          Bike & Fly Angebot spezielle Vergünstigungen für alle
          Festival-Besucher. Seid Bereit!
        </p>
      </div>
    </PageHeader>
    <ExpoList :items="items" />
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import PageHeader from '@/components/PageHeader.vue'
import ExpoList from '@/components/ExpoList.vue'
import type { ExpoEntry } from '~~/types/data'
import { useMetaTags } from '@/composable/useMetaTags'

useMetaTags()

const items: ExpoEntry[] = [
  {
    name: 'Hersteller 1',
    picture: '/media/expo/hersteller1.jpg',
    href: 'https://bikeandfly.at',
    information: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
  },
  {
    name: 'Hersteller 2',
    picture: '/media/expo/hersteller2.jpg',
    href: 'https://bikeandfly.at',
    information: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
  },
]
</script>
