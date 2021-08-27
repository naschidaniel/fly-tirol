<template>
  <div class="py-6">
    <hero-two :hero="index.hero" />
    <product-list :pages="pages" />
    <div class="flex flex-wrap max-w-90 mx-auto py-12 lg:py-24 nuxt-content">
      <nuxt-content :document="index" />
      <h2>Bildergalerie</h2>
      <content-image-gallery
        path="/media/tandemfliegen/"
        class="w-full md:pl-8"
      />
    </div>
  </div>
</template>

<script>
import ProductList from '~/components/ProductList.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { ProductList },
  async asyncData({ $content }) {
    const index = await $content('tandemfliegen', 'index').fetch()
    const pages = await $content('tandemfliegen').fetch()
    const prerequisites = await $content(
      'tandemfliegen',
      'voraussetzungen'
    ).fetch()
    return { index, pages, prerequisites }
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
