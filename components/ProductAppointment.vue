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
          class="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
        @click.prevent="bookFlight()"
      >
        Buche deinen Wunschtermin
        <span v-if="isDateValid"
          >&nbsp; {{ formatDate(selectedDateTimestamp) }}</span
        >
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useFormat } from '~/composable/useFormat'
import { usePage } from '~/composable/usePage'
import { products, useShopifyCart } from '~/composable/useShopifyCart'

const { formatDate } = useFormat()
const { bookProduct } = useShopifyCart()
const { page } = usePage()

const selectedDate = ref('')
const isFormValid = ref(true)
const isDateValid = ref(false)

const productId = computed(
  () => products.value.find((p) => p.slug === page.value.slug)?.id
)

const today = computed(() => new Date().toISOString().split('T')[0])

const selectedDateTimestamp = computed(() =>
  selectedDate.value !== '' ? new Date(selectedDate.value) : ''
)

function bookFlight() {
  checkDate()
  if (isDateValid.value) {
    bookProduct(productId.value, {
      customAttributes: [
        {
          key: 'Wunschtermin nach Absprache',
          value: formatDate(selectedDateTimestamp.value),
        },
      ],
    })
  }
}
function checkDate() {
  const entryTimestamp = new Date(selectedDate.value).getTime()
  const todayTimestamp = new Date(today.value).getTime()
  isFormValid.value = entryTimestamp >= todayTimestamp
  isDateValid.value = entryTimestamp >= todayTimestamp
}
</script>
