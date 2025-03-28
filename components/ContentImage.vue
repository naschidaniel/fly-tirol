<template>
  <ResponsiveImage
    img-class="mb-2 object-contain rounded-lg mx-auto"
    :picture="picture"
  />
</template>

<script setup lang="ts">
import ResponsiveImage from './ResponsiveImage.vue'

defineProps({
  picture: { type: String, required: true },
})
</script>
