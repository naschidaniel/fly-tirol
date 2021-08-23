<template>
  <div class="py-6">
    <hero-two :hero="index.hero" />
    <tandem-flight-list :tandemflights="tandemflights" />
    <div class="flex flex-wrap max-w-90 mx-auto py-12 lg:py-24">
      <nuxt-content
        :document="index"
        class="w-full md:w-1/3 text-lg leading-relaxed max-w-prose"
      />
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
  async asyncData({ $content }) {
    const index = await $content('tandemfliegen', 'index').fetch()
    const prerequisites = await $content(
      'tandemfliegen',
      'voraussetzungen'
    ).fetch()
    return { index, prerequisites }
  },
  head() {
    const metatags = generateMetatags(
      this.index.title,
      this.index.description,
      this.$route.fullPath
    )
    return { title: this.index.title, meta: metatags }
  },
  computed: {
    tandemflights() {
      return this.$store.state.tandemflights
    },
  },
}
</script>
