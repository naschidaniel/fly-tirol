<template>
  <div class="nuxt-content">
    <div class="mb-16 mb-4 md:flex md:flex-inline-between">
      <div class="md:w-1/3">
        <h2>Kategorien</h2>
        <div
          v-for="categorie in calenderCategoriesAvailable"
          :key="categorie"
          class="inline"
        >
          <button
            :aria-label="`Set Product Filter for ${categorie}`"
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
            @click="setCheckedCategories(categorie)"
          >
            <span v-if="calenderCategoriesChecked.includes(categorie)">
              <OutlineCheckIcon class="text-green-600" />
            </span>
            <span v-else>
              <OutlineXIcon class="text-red-400" />
            </span>
            {{ categorie }}
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
      v-for="(month, year) in calenderFiltered"
      :key="year"
      class="mb-6 min-w-full text-center"
    >
      <h3>{{ year }}</h3>
      <div class="mt-4 md:flex md:flex-wrap md:justify-center">
        <div
          v-for="entry in month"
          :key="entry.id"
          class="
            m-2
            p-4
            border-2
            rounded-lg
            md:w-2/3
            lg:w-1/3
            xl:w-1/4
            text-left
          "
        >
          <span
            class="
              inline-flex
              items-center
              justify-center
              px-2
              py-1
              leading-none
              text-gray-900
              rounded-full
              cursor-pointer
            "
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
              >{{ entry.title }}</nuxt-link
            >
          </h4>

          <div class="mb-2 flex justify-between">
            {{ entry.dateString }}
            <button
              :aria-label="`Book ${entry.title} - {{ entry.dateString }}`"
              class="cursor-pointer btn-primary"
              @click.prevent="bookProduct(entry.id)"
            >
              Buchen
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isCalenderFiltered" class="text-center">
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
import { useShop } from '~/composable/useShop'
import OutlineCheckIcon from '~/components/icons/OutlineCheckIcon.vue'
import OutlineXIcon from '~/components/icons/OutlineXIcon.vue'

export default defineComponent({
  name: 'Calender',
  components: { OutlineCheckIcon, OutlineXIcon },
  setup() {
    const {
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
    } = useShop()
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
    }
  },
})
</script>
