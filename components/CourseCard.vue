<template>
  <div class="card">
    <div class="card--container w-full rounded-xl bg-white shadow-xl">
      <div class="card--header aspect-w-16 aspect-h-9 rounded-t-xl bg-gray-200">
        <img loading="lazy" :src="course.images[0].src" class="object-cover" />
      </div>
      <div class="card--content px-8 pb-12">
        <div class="card--content__inner">
          <h3 class="text-2xl font-heading font-semibold mb-1">
            {{ course.title }}
          </h3>
          <div class="flex items-center text-sm -ml-1 mb-2">
            <outline-location-marker-icon class="w-4 h-4" />
            <span class="block leading-none pt-1 ml-1">
              <!-- {{ course.location }} -->
              Westendorf
            </span>
          </div>
          <div class="flex items-center text-sm -ml-1 mb-2">
            <outline-cash-icon class="w-4 h-4" />
            <span class="block leading-none pt-1 ml-1 font-bold">
              {{ price.preText }} {{ price.price | formatPrice }}
            </span>
          </div>
          <div class="flex items-center text-sm -ml-1 mb-4">
            <outline-calendar-icon class="w-4 h-4" />
            <span class="block leading-none pt-1 ml-1"
              >{{ course.variants.length }} Termine</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end pr-8 z-10">
      <div class="transform -translate-y-2/4">
        <card-button :to="slug" name="Mehr erfahren" />
      </div>
    </div>
  </div>
</template>

<script>
import CardButton from './CardButton.vue'
export default {
  components: { CardButton },
  props: {
    conentFolder: { type: Object, default: () => {}, required: false },
    course: { type: Object, required: true },
    slug: { type: String, default: '', required: false },
  },
  computed: {
    price() {
      const price = this.course?.variants.map((v) => parseFloat(v.price))
      const uniquePrices = [...new Set(price)]
      const preText = uniquePrices.length >= 2 ? 'ab' : ''
      return { preText, price: uniquePrices[0] }
    },
  },
}
</script>
