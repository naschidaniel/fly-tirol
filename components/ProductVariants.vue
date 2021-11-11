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
            {{ formatPrice(variant.price) }}
          </td>
          <td class="p-1 sm:p-3 border text-center">
            <button
              v-if="variant.available"
              aria-label="Book the Product"
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
import { defineComponent } from '@vue/composition-api'
import { useData } from '~/composable/useData'
import { useShop } from '~/composable/useShop'
import { formatPrice } from '~/util/formatPrice'

export default defineComponent({
  name: 'ProductVariants',
  setup() {
    const { routeSlug } = useData()
    const { bookProduct, products } = useShop()
    return { bookProduct, products, routeSlug }
  },
  computed: {
    productVariants() {
      const product = this.products.filter((p) => p.handle === this.routeSlug)
      return product[0]?.variants
    },
  },
  methods: {
    formatPrice,
  },
})
</script>
