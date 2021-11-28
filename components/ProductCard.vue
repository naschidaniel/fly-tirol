<template>
  <div class="card">
    <div class="card--container w-full rounded-xl bg-white shadow-xl">
      <nuxt-link :to="page.path" :title="page.title">
        <div
          class="card--header aspect-w-16 aspect-h-14 rounded-t-xl bg-gray-200"
        >
          <ResponsiveImage
            img-class="object-cover"
            :picture="page.image"
            :is-thumbnail="true"
          />
        </div>
      </nuxt-link>
      <div class="card--content px-8 pb-12">
        <div class="card--content__inner">
          <h2 class="text-2xl font-heading font-semibold mb-1">
            <nuxt-link :to="page.path">{{ page.title }}</nuxt-link>
          </h2>
          <ProductDetails
            :location="page.location"
            :prices="prices"
            :praxis="page.praxis"
            :theorie="page.theorie"
            :dates="dates"
          />
          <p v-if="isTandemflight" class="text-gray-600">
            {{ page.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-end pr-8 z-10">
      <div class="transform -translate-y-2/4">
        <nuxt-link
          :to="page.path"
          class="btn-primary btn--large"
          :title="page.title"
        >
          Mehr erfahren
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import ProductDetails from './ProductDetails.vue'
import ResponsiveImage from './ResponsiveImage.vue'
import { useShop } from '~/composable/useShop'
import { formatPrice } from '~/util/formatPrice'

export default defineComponent({
  components: {
    ProductDetails,
    ResponsiveImage,
  },
  props: { page: { type: Object, required: true } },
  setup() {
    const { getCourse } = useShop()
    return { getCourse }
  },
  computed: {
    isTandemflight() {
      return this.page.path.includes('/tandemfliegen')
    },
    course() {
      return this.getCourse(this.page.slug)
    },
    prices() {
      const price = this.course?.variants.map((v) => parseFloat(v.price))
      return [...new Set(price)]
    },
    dates() {
      if (this.isTandemflight) {
        return undefined
      }
      return this.course?.variants?.length
    },
  },
  methods: {
    formatPrice,
  },
})
</script>
