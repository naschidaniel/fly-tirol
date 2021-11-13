<template>
  <nuxt-link class="btn-primary" to="/buchen" exact>
    <outline-shopping-cart-icon class="mr-1" style="height: 1em; width: 1em" />
    <span class="hidden md:block lg:hidden xl:block"
      >Warenkorb&nbsp;({{ cartItemsLength }})</span
    >
    <span class="block md:hidden lg:block xl:hidden"
      >({{ cartItemsLength }})</span
    >
  </nuxt-link>
</template>

<script>
import { defineComponent, onMounted } from '@vue/composition-api'
import OutlineShoppingCartIcon from '../icons/OutlineShoppingCartIcon.vue'
import { useShop } from '~/composable/useShop'

export default defineComponent({
  name: 'NavigationNavbarCart',
  components: { OutlineShoppingCartIcon },
  setup() {
    const { checkout, fetchCollections, fetchProducts, loadCheckout } =
      useShop()
    onMounted(() => {
      fetchCollections()
      fetchProducts()
      loadCheckout()
    })
    return {
      checkout,
    }
  },
  computed: {
    cartItemsLength() {
      return this.checkout?.lineItems?.length || 0
    },
  },
})
</script>
