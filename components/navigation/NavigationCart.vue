<template>
  <div><outline-shopping-cart-icon class="w-6 h-6 mr-4 hidden" /></div>
</template>

<script>
import OutlineShoppingCartIcon from '../icons/OutlineShoppingCartIcon.vue'

export default {
  name: 'NavigationCart',
  components: { OutlineShoppingCartIcon },
  mounted() {
    this.fetchCollections()
    this.fetchProduct()
  },
  methods: {
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
