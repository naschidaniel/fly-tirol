<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="Bike Testival"
      picture="/media/bike-testival/bike-testival.jpg"
    >
      <p>
        Erlebe das ultimative Bike-Testival im Rahmen des Bike and Fly Festivals
        im Brixental!
      </p>
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
      <BikeTestival />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMetaTags } from '@/composable/useMetaTags'
import BikeTestival from '~/content_bikeandfly/bike-testival.vue'

useMetaTags()
</script>
