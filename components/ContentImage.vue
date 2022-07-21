<template>
  <ResponsiveImage
    img-class="mb-2 object-contain rounded-lg mx-auto"
    :picture="picture"
  />
</template>

<script setup lang="ts">
// eslint-disable-next-line import/named
import { defineProps } from 'vue'
import ResponsiveImage from './ResponsiveImage.vue'

defineProps({
  picture: { type: String, default: '', required: true },
})
</script>
