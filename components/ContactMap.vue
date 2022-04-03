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

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    map: { type: String, required: true },
  },
})
</script>

<style scoped>
.mapContainer {
  width: 100%;
  height: 400px;
}
</style>
