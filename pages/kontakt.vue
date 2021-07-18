<template>
  <div>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: {},
  async asyncData({ $content }) {
    const page = await $content('kontakt').fetch()
    return { page }
  },
  data() {
    return {}
  },
  head() {
    const metatags = generateMetatags(
      this.page.title,
      this.page.description,
      this.$route.fullPath
    )
    return { title: this.page.title, meta: metatags }
  },
}
</script>
