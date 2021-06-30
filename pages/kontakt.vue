<template>
  <div>
    <nuxt-content :document="index" />
    <info-box-two :infobox="infobox" />
  </div>
</template>

<script>
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: {},
  async asyncData({ $content, params }) {
    const index = await $content('kontakt', 'index').fetch()
    const infobox = await $content('kontakt', 'infobox').fetch()
    return { index, infobox }
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
