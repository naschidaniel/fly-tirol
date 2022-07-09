<template>
  <div class="mt-3">
    <div class="flex items-center text-sm -ml-1 mb-2">
      <OutlineLocationMarkerIcon class="w-4 h-4" />
      <span class="block leading-none pt-1 ml-1">
        {{ page.location }}
      </span>
    </div>
    <div v-if="page.duration" class="flex items-center text-sm -ml-1 mb-2">
      <OutlineClockIcon class="w-4 h-4 mr-1" />
      <span class="block leading-none pt-1">{{ page.duration }}</span>
    </div>
    <div
      v-if="page.praxis || page.flightDuration"
      class="flex items-center text-sm -ml-1 mb-2"
    >
      <OutlinePaperPlaneIconVue class="w-4 h-4" />
      <span class="block leading-none pt-1 ml-1">
        {{ page.praxis }} {{ page.flightDuration }}
      </span>
    </div>
    <div v-if="page.theorie" class="flex items-center text-sm -ml-1 mb-2">
      <OutlineAcademicCapIconVue class="w-4 h-4" />
      <span class="block leading-none pt-1 ml-1">
        {{ page.theorie }}
      </span>
    </div>
    <div class="flex items-center text-sm -ml-1 mb-2">
      <OutlineCashIcon class="w-4 h-4 mr-1" />
      <span v-if="price.price" class="block leading-none pt-1 font-bold">
        <span v-if="isFlyTirol"
          >{{ price.preText }} {{ formatPrice(price.price) }}</span
        >
        <span v-if="isWhiteCloud">{{ price.price }}</span>
      </span>
      <SpinnerIcon v-else class="animate-spin h-4 w-4 text-brand" />
    </div>
    <div v-if="isShowDate" class="flex items-center text-sm -ml-1 mb-4">
      <OutlineCalendarIcon class="w-4 h-4 mr-1" />
      <span v-if="dates" class="block leading-none pt-1"
        >{{ dates }} Termine</span
      >
      <SpinnerIcon v-else class="animate-spin h-4 w-4 text-brand" />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import OutlineAcademicCapIconVue from './icons/OutlineAcademicCapIcon'
import OutlineClockIcon from './icons/OutlineClockIcon'
import OutlineCashIcon from './icons/OutlineCashIcon'
import OutlineCalendarIcon from './icons/OutlineCalendarIcon'
import OutlineLocationMarkerIcon from './icons/OutlineLocationMarkerIcon'
import OutlinePaperPlaneIconVue from './icons/OutlinePaperPlaneIcon'
import SpinnerIcon from './icons/SpinnerIcon'
import { useFormat } from '~/composable/useFormat'
import { useData } from '~/composable/useData'

export default defineComponent({
  components: {
    OutlineAcademicCapIconVue,
    OutlineCashIcon,
    OutlineCalendarIcon,
    OutlineClockIcon,
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
  setup(props) {
    const { isFlyTirol, isWhiteCloud } = useData()
    const { formatPrice } = useFormat()

    const price = computed(() => {
      const preText = props.prices.length >= 2 ? 'ab' : ''
      return {
        preText,
        price: props.prices[0],
      }
    })
    return { formatPrice, isFlyTirol, isWhiteCloud, price }
  },
})
</script>
