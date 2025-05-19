<template>
  <div class="flex flex-wrap">
    <div
      v-if="isCourse"
      class="w-full lg:w-1/2"
    >
      <h2>Termine</h2>
      <div v-if="calenderFiltered.length == 0">
        Auf Anfrage
      </div>
      <div
        v-else
        class="flex flex-wrap"
      >
        <div
          v-for="month in calenderFiltered"
          :key="month.monthLong"
          class="p-1"
        >
          <h3>{{ month.monthLong }}</h3>
          <div
            v-for="course in month.courses"
            :key="course.value"
          >
            <button
              aria-label="select Date"
              class="inline-flex items-center justify-center px-2 py-1 mr-2 mb-2 leading-none text-gray-900 bg-gray-100 rounded-full border"
              :title="`${course.value} buchen`"
              :class="course.value === selectedDateString ? 'border-brand' : ''"
              @click="setOptionDateString(course.value)"
            >
              <span
                class="inline-flex items-center justify-center p-2 leading-none text-gray-900 rounded-full"
                :class="
                  !course.is_available
                    ? 'bg-red-300'
                    : 'bg-green-300'
                "
              /> <span class="px-2">{{ course.value }}</span>
            </button>
          </div>
        </div>
      </div>
      <div
        v-if="calenderFiltered.length != 0"
        class="mt-10"
      >
        <span
          class="inline-flex items-center justify-center p-2 leading-none text-gray-900 rounded-full bg-red-300"
        >ausgebucht</span> <span
          class="inline-flex items-center justify-center p-2 leading-none text-gray-900 rounded-full bg-green-300 ml-3"
        >verfügbar</span>
      </div>
    </div>
    <div class="w-full lg:px-4 lg:mt-0 lg:w-1/2">
      <ProductVariants :is-course="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductVariants from '@/components/ProductVariants.vue'
import { useCalender } from '@/composable/useCalender'
import { usePage } from '@/composable/usePage'
import { useBackend } from '@/composable/useBackend'

const { isCourse, page } = usePage()
const { initProduct } = useBackend()
const { calenderFiltered, initCalender, selectedDateString } = useCalender()

initProduct(page.value.category, page.value.slug)
onMounted(() => {
  initCalender(page.value.path)
})

function setOptionDateString(optionDateString: string) {
  selectedDateString.value = optionDateString
  if (window?.innerWidth <= 768) {
    // @ts-expect-error TODO document is possible null
    document
      .getElementById('book-product')
      .scrollIntoView({ block: 'start', behavior: 'smooth' })
  }
}
</script>
