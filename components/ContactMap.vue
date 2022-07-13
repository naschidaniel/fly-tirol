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
import { usePage } from '~/composable/usePage'

const { page } = usePage()
const map =
  page.value?.location === 'Hopfgarten'
    ? '/leaflet_de_hopfgarten.html'
    : page.value?.location === 'Söll'
    ? '/leaflet_de_soell.html'
    : '/leaflet_de.html'
</script>
<style scoped>
.mapContainer {
  width: 100%;
  height: 400px;
}
</style>
