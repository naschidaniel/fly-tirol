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
import { defineComponent } from '@vue/composition-api'
import { useMetaTags } from '~/composable/useMetaTags'
import ProductVariants from '~/components/ProductVariants.vue'
import SocialBar from '~/components/SocialBar.vue'

export default defineComponent({
  components: { ProductVariants, SocialBar },
  setup() {
    const { generateMetaTags } = useMetaTags()
    return { generateMetaTags }
  },
  async asyncData({ $content, params }) {
    const page = await $content('fortbildung', params.slug).fetch()
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
