<template>
  <div class="my-auto p-1 md:p-4 mt-4 w-full lg:w-1/2">
    <table class="table-fixed border w-full">
      <thead>
        <tr>
          <th class="w-1/2 p-2 border text-sm md:text-base">Flug / Kurs</th>
          <th class="w-1/4 p-2 border text-sm md:text-base">Preis</th>
          <th class="w-1/4 p-2 border text-sm md:text-base">Buchen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="variant in productVariants" :key="variant.id">
          <td
            class="p-1 sm:p-3 text-center border font-bold text-sm md:text-base"
          >
            {{ variant.title }}
          </td>
          <td class="p-1 sm:p-3 text-center border text-sm md:text-base">
            {{ variant.price | formatPrice }}
          </td>
          <td class="p-1 sm:p-3 border text-center">
            <button
              v-if="variant.available"
              class="btn-primary text-sm md:text-base"
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
      const product = this.$store.state.products.filter(
        (p) => p.handle === this.$route.params.slug
      )
      return product[0]?.variants
    },
  },
  methods: {
    async bookProduct(variantId) {
      const lineItemsToAdd = [
        {
          variantId,
          quantity: 1,
          customAttributes: [],
        },
      ]
      const checkoutId = this.$store.state.checkout.id
      await this.$shopify.checkout
        .addLineItems(checkoutId, lineItemsToAdd)
        .then((checkout) => {
          this.$store.commit('setCheckout', checkout)
        })
      this.$router.push({ path: '/buchen' })
    },
  },
}
</script>
