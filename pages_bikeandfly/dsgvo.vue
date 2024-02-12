<template>
  <div class="max-w-90 w-full mx-auto py-6">
    <Dsgvo class="nuxt-content" />
  </div>
</template>

<script setup lang="ts">
import { useMetaTags } from '@/composable/useMetaTags'
import Dsgvo from '@/content_bikeandfly/dsgvo.vue'

useMetaTags()
</script>
