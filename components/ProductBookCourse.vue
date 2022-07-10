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
            <button
              aria-label="select Date"
              class="inline-flex items-center justify-center px-2 py-1 mr-2 mb-2 leading-none text-gray-900 bg-gray-100 rounded-full border"
              :title="`${entry.optionDateString} buchen`"
              :class="
                entry.optionDateString === selectedOptionDateString
                  ? 'border-brand'
                  : ''
              "
              @click="setOptionDateString(entry.optionDateString)"
            >
              {{ entry.optionDateString }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full lg:px-4 lg:mt-0 lg:w-1/2">
      <ProductVariants :is-course="true" />
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import ProductVariants from '@/components/ProductVariants.vue'
import { useMedia } from '~/composable/useMedia'
import { useNavigation } from '~/composable/useNavigation'
import { useShopifyCalender } from '~/composable/useShopifyCalender'
import { useShopifyCart } from '~/composable/useShopifyCart'

defineProps({
  isCourse: { type: Boolean, required: true },
})
const { getScreenSize } = useMedia()
const { routeName, routeSlug } = useNavigation()
const { filterCalender } = useShopifyCalender()
const { selectedOptionDateString } = useShopifyCart()

const category = routeName.split('-')[0]
const productCalender = computed(() =>
  filterCalender([category], { slug: [routeSlug] })
)

function setOptionDateString(optionDateString) {
  selectedOptionDateString.value = optionDateString
  const screenSize = getScreenSize()
  if (['2xs', 'xs', 'sm', 'md'].includes(screenSize)) {
    document
      .getElementById('book-product')
      .scrollIntoView({ block: 'start', behavior: 'smooth' })
  }
}
</script>
