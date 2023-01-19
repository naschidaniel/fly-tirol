<template>
  <div
    id="book-product"
    class="mt-4 w-full border-2 rounded-lg bg-gray-100 px-4 pb-2"
  >
    <h2 v-if="isCourse">Kurs Buchen</h2>
    <h2 v-else>Wähle deinen Flug</h2>
    <h3>Details zum Angebot</h3>
    <ProductDetails
      :location="metadata?.location"
      :duration="metadata?.duration"
      :praxis="metadata?.praxis"
      :flight-duration="metadata?.flightDuration"
      :theorie="metadata?.theorie"
      :price="formatPrice(product?.price)"
      :dates="product?.total_dates"
      :is-show-date="false"
    />
    <div class="mt-4 flex flex-wrap">
      <div class="w-full p-2">
        <Alert class="mb-4 bg-white">
          <div class="my-2">
            Wähle im Auswahlfeld den für dich passenden<span v-if="isCourse"
              >&nbsp; Kurs und falls vorhanden die nötigen Zusatzoptionen.</span
            ><span v-else>&nbsp; Tandemflug.</span>
          </div>
        </Alert>
      </div>
    </div>
    <div class="block">
      <label for="select-course"
        ><span class="text-gray-700"
          >Wähle deinen gewünschten <span v-if="isCourse"> Kurs</span
          ><span v-else> Tandemflug</span></span
        ></label
      >
      <select
        v-for="variant in product?.variants"
        id="select-course"
        :key="variant.id"
        class="mt-2 w-full text-base block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option disabled :value="[]" selected>Bitte auswählen</option>
        <option
          v-for="option in variant.options"
          :key="option.value"
          :value="option"
          :selected="
            selectedVariants.filter((v) => v.value === option.value).length > 0
          "
          @click="
            updateSelectedVariants(
              variant,
              formatProductVariantOptionTitle(option)
            )
          "
        >
          {{ formatProductVariantOptionTitle(option) }}
        </option>
      </select>
    </div>
    <button
      :aria-label="`Book ${pickedProduct}`"
      class="mt-6 btn-primary w-full"
      :class="!isProductSelected ? 'btn--disabled' : ''"
      :disabled="!isProductSelected"
      @click.prevent=""
    >
      <span v-if="isProductSelected">Buchen</span>
      <span v-else>Triff eine Auswahl im Dropdownmenü</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, Ref, watchEffect, ComputedRef } from 'vue'
import Alert from '@/components/Alert.vue'
import ProductDetails from '@/components/ProductDetails.vue'
import { Product } from '@/types/Product'
import { ProductVariant } from '@/types/ProductVariant'
import { ProductVariantOption } from '@/types/ProductVariantOption'
import { useFormat } from '@/composable/useFormat'
import { usePage } from '@/composable/usePage'
import { useBackend } from '@/composable/useBackend'
import { useCalender } from '~~/composable/useCalender'

const { page, isCourse, getMetadata } = usePage()
const { formatPrice, formatProductVariantOptionTitle } = useFormat()
const { selectedDateString } = useCalender()
const { getProduct, updateCart } = useBackend()

const pickedProduct: Ref<ProductVariant> = ref({} as ProductVariant)
const metadata = getMetadata(page.value.path)
const selectedVariants: Ref<ProductVariantOption[]> = ref([])

const isProductSelected = computed(
  () => selectedVariants.value.length >= product.value?.variants?.length
)

const product: ComputedRef<Product> = computed(() =>
  getProduct(metadata?.category, metadata?.slug)
)

watchEffect(() => {
  if (product.value) {
    initSelectedVariants()
  }
  if (selectedDateString.value) {
    for (const variant of product.value.variants) {
      if (!variant.date_variant) continue
      const value = variant.options.find(
        (o) => o.value === selectedDateString.value
      )
      if (value !== undefined) updateSelectedVariants(variant, value.value)
    }
  }
})

function initSelectedVariants(): void {
  if (product.value?.variants === undefined) return
  for (const variant of product.value.variants) {
    if (selectedDateString.value !== undefined || variant.date_variant) continue
    updateSelectedVariants(
      variant,
      selectedDateString.value ?? variant.options[0].value
    )
  }
}

function updateSelectedVariants(variant: ProductVariant, value: string): void {
  const newValue = variant.options.find((o) => o.value === value)
  if (newValue === undefined) return
  const selectedVariantsIndex = selectedVariants.value.findIndex(
    (o) => o.product_variant === newValue?.product_variant
  )
  if (selectedVariantsIndex !== -1) {
    selectedVariants.value.splice(selectedVariantsIndex, 1)
  }
  selectedVariants.value.push(newValue)
}

function addProduct() {
  updateCart(
    JSON.stringify({
      product: product.value,
      selected_variants: selectedVariants.value,
      quantity: 1,
      comment: '',
    })
  )
}
</script>
