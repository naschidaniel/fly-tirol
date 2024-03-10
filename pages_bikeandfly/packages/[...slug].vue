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
    <div v-if="page.slug == 'tagesticket'">
      <Tagesticket />
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
    <ProductBookService />
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import ProductBookService from '@/components/ProductBookService.vue'
import Afterparty from '@/content_bikeandfly/packages/afterparty.vue'
import BikeAndFlyTouren from '@/content_bikeandfly/packages/bike-and-fly-touren.vue'
import EBikeTouren from '@/content_bikeandfly/packages/e-bike-touren.vue'
import Tagesticket from '@/content_bikeandfly/packages/tagesticket.vue'
import EBikeVerleih from '@/content_bikeandfly/packages/e-bike-verleih.vue'
import Tandemfluege from '@/content_bikeandfly/packages/tandemfluege.vue'
import Vortrag from '@/content_bikeandfly/packages/vortrag.vue'
import Weekendticket from '@/content_bikeandfly/packages/weekendticket.vue'
import { usePage } from '@/composable/usePage'
import { useMetaTags } from '@/composable/useMetaTags'

const { page } = usePage()
useMetaTags()
</script>
