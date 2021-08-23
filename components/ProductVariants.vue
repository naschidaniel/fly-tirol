<template>
  <div class="my-auto p-4 mt-4 nuxt-content">
    <h2>Termine</h2>
    <table class="table-fixed border">
      <thead>
        <tr>
          <th class="w-1/2 p-2 border">Datum</th>
          <th class="w-1/4 p-2 border">Preis</th>
          <th class="w-1/4 p-2 border">Buchen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="variant in productVariants" :key="variant.id">
          <td class="p-1 sm:p-3 text-center border">
            <strong>{{ variant.title }}</strong>
          </td>
          <td class="p-1 sm:p-3 text-center border">
            {{ variant.price | formatPrice }}
          </td>
          <td class="p-1 sm:p-3 border">
            <button
              v-if="variant.available"
              class="btn-primary btn--large"
              @click.prevent="bookProduct(variant.id)"
            >
              Buchen
            </button>
            <span v-else class="text-gray-700">nicht verfügbar</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ProductVariants',
  computed: {
    productVariants() {
      const products = this.$store.state.products.filter(
        (p) => p.handle === this.$route.params.slug
      )
      return products[0]?.variants
    },
  },
  methods: {
    bookProduct(variantId) {
      const lineItemsToAdd = [
        {
          variantId,
          quantity: 1,
          customAttributes: [],
        },
      ]
      const checkoutId = this.$store.state.checkout.id
      this.$shopify.checkout
        .addLineItems(checkoutId, lineItemsToAdd)
        .then((checkout) => {
          this.$store.commit('setCheckout', checkout)
        })
      this.$router.push({ path: '/buchen' })
    },
  },
}
</script>
