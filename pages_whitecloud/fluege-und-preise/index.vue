<template>
  <div>
    <h1>Füge und Preise</h1>
    <ProductsRegiondo flight="Akrobatikflug Hopfgarten" />
    <br />
    <ProductsRegiondo flight="Akrobatikflug Söll" />
    <br />
    <ProductsRegiondo flight="Gleitflug Hopfgarten" />
    <br />
    <ProductsRegiondo flight="Gleitflug Söll" />
    <br />
    <ProductsRegiondo flight="Thermikflug Hopfgarten" />
    <br />
    <ProductsRegiondo flight="Thermikflug Söll" />
    <SocialBar />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useMetaTags } from '~/composable/useMetaTags'
import ProductsRegiondo from '~/components/ProductsRegiondo'
import SocialBar from '~/components/SocialBar'

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
