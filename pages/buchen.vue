<template>
  <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
    <h1>Buchen</h1>
    <Cart />
    <CartForm />
  </div>
</template>

<script>
import Cart from '~/components/Cart.vue'
import CartForm from '~/components/CartForm.vue'

import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  name: 'Buchen',
  components: { Cart, CartForm },
  head() {
    const metatags = generateMetatags(
      'Buchen',
      'Buche dienen Traum vom Fliegen bei der Flugschule Fly-Tirol.com',
      this.$route.fullPath
    )
    return { title: 'Buchen', meta: metatags }
  },
}
</script>
