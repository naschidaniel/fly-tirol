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
              <IconOutlineCheck class="text-green-600 h-6 w-6" />
            </span>
            <span v-else>
              <IconOutlineX class="text-red-400 h-6 w-6" />
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
              <IconOutlineCheck class="text-green-600 h-6 w-6" />
            </span>
            <span v-else>
              <IconOutlineX class="text-red-400 h-6 w-6" />
            </span>
            {{ product }}
          </button>
        </div>
      </div>
    </div>
    <div
      v-for="month in calenderFiltered"
      :key="month.monthLong"
      class="mb-6 min-w-full text-center"
    >
      <h3>{{ month.monthLong }}</h3>
      <div class="mt-4 md:flex md:flex-wrap md:justify-center">
        <div
          v-for="entry in month.courses"
          :key="`${entry.productId} ${entry.value}`"
          class="m-2 p-4 border-2 rounded-lg md:w-2/3 lg:w-1/3 xl:w-1/4 text-left"
        >
          <span
            class="inline-flex items-center justify-center px-2 py-1 leading-none text-gray-900 rounded-full"
            :class="
              entry.category === 'Ausbildung'
                ? 'bg-green-300'
                : entry.category === 'Fortbildung'
                  ? 'bg-blue-100'
                  : entry.category === 'Sicherheitstrainings'
                    ? 'bg-blue-300'
                    : entry.category === 'Reisen'
                      ? 'bg-red-200'
                      : 'bg-gray-100'
            "
            >{{ entry.category }}</span
          >
          <h4>
            <NuxtLink :to="`${entry.href}`">{{ entry.name }}</NuxtLink>
          </h4>
          <div class="mb-2">
            <p>{{ entry.value }}</p>
            <div class="flex justify-end mt-2">
              <NuxtLink
                :to="entry.href"
                :title="`${entry.name} - ${entry.value}`"
                class="cursor-pointer btn-primary"
              >
                Mehr erfahren
              </NuxtLink>
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

<script setup lang="ts">
import { useCalender } from '@/composable/useCalender'
import IconOutlineCheck from '@/components/icon/IconOutlineCheck.vue'
import IconOutlineX from '@/components/icon/IconOutlineX.vue'

const {
  calenderCategoriesAvailable,
  calenderProductsAvailable,
  calenderProductsChecked,
  calenderCategoriesChecked,
  setCheckedCategories,
  setCheckedProducts,
  calenderFiltered,
  initCalender,
  resetFilter,
  isCalenderFiltered,
} = useCalender()
initCalender()
</script>
