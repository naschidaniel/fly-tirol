<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="Packages"
      picture="/media/packages/packages.jpg"
    >
      <div>
        <p class="mb-2">
          Du möchtest unbedingt beim ersten Bike & Fly Festival dabei sein? Dann
          sichere dir schon jetzt deine Tickets und spare beim Onlinekauf Geld.
          Natürlich sind auch Kurzentschlossene herzlich willkommen und können
          ihre Tickets über die Kassen vor Ort erhalten.
        </p>
        <p class="mb-2">
          An diesem Wochenende gibt es von Fly Tirol und Morgensonne auf alle
          Bike & Fly Angebot spezielle Vergünstigungen für alle
          Festival-Besucher. Reserviere dir schon jetzt deinen Platz für ein
          einzigartiges Erlebnis!
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

useMetaTags()
</script>
