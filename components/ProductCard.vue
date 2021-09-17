<template>
  <div class="card">
    <div class="card--container w-full rounded-xl bg-white shadow-xl">
      <nuxt-link :to="page.path" :title="page.title">
        <div
          class="card--header aspect-w-16 aspect-h-14 rounded-t-xl bg-gray-200"
        >
          <ResponsiveImage
            img-class="object-cover"
            :picture="page.image"
            :is-thumbnail="true"
          />
        </div>
      </nuxt-link>
      <div class="card--content px-8 pb-12">
        <div class="card--content__inner">
          <h2 class="text-2xl font-heading font-semibold mb-1">
            <nuxt-link :to="page.path">{{ page.title }}</nuxt-link>
          </h2>
          <div class="flex items-center text-sm -ml-1 mb-2">
            <outline-location-marker-icon class="w-4 h-4" />
            <span class="block leading-none pt-1 ml-1">
              {{ page.location }}
            </span>
          </div>
          <div class="flex items-center text-sm -ml-1 mb-2">
            <outline-cash-icon class="w-4 h-4 mr-1" />
            <span v-if="price.price" class="block leading-none pt-1 font-bold">
              {{ price.preText }} {{ price.price | formatPrice }}
            </span>
            <SpinnerIcon v-else class="animate-spin h-4 w-4 text-brand" />
          </div>
          <div
            v-if="!isTandemflight"
            class="flex items-center text-sm -ml-1 mb-4"
          >
            <outline-calendar-icon class="w-4 h-4 mr-1" />
            <span v-if="dates" class="block leading-none pt-1"
              >{{ dates }} Termine</span
            >
            <SpinnerIcon v-else class="animate-spin h-4 w-4 text-brand" />
          </div>
          <p v-if="isTandemflight" class="text-gray-600">
            {{ page.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-end pr-8 z-10">
      <div class="transform -translate-y-2/4">
        <nuxt-link
          :to="page.path"
          class="btn-primary btn--large"
          :title="page.title"
        >
          Mehr erfahren
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import OutlineCashIcon from './icons/OutlineCashIcon.vue'
import OutlineCalendarIcon from './icons/OutlineCalendarIcon.vue'
import OutlineLocationMarkerIcon from './icons/OutlineLocationMarkerIcon.vue'
import ResponsiveImage from './ResponsiveImage.vue'
import SpinnerIcon from './icons/SpinnerIcon.vue'

export default {
  components: {
    OutlineCashIcon,
    OutlineCalendarIcon,
    OutlineLocationMarkerIcon,
    ResponsiveImage,
    SpinnerIcon,
  },
  props: {
    course: { type: Object, default: () => {} },
    page: { type: Object, required: true },
  },
  computed: {
    isTandemflight() {
      return this.page.path.includes('/tandemfliegen')
    },
    price() {
      const price = this.course?.variants.map((v) => parseFloat(v.price))
      const uniquePrices = [...new Set(price)]
      const preText = uniquePrices.length >= 2 ? 'ab' : ''
      return { preText, price: uniquePrices[0] }
    },
    dates() {
      return this.course?.variants?.length
    },
  },
}
</script>
