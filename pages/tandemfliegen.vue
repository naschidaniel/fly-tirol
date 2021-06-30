<template>
  <div>
    <hero-two :hero="hero" />
    <tandem-flight-list :tandemflights="tandemflights" />
    <div class="flex flex-wrap max-w-90 mx-auto py-12 lg:py-24">
      <nuxt-content :document="index" class="w-full md:w-1/3" />
      <content-image-gallery
        path="/media/tandemfliegen/"
        class="w-full md:w-2/3 md:pl-8"
      />
    </div>
    <info-box :infobox="prerequisites" />
  </div>
</template>

<script>
import InfoBox from '~/components/InfoBox.vue'
import TandemFlightList from '~/components/TandemFlightList.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { TandemFlightList, InfoBox },
  async asyncData({ $content, params }) {
    const index = await $content('tandemfliegen', 'index').fetch()
    const prerequisites = await $content(
      'tandemfliegen',
      'voraussetzungen'
    ).fetch()
    const tandemflights = await $content('tandemfliegen', params.slug)
      .where({ card: true })
      .sortBy('order', 'asc')
      .fetch()
    return { index, prerequisites, tandemflights }
  },
  data() {
    return {
      hero: {
        pretitle: 'Gehe mit FlyTirol',
        title: 'Tandemfliegen',
        intro:
          'Einmal das Gefühl der Freiheit hoch über den Gipfeln der Kitzbüheler Alpen mit Blick auf den Alpenhauptkamm und den Wilden Kaiser bei einem Tandemflug mit einem unserer Top-Tandempiloten genießen! Egal ob im Winter oder Sommer, die Fly Tirol Flugschule zeigt dir das Alpenpanorama aus der Vogelperspektive.',
      },
    }
  },
  head() {
    const metatags = generateMetatags(this.index.title, this.index.description)
    return { title: this.index.title, meta: metatags }
  },
}
</script>
