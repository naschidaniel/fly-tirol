<template>
  <div>
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
import ProductsRegiondo from '~/components/ProductsRegiondo'
import SocialBar from '~/components/SocialBar'

export default defineComponent({
  components: { SocialBar, ProductsRegiondo },
  setup() {},
})
</script>
