<template>
  <div class="my-auto p-1 md:p-4 mt-4 w-full lg:w-1/2">
    <div v-for="(course, month) in productVariants" :key="month">
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
          {{ entry.startDay }}, {{ entry.variantTitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useData } from '~/composable/useData'
import { useShop } from '~/composable/useShop'
import { formatPrice } from '~/util/formatPrice'

export default defineComponent({
  name: 'ProductVariants',
  setup() {
    const { routeName, routeSlug } = useData()
    const { bookProduct, filterCalender } = useShop()
    return { bookProduct, filterCalender, routeName, routeSlug }
  },
  computed: {
    productVariants() {
      const category = this.routeName.split('-')[0]
      return this.filterCalender([category], { slug: [this.routeSlug] })
    },
  },
  methods: {
    formatPrice,
  },
})
</script>
