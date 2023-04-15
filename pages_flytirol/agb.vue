<template>
  <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
    <Agb />
  </div>
</template>

<script setup lang="ts">
import { useMetaTags } from '@/composable/useMetaTags'
import Agb from '@/content_flytirol/agb.vue'

useMetaTags()
</script>
