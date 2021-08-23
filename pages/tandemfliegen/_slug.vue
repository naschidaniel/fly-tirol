<template>
  <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
    <nuxt-content :document="page" />
    <h2>Tandemflüge</h2>
    <product-variants />
  </div>
</template>

<script>
import { generateMetatags } from '~/util/generateHeaderInformation'
import ProductVariants from '~/components/ProductVariants.vue'

export default {
  components: { ProductVariants },
  async asyncData({ $content, params }) {
    const page = await $content('tandemfliegen', params.slug).fetch()
    return { page }
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
