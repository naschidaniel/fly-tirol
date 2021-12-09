<template>
  <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
    <h1>Buchen</h1>
    <Cart />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Cart from '~/components/Cart.vue'
import { useMetaTags } from '~/composable/useMetaTags'

export default defineComponent({
  name: 'Buchen',
  components: { Cart },
  setup() {
    const { generateMetaTags } = useMetaTags()
    return { generateMetaTags }
  },
  head() {
    const metatags = this.generateMetaTags(
      'Buchen',
      'Buche dienen Traum vom Fliegen bei der Flugschule Fly-Tirol.com',
      this.$route.fullPath
    )
    return { title: 'Buchen', meta: metatags }
  },
})
</script>
