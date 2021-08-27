<template>
  <div>
    <nuxt-content :document="index" />
    <product-list :pages="pages" />
  </div>
</template>

<script>
import ProductList from '~/components/ProductList.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { ProductList },
  async asyncData({ $content, params }) {
    const index = await $content('fortbildung', 'index').fetch()
    const pages = await $content('fortbildung').fetch()
    return { pages, index }
  },
  head() {
    const metatags = generateMetatags(
      this.index.title,
      this.index.description,
      this.$route.fullPath
    )
    return { title: this.index.title, meta: metatags }
  },
}
</script>
