<template>
  <div>
    <iframe
      :src="map"
      style="border: 0px solid #eee; background: white"
      class="w-full"
      frameborder="0"
      height="400"
      scrolling="no"
    />
  </div>
</template>

<script setup lang="ts">
import { usePage } from '@/composable/usePage'
import { useData } from '@/composable/useData'

const { isBikeAndFly } = useData()
const { page } = usePage()
const map
  = isBikeAndFly
    ? '/leaflet_de_bikeandfly.html'
    : page.value?.location === 'Westendorf'
      ? '/leaflet_de_westendorf.html'
      : '/leaflet_de.html'
</script>

<style scoped>
.mapContainer {
  width: 100%;
  height: 400px;
}
</style>
