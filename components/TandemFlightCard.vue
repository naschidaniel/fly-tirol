<template>
  <div class="card p-4">
    <div class="card--container w-full rounded-xl bg-white shadow-xl">
      <div class="card--header aspect-w-16 aspect-h-9 rounded-t-xl bg-gray-200">
        <img loading="lazy" :src="flight.images[0].src" class="object-cover" />
      </div>
      <div class="card--content px-8 pb-12">
        <div class="card--content__inner">
          <h3 class="text-2xl font-heading font-semibold mb-1">
            {{ page.title }}
          </h3>
          <div class="flex items-center text-sm -ml-1 mb-2">
            <outline-location-marker-icon class="w-4 h-4" />
            <span class="block leading-none pt-1 ml-1">
              {{ page.location }}
            </span>
          </div>
          <div class="flex items-center text-sm -ml-1 mb-4">
            <outline-cash-icon class="w-4 h-4" />
            <span class="block leading-none pt-1 ml-1 font-bold">
              {{ price.preText }} {{ price.price | formatPrice }}
            </span>
          </div>
          <p class="text-gray-600">
            {{ page.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-end pr-8 z-10">
      <div class="transform -translate-y-2/4">
        <nuxt-link :to="page.path" class="btn-primary btn--large">
          Mehr erfahren
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import OutlineCashIcon from './icons/OutlineCashIcon.vue'
import OutlineLocationMarkerIcon from './icons/OutlineLocationMarkerIcon.vue'

export default {
  components: { OutlineCashIcon, OutlineLocationMarkerIcon },
  props: {
    flight: { type: Object, required: true },
    page: { type: Object, required: true },
  },
  computed: {
    price() {
      const price = this.flight?.variants.map((v) => parseFloat(v.price))
      const uniquePrices = [...new Set(price)]
      const preText = uniquePrices.length >= 2 ? 'ab' : ''
      return { preText, price: uniquePrices[0] }
    },
  },
}
</script>
