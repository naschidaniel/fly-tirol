<template>
  <div>
    <nuxt-content :document="index" />
  </div>
</template>

<script>
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  async asyncData({ $content }) {
    const index = await $content('reisen', 'index').fetch()
    return { index }
  },
  head() {
    const metatags = generateMetatags(this.index.title, this.index.description)
    return { title: this.index.title, meta: metatags }
  },
}
</script>
