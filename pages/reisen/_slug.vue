<template>
  <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
    <nuxt-content :document="page" />
    <ProductVariants :is-course="true" :page="page" />
    <SocialBar
      :description="page.description"
      :title="page.title"
      :url="$route.fullPath"
      class="mt-12 lg:mt-36"
    />
  </div>
</template>

<script>
import { generateMetatags } from '~/util/generateHeaderInformation'
import SocialBar from '~/components/SocialBar.vue'
import ProductVariants from '~/components/ProductVariants.vue'

export default {
  components: { SocialBar, ProductVariants },
  async asyncData({ $content, params }) {
    const page = await $content('reisen', params.slug).fetch()
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
