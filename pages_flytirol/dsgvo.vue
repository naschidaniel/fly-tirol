<template>
  <div class="max-w-90 w-full mx-auto py-6">
    <Dsgvo class="nuxt-content" />
  </div>
</template>

<script setup>
import { useMetaTags } from '~/composable/useMetaTags'
import Dsgvo from '~/content_flytirol/dsgvo.vue'

useMetaTags()
</script>
