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
            :prices="prices"
            :page="page"
            :dates="dates"
            :is-show-date="isCourse"
          />
          <p v-if="!isCourse" class="text-gray-600">
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
import { computed, defineComponent, unref } from '@vue/composition-api'
import ProductDetails from './ProductDetails.vue'
import ResponsiveImage from './ResponsiveImage.vue'
import { useData } from '~/composable/useData'
import { useShop } from '~/composable/useShop'

export default defineComponent({
  components: {
    ProductDetails,
    ResponsiveImage,
  },
  props: { page: { type: Object, required: true } },
  setup(props) {
    const { routeName } = useData()
    const { products } = useShop()
    const isCourse = !props.page.path.includes('/tandemfliegen')
    const course = computed(
      () =>
        unref(products).filter(
          (s) =>
            s.isShowProduct &&
            s.productType.toLowerCase() === routeName &&
            s.slug === props.page.slug
        ) ?? []
    )
    const dates = computed(() => unref(course)?.length)
    const prices = computed(() => {
      return [...new Set(unref(course)?.flatMap((v) => v.productPrices))]
    })
    return { dates, isCourse, prices }
  },
})
</script>
