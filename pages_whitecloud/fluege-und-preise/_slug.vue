<template>
  <div>
    <ProductsRegiondo :flight="page.slug" />
    <SocialBar />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import ProductsRegiondo from '~/components/ProductsRegiondo'
import SocialBar from '~/components/SocialBar'
import { useMetaTags } from '~/composable/useMetaTags'

export default defineComponent({
  components: { SocialBar, ProductsRegiondo },
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
