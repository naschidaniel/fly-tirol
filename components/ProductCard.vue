<template>
  <div class="card">
    <div class="card--container w-full rounded-xl bg-white shadow-xl">
      <NuxtLink
        :to="metadata.path"
        :title="metadata.title"
      >
        <div
          class="card--header aspect-w-16 aspect-h-14 rounded-t-xl bg-gray-200"
        >
          <ResponsiveImage
            img-class="object-cover"
            :picture="metadata.image as string"
            :is-thumbnail="true"
          />
        </div>
      </NuxtLink>
      <div class="card--content px-8 pb-12">
        <div class="card--content__inner">
          <h2 class="text-2xl font-heading font-semibold">
            <NuxtLink :to="metadata.path">
              <span>{{ metadata.title }}</span>
            </NuxtLink>
          </h2>
          <ProductDetails
            :bikeandfly="metadata.bikeandfly"
            :location="metadata.location"
            :duration="metadata.duration"
            :praxis="metadata.praxis"
            :flight-duration="metadata.flightDuration"
            :included="metadata.included"
            :excluded="metadata.excluded"
            :theorie="metadata.theorie"
            :price="price"
            :dates="product?.total_dates"
            :is-show-date="isFlyTirol ? isCourse : false"
            :is-show-agb="false"
          />
          <p
            v-if="!isCourse"
            class="text-gray-600 mt-4"
          >
            {{ metadata.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-end pr-8 z-10">
      <div class="transform -translate-y-2/4">
        <NuxtLink
          :to="metadata.path"
          class="btn--large"
          :class="
            metadata.bikeandfly === 'bike'
              ? 'btn-bike'
              : metadata.bikeandfly === 'fly'
                ? 'btn-fly'
                : 'btn-primary'
          "
          :title="isFlyTirol ? metadata.title : 'Info und buchen'"
        >
          <span v-if="isFlyTirol">Mehr erfahren</span>
          <span v-else-if="isHydrogen">Read More</span>
          <span v-else>Info und buchen</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ProductDetails from './ProductDetails.vue'
import ResponsiveImage from './ResponsiveImage.vue'
import { useBackend } from '@/composable/useBackend'
import { useFormat } from '@/composable/useFormat'
import { useData } from '@/composable/useData'
import { usePage } from '@/composable/usePage'

const props = defineProps({ path: { type: String, required: true } })
const { getProduct } = useBackend()
const { formatPrice } = useFormat()
const { isFlyTirol, isHydrogen } = useData()
const { isCourse, getMetadata } = usePage()
const metadata = getMetadata(props.path)

const price = computed(() => formatPrice(product.value?.price))

const product = computed(() => getProduct(metadata.category, metadata.slug))
</script>
