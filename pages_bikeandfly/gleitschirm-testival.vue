<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="Gleitschirm Testival"
      picture="/media/gleitschirm-testival/gleitschirm-testival.jpg"
    >
      <p>
        Erlebe das ultimative Gleitschirm-Testival im Rahmen des Bike and Fly
        Festivals im Brixental!
      </p>
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
      <GleitschirmTestival />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMetaTags } from '@/composable/useMetaTags'
import GleitschirmTestival from '~/content_bikeandfly/gleitschirm-testival.vue'

useMetaTags()
</script>
