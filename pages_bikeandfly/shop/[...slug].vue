<template>
  <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
    <div v-if="page.slug == 'afterparty'">
      <Afterparty />
    </div>
    <div v-if="page.slug == 'bike-and-fly-touren'">
      <BikeAndFlyTouren />
    </div>
    <div v-if="page.slug == 'e-bike-touren'">
      <EBikeTouren />
    </div>
    <div v-if="page.slug == 'e-bike-verleih'">
      <EBikeVerleih />
    </div>
    <div v-if="page.slug == 'tandemfluege'">
      <Tandemfluege />
    </div>
    <div v-if="page.slug == 'vortrag'">
      <Vortrag />
    </div>
    <div v-if="page.slug == 'weekendticket'">
      <Weekendticket />
    </div>
    <ProductBookProduct />
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import ProductBookProduct from '@/components/ProductBookProduct.vue'
import Afterparty from '@/content_bikeandfly/shop/afterparty.vue'
import BikeAndFlyTouren from '@/content_bikeandfly/shop/bike-and-fly-touren.vue'
import EBikeTouren from '@/content_bikeandfly/shop/e-bike-touren.vue'
import EBikeVerleih from '@/content_bikeandfly/shop/e-bike-verleih.vue'
import Tandemfluege from '@/content_bikeandfly/shop/tandemfluege.vue'
import Vortrag from '@/content_bikeandfly/shop/vortrag.vue'
import Weekendticket from '@/content_bikeandfly/shop/weekendticket.vue'
import { usePage } from '@/composable/usePage'
import { useMetaTags } from '@/composable/useMetaTags'

const { page } = usePage()
useMetaTags()
</script>
