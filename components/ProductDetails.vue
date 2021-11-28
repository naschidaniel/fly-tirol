<template>
  <div>
    <div class="flex items-center text-sm -ml-1 mb-2">
      <outline-location-marker-icon class="w-4 h-4" />
      <span class="block leading-none pt-1 ml-1">
        {{ location }}
      </span>
    </div>
    <div v-if="praxis" class="flex items-center text-sm -ml-1 mb-2">
      <OutlinePaperPlaneIconVue class="w-4 h-4" />
      <span class="block leading-none pt-1 ml-1">
        {{ praxis }}
      </span>
    </div>
    <div v-if="theorie" class="flex items-center text-sm -ml-1 mb-2">
      <OutlineAcademicCapIconVue class="w-4 h-4" />
      <span class="block leading-none pt-1 ml-1">
        {{ theorie }}
      </span>
    </div>
    <div class="flex items-center text-sm -ml-1 mb-2">
      <outline-cash-icon class="w-4 h-4 mr-1" />
      <span v-if="price.price" class="block leading-none pt-1 font-bold">
        {{ price.preText }} {{ formatPrice(price.price) }}
      </span>
      <SpinnerIcon v-else class="animate-spin h-4 w-4 text-brand" />
    </div>
    <div v-if="dates" class="flex items-center text-sm -ml-1 mb-4">
      <outline-calendar-icon class="w-4 h-4 mr-1" />
      <span v-if="dates" class="block leading-none pt-1"
        >{{ dates }} Termine</span
      >
      <SpinnerIcon v-else class="animate-spin h-4 w-4 text-brand" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import OutlineAcademicCapIconVue from './icons/OutlineAcademicCapIcon.vue'
import OutlineCashIcon from './icons/OutlineCashIcon.vue'
import OutlineCalendarIcon from './icons/OutlineCalendarIcon.vue'
import OutlineLocationMarkerIcon from './icons/OutlineLocationMarkerIcon.vue'
import OutlinePaperPlaneIconVue from './icons/OutlinePaperPlaneIcon.vue'
import SpinnerIcon from './icons/SpinnerIcon.vue'
import { formatPrice } from '~/util/formatPrice'

export default defineComponent({
  components: {
    OutlineAcademicCapIconVue,
    OutlineCashIcon,
    OutlineCalendarIcon,
    OutlineLocationMarkerIcon,
    OutlinePaperPlaneIconVue,
    SpinnerIcon,
  },
  props: {
    location: { type: String, default: undefined },
    praxis: { type: String, default: undefined },
    theorie: { type: String, default: undefined },
    prices: { type: Array, default: () => [] },
    dates: { type: Number, default: undefined },
  },
  computed: {
    price() {
      const preText = this.prices.length >= 2 ? 'ab' : ''
      return { preText, price: this.prices[0] }
    },
  },
  methods: {
    formatPrice,
  },
})
</script>
