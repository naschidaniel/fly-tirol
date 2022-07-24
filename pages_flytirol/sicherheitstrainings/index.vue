<template>
  <div>
    <PageHeader pre-headline="Paragliding" headline="Sicherheitstrainings">
      Du bist bereits ein Paragleitpilot und besitzt den A-Schein oder den
      Paragleiterschein und möchtest optimal auf außergewöhnliche
      Flugsituationen vorbereitet werden? Dann fahr mit der Flugschule Fly Tirol
      an den wunderschönen Lago Di Garda um unter professioneller Anleitung von
      Sebastian Kahn Extremsituationen zu simulieren und diverse Abstiegshilfen
      wie z.B. die Steilspirale und den B-Stall zu lernen oder zu
      perfektionieren, um in Zukunft kritische Flugsituationen zu meistern oder
      vermeiden zu können.
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
