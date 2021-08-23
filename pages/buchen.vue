<template>
  <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
    <h1>Buchen</h1>
    <Cart />
  </div>
</template>

<script>
import Cart from '~/components/Cart.vue'

import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  name: 'Buchen',
  components: { Cart },
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
