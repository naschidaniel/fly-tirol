<template>
  <div class="my-auto w-full lg:w-5/6">
    <div class="grid grid-cols-1 gap-6">
      <label class="block">
        <span :class="isFormValid ? 'text-gray-700' : 'text-red-600'"
          >Wähle das gewünschtes Datum</span
        >
        <input
          v-model="selectedDate"
          type="date"
          :min="today"
          class="
            mt-1
            block
            w-full
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          :class="
            (!isDateValid && selectedDate !== '') || !isFormValid
              ? 'border-red-600'
              : 'border-gray-300'
          "
          @change="checkDate()"
        />
      </label>
      <button
        aria-label="Book the Date"
        class="btn-primary text-sm md:text-base"
        :class="isFormValid && isDateValid ? '' : 'btn--disabled'"
        @click.prevent="
          bookProduct(productId, {
            customAttributes: [
              {
                key: 'Wunschtermin nach Absprache',
                value: formatDate(selectedDateTimestamp),
              },
            ],
          })
        "
      >
        Buche deinen Wunschtermin
        <span v-if="isDateValid"
          >&nbsp; {{ formatDate(selectedDateTimestamp) }}</span
        >
      </button>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, unref } from '@vue/composition-api'
import { useFormat } from '~/composable/useFormat'
import { useNavigation } from '~/composable/useNavigation'
import { useShopifyCart } from '~/composable/useShopifyCart'

export default defineComponent({
  name: 'ProductAppointment',
  setup() {
    const { routeSlug } = useNavigation()
    const { formatDate } = useFormat()
    const { bookProduct, products } = useShopifyCart()
    const productId = computed(
      () => unref(products).find((p) => p.slug === routeSlug)?.id
    )
    return { bookProduct, formatDate, productId }
  },
  data() {
    return {
      selectedDate: '',
      isFormValid: true,
      isDateValid: false,
    }
  },
  computed: {
    today() {
      return new Date().toISOString().split('T')[0]
    },
    selectedDateTimestamp() {
      return new Date(this.selectedDate)
    },
  },
  methods: {
    checkDate() {
      const entryTimestamp = new Date(this.selectedDate).getTime()
      const todayTimestamp = new Date(this.today).getTime()
      const validation = entryTimestamp >= todayTimestamp
      this.isFormValid = validation
      this.isDateValid = validation
    },
  },
})
</script>
