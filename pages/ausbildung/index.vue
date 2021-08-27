<template>
  <div>
    <nuxt-content :document="index" />
    <product-list :pages="pages" />
    <info-box :infobox="prerequisites" />
  </div>
</template>

<script>
import ProductList from '~/components/ProductList.vue'
import InfoBox from '~/components/InfoBox.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { ProductList, InfoBox },
  async asyncData({ $content }) {
    const index = await $content('ausbildung', 'index').fetch()
    const pages = await $content('ausbildung').fetch()
    const prerequisites = await $content(
      'ausbildung',
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
