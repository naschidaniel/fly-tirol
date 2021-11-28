<template>
  <div>
    <div class="flex items-center text-sm -ml-1 mb-2">
      <outline-location-marker-icon class="w-4 h-4" />
      <span class="block leading-none pt-1 ml-1">
        {{ page.location }}
      </span>
    </div>
    <div v-if="page.praxis" class="flex items-center text-sm -ml-1 mb-2">
      <OutlinePaperPlaneIconVue class="w-4 h-4" />
      <span class="block leading-none pt-1 ml-1">
        {{ page.praxis }}
      </span>
    </div>
    <div v-if="page.theorie" class="flex items-center text-sm -ml-1 mb-2">
      <OutlineAcademicCapIconVue class="w-4 h-4" />
      <span class="block leading-none pt-1 ml-1">
        {{ page.theorie }}
      </span>
    </div>
    <div class="flex items-center text-sm -ml-1 mb-2">
      <outline-cash-icon class="w-4 h-4 mr-1" />
      <span v-if="price.price" class="block leading-none pt-1 font-bold">
        {{ price.preText }} {{ formatPrice(price.price) }}
      </span>
      <SpinnerIcon v-else class="animate-spin h-4 w-4 text-brand" />
    </div>
    <div v-if="isShowDate" class="flex items-center text-sm -ml-1 mb-4">
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
    page: { type: Object, required: true },
    prices: { type: Array, default: () => [] },
    dates: { type: Number, default: undefined },
    isShowDate: { type: Boolean, default: true },
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
