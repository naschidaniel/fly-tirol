<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="Livemusik - DJs"
      :picture="headerImage"
    >
      <p class="mt-2">
        Seid bereit für ein unvergessliches Erlebnis voller Musik, Spaß und guter Laune! Unser Sommerfestival bringt die besten DJs zusammen, um euch ein spektakuläres Wochenende zu bieten, das ihr nicht verpassen dürft.
      </p><p class="mt-2">
        Taucht ein in die mitreißenden Klänge und tanzt zu den Beats, die euch durch den Tag und die Nacht begleiten.
        Von energiegeladenen Live-Auftritten bis hin zu pulsierenden DJ-Sets – für jeden Musikgeschmack ist etwas dabei!
      </p><p class="mt-2">
        Genießt die entspannte Atmosphäre, leckere Speisen vom Streetfood und erfrischende Getränke, während ihr mit Freunden und Familie feiert. Denn wir garantieren: Unser Festival hat für jeden etwas zu bieten.
      </p><p class="mt-2">
        Lasst euch von der einzigartigen Stimmung mitreißen und erlebt unvergessliche Momente, die ihr noch lange in Erinnerung behalten werdet.
      </p><p class="mt-2">
        Kommt vorbei, bringt eure Freunde und Familie mit und erlebt ein Wochenende voller Musik, Spaß und unvergesslicher Momente!
      </p>
      <p class="mt-2">
        Seid gespannt auf unser aufregendes Programm – die Highlights erwarten euch!
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
import { useMedia } from '@/composable/useMedia'

const { headerImage } = useMedia()
useMetaTags()
</script>
