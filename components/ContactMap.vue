<template>
  <div>
    <iframe
      :src="map"
      style="border: 0px solid #eee; background: white"
      class="w-full"
      frameborder="0"
      height="400"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script setup>
import { defineProps } from '@nuxtjs/composition-api'

defineProps({
  map: { type: String, required: true },
})
</script>

<style scoped>
.mapContainer {
  width: 100%;
  height: 400px;
}
</style>
