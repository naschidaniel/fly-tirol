<template>
  <div>
    <nuxt-content :document="index" />
    <team-list :members="members" />
  </div>
</template>

<script>
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: {},
  async asyncData({ $content, params }) {
    const index = await $content('team', 'index').fetch()
    const members = await $content('team', params.slug)
      .where({ card: true })
      .sortBy('order', 'desc')
      .fetch()
    return { index, members }
  },
  data() {
    return {}
  },
  head() {
    const metatags = generateMetatags(this.index.title, this.index.description)
    return { title: this.index.title, meta: metatags }
  },
}
</script>
