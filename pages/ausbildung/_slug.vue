<template>
  <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
    <nuxt-content :document="page" />
    <h2>Kurse</h2>
    <product-variants />
  </div>
</template>

<script>
import ProductVariants from '~/components/ProductVariants.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { ProductVariants },
  async asyncData({ $content, params }) {
    const page = await $content('ausbildung', params.slug).fetch()
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
