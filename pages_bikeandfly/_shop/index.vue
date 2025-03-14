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
    <ProductList />
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import PageHeader from '@/components/PageHeader.vue'
import ProductList from '@/components/ProductList.vue'
import { useMetaTags } from '@/composable/useMetaTags'
import { useBackend } from '@/composable/useBackend'
import { usePage } from '@/composable/usePage'

useMetaTags()
const { page } = usePage()
const { initShopBackend } = useBackend()

initShopBackend(page.value.category)
</script>
