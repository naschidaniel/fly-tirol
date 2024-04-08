<template>
  <div class="w-full lg:w-5/6 border-2 rounded-lg bg-gray-100 px-4 pb-2">
    <h3>Details zum {{ metadata.title }}</h3>
    <ProductDetails
      :location="metadata.location"
      :price="formatPrice(product.price)"
      :excluded="metadata.excluded"
      :is-show-date="false"
    />
    <div class="grid grid-cols-1 gap-6 mt-3">
      <label class="block">
        <span :class="isFormValid ? 'text-gray-700' : 'text-red-600'">Wähle deinen Wunschtermin</span>
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
        >
      </label>
      <label class="block">Anzahl
        <select
          v-model="quantity"
          name="quantity"
          class="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label>
      <button
        aria-label="Book the Date"
        class="btn-primary text-sm md:text-base"
        :class="isFormValid && isDateValid ? '' : 'btn--disabled'"
        @click.prevent="bookFlight()"
      >
        Buche deinen Wunschtermin
        <span v-if="isDateValid">&nbsp;
          {{
            formatDate(
              selectedDateTimestamp === '' ? undefined : selectedDateTimestamp,
            )
          }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import { useFormat } from '@/composable/useFormat'
import { usePage } from '@/composable/usePage'
import { useBackend } from '@/composable/useBackend'
import type { Product } from '@/types/shop/models/Product'
import ProductDetails from '@/components/ProductDetails.vue'

const { updateCart, getProduct } = useBackend()

const { formatDate, formatPrice } = useFormat()
const { page, getMetadata } = usePage()

const metadata = getMetadata(page.value.path)
const selectedDate: Ref<string> = ref('')
const quantity: Ref<Number> = ref(1)
const isFormValid: Ref<boolean> = ref(true)
const isDateValid: Ref<boolean> = ref(false)

const product: ComputedRef<Product> = computed(() =>
  getProduct(metadata?.category, metadata?.slug),
)

const today: ComputedRef<string> = computed(
  () => new Date().toISOString().split('T')[0],
)

const selectedDateTimestamp: ComputedRef<Date | ''> = computed(() =>
  selectedDate.value !== '' ? new Date(selectedDate.value) : '',
)

function bookFlight(): void {
  checkDate()
  if (isDateValid.value) {
    updateCart(
      JSON.stringify({
        product: product.value,
        selected_variants: [],
        quantity: quantity.value,
        comment: `Wunschdatum: ${formatDate(
          selectedDateTimestamp.value === ''
            ? undefined
            : selectedDateTimestamp.value,
        )}`,
      }),
    )
  }
}
function checkDate() {
  const entryTimestamp = new Date(selectedDate.value).getTime()
  const todayTimestamp = new Date(today.value).getTime()
  isFormValid.value = entryTimestamp >= todayTimestamp
  isDateValid.value = entryTimestamp >= todayTimestamp
}
</script>
