<template>
  <div class="card">
    <div class="card--container w-full rounded-xl bg-white shadow-xl">
      <div class="card--header aspect-w-16 aspect-h-9 rounded-t-xl bg-gray-200">
        <img loading="lazy" :src="flight.images[0].src" class="object-cover" />
      </div>
      <div class="card--content px-8 pb-12">
        <div class="card--content__inner">
          <h3 class="text-2xl font-heading font-semibold mb-1">
            {{ flight.title }}
          </h3>
          <div class="flex items-center text-sm -ml-1 mb-4">
            <outline-location-marker-icon class="w-4 h-4" />
            <span class="block leading-none pt-1 ml-1"> Westendorf </span>
          </div>
          <p class="text-gray-600">
            {{ flight.description }}
          </p>
          <select v-model="selectedVariant" class="mt-2">
            <option selected>Wähle deinen Flug</option>
            <option
              v-for="variant in variants"
              :key="variant.id"
              :value="variant"
            >
              {{ variant.title }}
            </option>
          </select>
          <div class="font-medium mt-4">
            {{ price.preText }} {{ price.price | formatPrice }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end pr-8 z-10">
      <div class="transform -translate-y-2/4">
        <card-button name="Buchen" to="/kontakt" />
      </div>
    </div>
  </div>
</template>

<script>
import CardButton from './CardButton.vue'
export default {
  components: { CardButton },
  props: { flight: { type: Object, required: true } },
  data() {
    return {
      selectedVariant: 'Wähle deinen Flug',
    }
  },
  computed: {
    price() {
      const price = this.flight?.variants.map((v) => parseFloat(v.price))
      const uniquePrices = [...new Set(price)]
      const preText = uniquePrices.length >= 2 ? 'ab' : ''
      return { preText, price: uniquePrices[0] }
    },
    variants() {
      return this.flight?.variants || []
    },
  },
}
</script>
