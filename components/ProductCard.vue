<template>
  <div class="card">
    <div class="card--container w-full rounded-xl bg-white shadow-xl">
      <NuxtLink :to="metadata.path" :title="metadata.title">
        <div
          class="card--header aspect-w-16 aspect-h-14 rounded-t-xl bg-gray-200"
        >
          <ResponsiveImage
            img-class="object-cover"
            :picture="metadata.image"
            :is-thumbnail="true"
          />
        </div>
      </NuxtLink>
      <div class="card--content px-8 pb-12">
        <div class="card--content__inner">
          <h2 class="text-2xl font-heading font-semibold">
            <NuxtLink :to="metadata.path">
              <span v-if="isFlyTirol">{{ metadata.title }}</span>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <span v-if="isWhiteCloud" v-html="metadata.title"></span>
            </NuxtLink>
          </h2>
          <ProductDetails
            :location="metadata.location"
            :duration="metadata.duration"
            :praxis="metadata.praxis"
            :flight-duration="metadata.flightDuration"
            :theorie="metadata.theorie"
            :price="price"
            :dates="course?.dates"
            :is-show-date="isFlyTirol ? isCourse : false"
          />
          <p v-if="!isCourse" class="text-gray-600 mt-4">
            {{ metadata.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-end pr-8 z-10">
      <div class="transform -translate-y-2/4">
        <NuxtLink
          :to="metadata.path"
          class="btn-primary btn--large"
          :title="isFlyTirol ? metadata.title : 'Info und buchen'"
        >
          <span v-if="isFlyTirol">Mehr erfahren</span>
          <span v-else>Info und buchen</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// TODO NUXT3
// eslint-disable-next-line import/named
import { computed, defineProps, ref, watchEffect } from 'vue'
import ProductDetails from './ProductDetails.vue'
import ResponsiveImage from './ResponsiveImage.vue'
import { useShopifyCart } from '~/composable/useShopifyCart'
import { useData } from '~/composable/useData'
import { usePage } from '~/composable/usePage'

const props = defineProps({ path: { type: String, required: true } })
const { products, getCourse } = useShopifyCart()
const { isFlyTirol, isWhiteCloud } = useData()
const { isCourse, getMetadata } = usePage()
const metadata = getMetadata(props.path)

const course = ref({})
const price = computed(() =>
  isFlyTirol ? course.value?.price : metadata.price
)

watchEffect(() => {
  if (products.value.length >= 1) {
    course.value = getCourse(metadata.category, metadata.slug)
  }
})
</script>
