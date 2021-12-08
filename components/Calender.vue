<template>
  <div class="nuxt-content">
    <div class="mb-16 mb-4 md:flex md:flex-inline-between">
      <div class="md:w-1/3">
        <h2>Kategorien</h2>
        <div
          v-for="category in calenderCategoriesAvailable"
          :key="category"
          class="inline"
        >
          <button
            :aria-label="`Set Product Filter for ${category}`"
            class="inline-flex items-center justify-center px-2 py-1 mr-2 mb-2 leading-none text-gray-900 bg-gray-100 rounded-full"
            @click="setCheckedCategories(category)"
          >
            <span v-if="calenderCategoriesChecked.includes(category)">
              <OutlineCheckIcon class="text-green-600" />
            </span>
            <span v-else>
              <OutlineXIcon class="text-red-400" />
            </span>
            {{ category }}
          </button>
        </div>
      </div>
      <div class="md:w-2/3">
        <h2>Produkte</h2>
        <div
          v-for="product in calenderProductsAvailable"
          :key="product"
          class="inline"
        >
          <button
            :aria-label="`Set Product Filter for ${product}`"
            class="inline-flex items-center justify-center px-2 py-1 mr-2 mb-2 leading-none text-gray-900 bg-gray-100 rounded-full"
            @click="setCheckedProducts(product)"
          >
            <span v-if="calenderProductsChecked.includes(product)">
              <OutlineCheckIcon class="text-green-600" />
            </span>
            <span v-else>
              <OutlineXIcon class="text-red-400" />
            </span>
            {{ product }}
          </button>
        </div>
      </div>
    </div>
    <div
      v-for="(course, month) in calenderFiltered"
      :key="month"
      class="mb-6 min-w-full text-center"
    >
      <h3>{{ month }}</h3>
      <div class="mt-4 md:flex md:flex-wrap md:justify-center">
        <div
          v-for="entry in course"
          :key="entry.id"
          class="m-2 p-4 border-2 rounded-lg md:w-2/3 lg:w-1/3 xl:w-1/4 text-left"
        >
          <span
            class="inline-flex items-center justify-center px-2 py-1 leading-none text-gray-900 rounded-full cursor-pointer"
            :class="
              entry.productType === 'Ausbildung'
                ? 'bg-green-300'
                : entry.productType === 'Fortbildung'
                ? 'bg-blue-100'
                : entry.productType === 'Sicherheitstrainings'
                ? 'bg-blue-300'
                : entry.productType === 'Reisen'
                ? 'bg-red-200'
                : 'bg-gray-100'
            "
            @click="setCheckedProducts(product)"
            >{{ entry.productType }}</span
          >
          <h4>
            <nuxt-link
              :to="`${entry.productType.toLowerCase()}/${entry.slug}`"
              >{{ entry.productTitle }}</nuxt-link
            >
          </h4>

          <div v-if="entry.variants.length >= 2" class="mb-2">
            <p>{{ entry.startDay }}, {{ entry.dateString }}</p>
            <div class="flex mt-2">
              <select
                class="text-sm block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                @change="updateSelectedProduct(entry.id, entry.month, $event)"
              >
                <option
                  v-for="option in entry.variants"
                  :key="option.id"
                  :value="option.id"
                  :selected="entry.selectedId === option.id"
                >
                  {{ option.option }}
                </option>
              </select>
            </div>
            <div class="flex justify-end mt-2">
              <button
                :aria-label="`Book ${entry.productTitle} - ${entry.optionTitle}`"
                class="cursor-pointer btn-primary"
                @click.prevent="
                  bookProduct(entry.selectedId, { customAttributes: [] })
                "
              >
                Buchen
              </button>
            </div>
          </div>
          <div v-else class="mb-2">
            <p>{{ entry.optionTitle }}</p>
            <div class="flex justify-end mt-2">
              <button
                :aria-label="`Book ${entry.productTitle} - ${entry.optionTitle}`"
                class="cursor-pointer btn-primary"
                @click.prevent="bookProduct(entry.id, { customAttributes: [] })"
              >
                Buchen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isCalenderFiltered" class="text-center">
      <button
        aria-label="Reset filter"
        class="btn-primary"
        @click="resetFilter()"
      >
        Filter zurücksetzen
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useShopifyCalender } from '~/composable/useShopifyCalender'
import { useShopifyCart } from '~/composable/useShopifyCart'
import OutlineCheckIcon from '~/components/icons/OutlineCheckIcon.vue'
import OutlineXIcon from '~/components/icons/OutlineXIcon.vue'

export default defineComponent({
  name: 'Calender',
  components: { OutlineCheckIcon, OutlineXIcon },
  setup() {
    const { bookProduct } = useShopifyCart()
    const {
      calenderFiltered,
      calenderProductsAvailable,
      calenderCategoriesAvailable,
      calenderProductsChecked,
      calenderCategoriesChecked,
      isCalenderFiltered,
      setCheckedCategories,
      setCheckedProducts,
      resetFilter,
      updateSelectedProduct,
    } = useShopifyCalender()
    return {
      bookProduct,
      calenderFiltered,
      calenderProductsAvailable,
      calenderCategoriesAvailable,
      calenderProductsChecked,
      calenderCategoriesChecked,
      isCalenderFiltered,
      setCheckedCategories,
      setCheckedProducts,
      resetFilter,
      updateSelectedProduct,
    }
  },
})
</script>
