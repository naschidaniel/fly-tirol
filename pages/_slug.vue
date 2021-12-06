<template>
  <div class="max-w-90 w-full mx-auto py-6">
    <nuxt-content :document="page" />
  </div>
</template>

<script>
import { useMetaTags } from '~/composable/useMetaTags'

export default {
  setup() {
    const { generateMetaTags } = useMetaTags()
    return { generateMetaTags }
  },
  async asyncData({ $content, params }) {
    const page = await $content(params.slug).fetch()
    return { page }
  },
  head() {
    const metatags = this.generateMetaTags(
      this.page.title,
      this.page.description,
      this.$route.fullPath
    )
    return { title: this.page.title, meta: metatags }
  },
}
</script>
