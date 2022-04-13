<template>
  <div>
    <div class="max-w-90 w-full mx-auto nuxt-content">
      <h1><small>Tandemfliegen</small>Flüge und <strong>Preise</strong></h1>
      <ProductList />
    </div>
    <SocialBar />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useMetaTags } from '~/composable/useMetaTags'
import SocialBar from '~/components/SocialBar'
import ProductList from '~/components/ProductList.vue'

export default defineComponent({
  components: { SocialBar, ProductList },
  setup() {
    const { generateMetaTags, page } = useMetaTags()
    return { generateMetaTags, page }
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
