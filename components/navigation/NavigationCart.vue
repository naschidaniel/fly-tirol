<template>
  <nuxt-link class="btn-primary" to="/buchen" exact>
    <outline-shopping-cart-icon class="mr-1" style="height: 1em; width: 1em" />
    <span class="hidden md:block">Warenkorb&nbsp;({{ cartItemsLength }})</span>
    <span class="block md:hidden">({{ cartItemsLength }})</span>
  </nuxt-link>
</template>

<script>
import OutlineShoppingCartIcon from '../icons/OutlineShoppingCartIcon.vue'

export default {
  name: 'NavigationCart',
  components: { OutlineShoppingCartIcon },
  computed: {
    cartItemsLength() {
      return this.$store.state.checkout?.lineItems?.length || 0
    },
  },
  mounted() {
    this.createCheckout()
    this.fetchCollections()
    this.fetchProduct()
  },
  methods: {
    async createCheckout() {
      if (this.$store.state.cookieAgreement) {
        try {
          const checkoutId = this.$cookies.get('FlyTirol-checkoutId')
          const checkout = await this.$shopify.checkout.fetch(checkoutId)
          this.$store.commit('setCheckout', checkout)
          const createdAt = Date.parse(checkout.createdAt) + 24 * 60 * 60 * 1000
          if (
            checkout.ready === true &&
            checkout.completedAt === null &&
            new Date().getTime() <= createdAt
          ) {
            console.log(checkout)
            // eslint-disable-next-line no-console
            console.log('Found Valid CheckoutId ', checkoutId)
            return
          }
        } catch (e) {
          this.$cookies.remove('FlyTirol-checkoutId')
          // eslint-disable-next-line no-console
          console.error(
            'The CheckoutId could not be loaded from the local storage.'
          )
        }
      }
      const checkout = await this.$shopify.checkout.create()
      this.$store.commit('setCheckout', checkout)
    },
    async fetchProduct() {
      const products = await this.$shopify.product.fetchAll()
      this.$store.commit('setProducts', products)
    },
    async fetchCollections() {
      const collections = await this.$shopify.collection.fetchAllWithProducts()
      this.$store.commit('setCollections', collections)
    },
  },
}
</script>
