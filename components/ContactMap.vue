<template>
  <div>
    <iframe
      :src="url"
      style="border: 0px solid #eee; background: white"
      class="w-full"
      frameborder="0"
      height="400"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useData } from '~/composable/useData'

export default defineComponent({
  setup() {
    const { isFlyTirol } = useData()
    const url = isFlyTirol
      ? 'https://fly-tirol.com/leaflet_flytirol/leaflet_de.html'
      : 'https://naschi.info/leaflet_whitecloud/leaflet_de.html'
    return { url }
  },
})
</script>

<style scoped>
.mapContainer {
  width: 100%;
  height: 400px;
}
</style>
