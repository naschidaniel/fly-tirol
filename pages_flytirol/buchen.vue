<template>
  <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
    <h1>Buchen</h1>
    <Cart />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Cart from '~/components/Cart.vue'
import { useMetaTags } from '~/composable/useMetaTags'

export default defineComponent({
  name: 'Buchen',
  components: { Cart },
  setup() {
    const { generateMetaTags, page } = useMetaTags()
    return { generateMetaTags, page }
  },
  head() {
    const metatags = this.generateMetaTags(
      this.page.title,
      this.page.description,
      this.page.path
    )
    return { title: this.page.title, meta: metatags }
  },
})
</script>
