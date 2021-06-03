<template>
  <nuxt-content :document="page" />
</template>

<script>
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  async asyncData({ $content, params }) {
    const page = await $content('ausbildung', params.slug).fetch()
    return { page }
  },
  head() {
    const metatags = generateMetatags(this.page.title, this.page.description)
    return { title: this.page.title, meta: metatags }
  },
}
</script>
