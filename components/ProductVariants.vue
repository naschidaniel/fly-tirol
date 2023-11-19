<template>
  <div
    id="book-product"
    class="mt-4 w-full border-2 rounded-lg bg-gray-100 px-4 pb-2"
  >
    <h2 v-if="isService">Service Buchen</h2>
    <h2 v-else-if="isCourse">Kurs Buchen</h2>
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
      :is-show-agb="true"
    />
    <div class="mt-4 flex flex-wrap">
      <div class="w-full p-2">
        <Alert class="mb-4 bg-white">
          <div class="my-2">
            Wähle im Auswahlfeld den für dich passenden
            <span v-if="isService || isCourse"
              >&nbsp; <span v-if="isService">Service</span>
              <span v-else>Kurs</span> und falls vorhanden die nötigen
              Zusatzoptionen.</span
            ><span v-else>&nbsp; Tandemflug.</span>
          </div>
        </Alert>
      </div>
    </div>
    <div class="block">
      <label for="select-course"
        ><span class="text-gray-700"
          >Wähle deinen gewünschten <span v-if="isService"> Service</span
          ><span v-else-if="isCourse"> Kurs</span
          ><span v-else> Tandemflug</span></span
        ></label
      >
      <select
        v-for="variant in product?.variants"
        id="select-course"
        :key="variant.id"
        :value="selectedOptions[variant.name]"
        class="mt-2 w-full text-base block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        @change="
          updateSelectedVariants(
            variant,
            ($event.target as HTMLSelectElement).value,
          )
        "
      >
        <option
          v-for="option in variant.options"
          :key="option.value"
          :value="option.value"
        >
          {{ formatProductVariantOptionTitle(option) }}
        </option>
      </select>
    </div>
    <button
      :aria-label="`Book ${pickedProduct}`"
      class="mt-6 btn-primary w-full"
      @click.prevent="addProduct()"
    >
      <span>Buchen</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import Alert from '@/components/Alert.vue'
import ProductDetails from '@/components/ProductDetails.vue'
import type { Product } from '@/types/Product'
import type { ProductVariant } from '@/types/ProductVariant'
import type { ProductVariantOption } from '@/types/ProductVariantOption'
import { useFormat } from '@/composable/useFormat'
import { usePage } from '@/composable/usePage'
import { useBackend } from '@/composable/useBackend'
import { useCalender } from '~~/composable/useCalender'

const { page, isCourse, isService, getMetadata } = usePage()
const { formatPrice, formatProductVariantOptionTitle } = useFormat()
const { selectedDateString } = useCalender()
const { getProduct, updateCart } = useBackend()

const pickedProduct: Ref<ProductVariant> = ref({} as ProductVariant)
const metadata = getMetadata(page.value.path)
const selectedVariants: Ref<ProductVariantOption[]> = ref([])

const selectedOptions: Ref<{ [key: string]: string | undefined }> = ref({})

const product: ComputedRef<Product> = computed(() =>
  getProduct(metadata?.category, metadata?.slug),
)

watchEffect(() => {
  if (product.value) {
    resetSelectedDateString()
    initSelectedVariants()
  }
  if (selectedDateString.value) {
    for (const variant of product.value.variants) {
      if (!variant.date_variant) continue
      selectedOptions.value[variant.name] = selectedDateString.value
      updateSelectedVariants(variant, selectedDateString.value)
    }
  }
})

function resetSelectedDateString(): void {
  if (
    !product.value?.variants
      ?.flatMap((o) => o.options)
      .map((a) => a.value)
      .includes(selectedDateString.value as string)
  ) {
    selectedDateString.value = undefined
  }
}

function initSelectedVariants(): void {
  if (
    product.value?.variants === undefined ||
    product.value?.variants?.length ===
      Object.keys(selectedOptions.value).length
  )
    return
  for (const variant of product.value.variants) {
    updateSelectedVariants(variant, variant.options[0].value)
  }
}

function updateSelectedVariants(variant: ProductVariant, value: string): void {
  selectedOptions.value[variant.name] = value
  const newValue = variant.options.find((o) => o.value === value)
  if (newValue === undefined) return
  const selectedVariantsIndex = selectedVariants.value.findIndex(
    (o) => o.product_variant === newValue?.product_variant,
  )
  if (selectedVariantsIndex !== -1) {
    selectedVariants.value.splice(selectedVariantsIndex, 1)
  }
  selectedVariants.value.push(newValue)
  if (variant.date_variant) selectedDateString.value = value
}

async function addProduct() {
  await updateCart(
    JSON.stringify({
      product: product.value,
      selected_variants: selectedVariants.value,
      quantity: 1,
      comment: '',
    }),
  )
}
</script>
