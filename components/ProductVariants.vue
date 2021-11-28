<template>
  <div class="flex flex-wrap">
    <div v-if="isCourse" class="w-full lg:w-1/2">
      <h2>Termine</h2>
      <div class="flex flex-wrap">
        <div
          v-for="(course, month) in productCalender"
          :key="month"
          class="p-1"
        >
          <h3>{{ month }}</h3>
          <div v-for="entry in course" :key="entry.id">
            <div
              class="
                inline-flex
                items-center
                justify-center
                px-2
                py-1
                mr-2
                mb-2
                leading-none
                text-gray-900
                bg-gray-100
                rounded-full
              "
            >
              {{ entry.optionTitle }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        mt-4
        w-full
        lg:mt-0 lg:w-1/2
        border-2
        rounded-lg
        bg-gray-100
        px-4
        pb-2
      "
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
                >&nbsp; Kurs und falls vorhanden die nötigen
                Zusatzoptionen.</span
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
          v-model="selectedCourse"
          class="
            mt-2
            w-full
            text-base
            block
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
        >
          <option disabled :value="[]">Bitte auswählen</option>
          <option
            v-for="option in dates"
            :key="option.id"
            :value="option.variants"
          >
            {{ option.optionTitle }}
          </option>
        </select>
      </div>
      <div v-if="selectedCourse.length >= 2" class="block mt-4">
        <span class="text-gray-700">Wähle eine gewünschte Option</span>
        <div v-for="variant in selectedCourse" :key="variant.id">
          <input
            :id="variant.id"
            v-model="pickedCourse"
            type="radio"
            :value="variant"
          />
          <label :for="variant.id"
            >{{ formatPrice(variant.price) }} – {{ variant.option }}</label
          >
        </div>
      </div>
      <button
        :aria-label="`Book ${pickedCourse}`"
        class="mt-6 btn-primary w-full"
        :class="!isCourseSelected ? 'btn--disabled' : ''"
        :disabled="!isCourseSelected"
        @click.prevent="bookProduct(pickedCourse.id, { customAttributes: [] })"
      >
        <span v-if="isCourseSelected"
          >{{ pickedCourse.productTitle }} am
          {{ pickedCourse.title }} buchen</span
        >
        <span v-else>Triff eine Auswahl im Dropdownmenü</span>
      </button>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, unref } from '@vue/composition-api'
import Alert from '@/components/Alert.vue'
import ProductDetails from '@/components/ProductDetails.vue'
import { useData } from '~/composable/useData'
import { useShop } from '~/composable/useShop'
import { formatPrice } from '~/util/formatPrice'

export default defineComponent({
  name: 'ProductVariants',
  components: { Alert, ProductDetails },
  props: {
    isCourse: { type: Boolean, required: true },
    page: { type: Object, required: true },
  },
  setup() {
    const { routeName, routeSlug } = useData()
    const { bookProduct, filterCalender, products } = useShop()
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
    const prices = computed(() => [
      ...new Set(
        unref(products)
          .filter(
            (s) =>
              s.productType.toLowerCase() === category && s.slug === routeSlug
          )
          .flatMap((c) => c.productPrices)
      ),
    ])
    const productCalender = computed(() =>
      filterCalender([category], { slug: [routeSlug] })
    )

    return {
      bookProduct,
      dates,
      productCalender,
      prices,
    }
  },
  data() {
    return {
      selectedCourse: [],
      pickedCourse: [],
    }
  },
  computed: {
    isCourseSelected() {
      return this.selectedCourse.length !== 0
    },
  },
  watch: {
    selectedCourse() {
      this.setCheckedCourse()
    },
  },
  methods: {
    formatPrice,
    setCheckedCourse() {
      this.pickedCourse = this.selectedCourse[0]
    },
  },
})
</script>
