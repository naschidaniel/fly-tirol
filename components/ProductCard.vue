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
          <h2 class="text-2xl font-heading font-semibold">
            <nuxt-link :to="page.path"
              ><span v-if="isFlyTirol">{{ page.title }}</span
              ><span v-if="isWhiteCloud" v-html="page.title"></span
            ></nuxt-link>
          </h2>
          <ProductDetails
            :prices="prices"
            :page="page"
            :dates="dates"
            :is-show-date="isCourse"
          />
          <p v-if="!isCourse" class="text-gray-600 mt-4">
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
          :title="isFlyTirol ? page.title : 'Info und buchen'"
        >
          <span v-if="isFlyTirol">Mehr erfahren</span>
          <span v-else>Info und buchen</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, unref } from '@vue/composition-api'
import ProductDetails from './ProductDetails.vue'
import ResponsiveImage from './ResponsiveImage.vue'
import { useNavigation } from '~/composable/useNavigation'
import { useShopifyCart } from '~/composable/useShopifyCart'
import { useData } from '~/composable/useData'

export default defineComponent({
  components: {
    ProductDetails,
    ResponsiveImage,
  },
  props: { page: { type: Object, required: true } },
  setup(props) {
    const { isFlyTirol, isWhiteCloud } = useData()
    const { routeName } = useNavigation()
    const { products } = useShopifyCart()
    const isCourse = isWhiteCloud
      ? false
      : !props.page.path.includes('/tandemfliegen')
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
    const prices = isWhiteCloud
      ? [props.page.price]
      : [...new Set(unref(course)?.flatMap((v) => v.productPrices))]
    return { dates, isCourse, isFlyTirol, isWhiteCloud, prices }
  },
})
</script>
