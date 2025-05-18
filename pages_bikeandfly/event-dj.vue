<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="Reini Gossner / DJock Norris"
      :picture="headerImage"
    >
      <p class="mt-2">
        Reini Gossner [DJock Norris] ist ein DJ der alten Schule, der sein Handwerk schon in den frühen
        90igern auf zwei Turntables und einem analogen Mixer gelernt hat. Seine Leidenschaft zum Auflegen
        ist bis heute ungebrochen, auch wenn er das Vinyl durch digitale Technik ersetz hat.
      </p>
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6">
      <EventDj class="nuxt-content" />
    </div>
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useMetaTags } from '@/composable/useMetaTags'
import EventDj from '@/content_bikeandfly/event-dj.vue'
import { useMedia } from '@/composable/useMedia'

const { headerImage } = useMedia()
useMetaTags()
</script>
