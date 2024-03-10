<template>
  <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
    <Imprint />
    <Version />
  </div>
</template>

<script setup lang="ts">
import { useMetaTags } from '@/composable/useMetaTags'
import Imprint from '@/content_hydrogen/imprint.vue'
import Version from '@/components/Version.vue'

useMetaTags()
</script>

<style scoped>
.license-spacer {
  margin-left: 0.5em;
  margin-right: 0.5em;
}
#license-list:last-child span .license-spacer {
  display: none;
}
</style>
