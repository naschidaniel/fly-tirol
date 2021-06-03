<template>
  <div>
    <nuxt-content :document="index" />
    <tandem-flight-list :tandemflights="tandemflights" />
    <nuxt-content :document="prerequisites" />
  </div>
</template>

<script>
import TandemFlightList from '~/components/TandemFlightList.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { TandemFlightList },
  async asyncData({ $content, params }) {
    const index = await $content('tandemfliegen', 'index').fetch()
    const prerequisites = await $content(
      'tandemfliegen',
      'voraussetzungen'
    ).fetch()
    const tandemflights = await $content('tandemfliegen', params.slug)
      .sortBy('order', 'asc')
      .fetch()
    return { index, prerequisites, tandemflights }
  },
  head() {
    const metatags = generateMetatags(this.index.title, this.index.description)
    return { title: this.index.title, meta: metatags }
  },
}
</script>
