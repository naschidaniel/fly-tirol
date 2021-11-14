<template>
  <div class="nuxt-content">
    <div class="mb-4 flex flex-inline-between">
      <div class="w-1/3">
        <h2>Kategorien</h2>
        <div
          v-for="categorie in calenderCategoriesAvailable"
          :key="categorie"
          class="inline"
        >
          <span
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
              cursor-pointer
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
          </span>
        </div>
      </div>
      <div class="w-2/3">
        <h2>Produkte</h2>
        <div
          v-for="product in calenderProductsAvailable"
          :key="product"
          class="inline"
        >
          <span
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
              cursor-pointer
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
          </span>
        </div>
      </div>
    </div>
    <div class="mt-16 flex flex-wrap justify-center">
      <div
        v-for="entry in calenderFiltered"
        :key="entry.id"
        class="m-2 p-4 border-2 rounded-lg w-1/4"
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
        <h3>
          <nuxt-link :to="`${entry.productType.toLowerCase()}/${entry.slug}`">{{
            entry.title
          }}</nuxt-link>
        </h3>

        <div class="mb-2 flex justify-between">
          {{ entry.dateString }}
          <button
            class="cursor-pointer btn-primary"
            @click.prevent="bookProduct(entry.id)"
          >
            Buchen
          </button>
        </div>
      </div>
      <div v-if="!calenderFiltered.length >= 1">
        <button class="btn-primary" @click="resetFilter()">
          Filter zurücksetzen
        </button>
      </div>
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
      setCheckedCategories,
      setCheckedProducts,
      resetFilter,
    }
  },
})
</script>
