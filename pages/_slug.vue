<template>
  <div class="max-w-90 w-full mx-auto py-6">
    <nuxt-content :document="page" />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useMetaTags } from '~/composable/useMetaTags'

export default defineComponent({
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
})
</script>
