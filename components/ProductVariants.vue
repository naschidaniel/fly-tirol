<template>
  <div
    id="book-product"
    class="mt-4 w-full border-2 rounded-lg bg-gray-100 px-4 pb-2"
  >
    <h2 v-if="isCourse">Kurs Buchen</h2>
    <h2 v-else>Wähle deinen Flug</h2>
    <h3>Details zum Angebot</h3>
    <ProductDetails
      :page="page"
      :prices="prices"
      :dates="undefined"
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
        id="select-course"
        v-model="selectedProductOptions"
        class="mt-2 w-full text-base block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option disabled :value="[]">Bitte auswählen</option>
        <option
          v-for="option in dates"
          :key="option.id"
          :value="option.variants"
        >
          {{ option.optionDateString }}
        </option>
      </select>
    </div>
    <div v-if="selectedProductOptions.length >= 2" class="block mt-4">
      <span class="text-gray-700">Wähle eine gewünschte Option</span>
      <div v-for="variant in selectedProductOptions" :key="variant.id">
        <input
          :id="variant.id"
          v-model="pickedProduct"
          type="radio"
          :value="variant"
        />
        <label :for="variant.id"
          >{{ formatPrice(variant.price) }} – {{ variant.option }}</label
        >
      </div>
    </div>
    <button
      :aria-label="`Book ${pickedProduct}`"
      class="mt-6 btn-primary w-full"
      :class="!isProductSelected ? 'btn--disabled' : ''"
      :disabled="!isProductSelected"
      @click.prevent="bookProduct(pickedProduct.id, { customAttributes: [] })"
    >
      <span v-if="isProductSelected && isCourse"
        >{{ pickedProduct.productTitle }} am
        {{ pickedProduct.title }} buchen</span
      >
      <span v-else-if="isProductSelected && !isCourse"
        >{{ pickedProduct.productTitle }} {{ pickedProduct.title }} buchen</span
      >
      <span v-else>Triff eine Auswahl im Dropdownmenü</span>
    </button>
  </div>
</template>

<script setup>
import {
  computed,
  defineProps,
  ref,
  unref,
  watchEffect,
} from 'vue'
import Alert from '@/components/Alert.vue'
import ProductDetails from '@/components/ProductDetails.vue'
import { useNavigation } from '~/composable/useNavigation'
import { useFormat } from '~/composable/useFormat'
import { useShopifyCart } from '~/composable/useShopifyCart'
import { useMetaTags } from '~/composable/useMetaTags'

defineProps({
  isCourse: { type: Boolean, required: true },
})
const { page } = useMetaTags()
const { routeName, routeSlug } = useNavigation()
const { formatPrice } = useFormat()
const { bookProduct, products, selectedOptionDateString } = useShopifyCart()

const selectedProductOptions = ref([])
const pickedProduct = ref([])

selectedOptionDateString.value = ''
const category = routeName.split('-')[0]

const dates = computed(() => [
  ...new Set(
    unref(products).filter(
      (s) =>
        s.isShowProduct &&
        s.productType.toLowerCase() === category &&
        s.slug === routeSlug
    )
  ),
])
const isProductSelected = computed(
  () => selectedProductOptions.value.length !== 0
)

const prices = computed(() => [
  ...new Set(
    unref(products)
      .filter(
        (s) => s.productType.toLowerCase() === category && s.slug === routeSlug
      )
      .flatMap((c) => c.productPrices)
  ),
])

function setPickedCourse() {
  pickedProduct.value = selectedProductOptions.value[0]
  selectedOptionDateString.value =
    selectedProductOptions.value[0]?.optionDateString
}

function setPickedProductOption() {
  selectedProductOptions.value = dates.value.find(
    (d) => d.optionDateString === selectedOptionDateString.value
  )?.variants
}

watchEffect(() => {
  if (selectedOptionDateString.value !== '') {
    setPickedProductOption()
  }
  if (selectedProductOptions.value?.length !== 0) {
    setPickedCourse()
  }
})
</script>
