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
import { defineComponent } from '@vue/composition-api'
import OutlineShoppingCartIcon from '../icons/OutlineShoppingCartIcon.vue'
import { useData } from '~/composable/useData'
import { useShop } from '~/composable/useShop'

export default defineComponent({
  name: 'NavigationNavbarCart',
  components: { OutlineShoppingCartIcon },
  setup() {
    const { isCookieAgreement } = useData()
    const { checkout, setCheckout, setCollections, setProducts } = useShop()
    return {
      checkout,
      isCookieAgreement,
      setCheckout,
      setCollections,
      setProducts,
    }
  },
  computed: {
    cartItemsLength() {
      return this.checkout?.lineItems?.length || 0
    },
  },
  mounted() {
    this.createCheckout()
    this.fetchCollections()
    this.fetchProduct()
  },
  methods: {
    async createCheckout() {
      if (this.isCookieAgreement) {
        try {
          const checkoutId = this.$cookies.get('FlyTirol-checkoutId')
          const checkout = await this.$shopify.checkout.fetch(checkoutId)
          this.setCheckout(checkout)
          const createdAt = Date.parse(checkout.createdAt) + 24 * 60 * 60 * 1000
          if (
            checkout.ready === true &&
            checkout.completedAt === null &&
            new Date().getTime() <= createdAt
          ) {
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
      this.setCheckout(checkout)
    },
    async fetchProduct() {
      const products = await this.$shopify.product.fetchAll()
      this.setProducts(products)
    },
    async fetchCollections() {
      const collections = await this.$shopify.collection.fetchAllWithProducts()
      this.setCollections(collections)
    },
  },
})
</script>
