<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="Livemusik"
      picture="/media/page-header.jpg"
    >
      <p>
        Seid bereit für ein unvergessliches Erlebnis voller Musik, Spaß und guter Laune! Unser Sommerfestival bringt die besten Bands und DJs zusammen, um euch ein spektakuläres Wochenende zu bieten, das ihr nicht verpassen dürft.

        Taucht ein in die mitreißenden Klänge und tanzt zu den Beats, die euch durch den Tag und die Nacht begleiten.

        Von energiegeladenen Live-Auftritten bis hin zu pulsierenden DJ-Sets – für jeden Musikgeschmack ist etwas dabei!

        Genießt die entspannte Atmosphäre, leckere Speisen vom Street Food und erfrischende Getränke, während ihr mit Freunden und Familie feiert. Denn wir garantieren, unser Festival hat für jeden etwas zu bieten.

        Lasst euch von der einzigartigen Stimmung mitreißen und erlebt unvergessliche Momente, die ihr noch lange in Erinnerung behalten werdet.
      </p>
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6">
      <LiveMusik class="nuxt-content" />
    </div>
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useMetaTags } from '@/composable/useMetaTags'
import LiveMusik from '@/content_bikeandfly/livemusik.vue'

useMetaTags()
</script>
