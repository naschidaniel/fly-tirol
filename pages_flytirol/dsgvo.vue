<template>
  <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
    <Dsgvo />
  </div>
</template>

<script setup lang="ts">
import { useMetaTags } from '@/composable/useMetaTags'
import Dsgvo from '@/content_flytirol/dsgvo.vue'

useMetaTags()
</script>
