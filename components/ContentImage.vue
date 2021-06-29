<template>
  <responsive-image
    class="mb-2 object-contain rounded-lg mx-auto"
    :picture="picture"
  />
</template>

<script>
import ResponsiveImage from './ResponsiveImage.vue'
export default {
  components: { ResponsiveImage },
  props: {
    picture: { type: String, default: '', required: true },
  },
}
</script>
