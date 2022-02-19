<template>
  <nuxt-link class="btn-primary" to="/buchen" exact>
    <outline-shopping-cart-icon class="mr-1" style="height: 1em; width: 1em" />
    ({{ cartItemsLength }})
  </nuxt-link>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import OutlineShoppingCartIcon from '../icons/OutlineShoppingCartIcon.vue'
import { useShopifyCart } from '~/composable/useShopifyCart'

export default defineComponent({
  name: 'NavigationNavbarCart',
  components: { OutlineShoppingCartIcon },
  setup() {
    const { checkout } = useShopifyCart()
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
