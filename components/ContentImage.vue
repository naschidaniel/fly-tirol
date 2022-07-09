<template>
  <ResponsiveImage
    img-class="mb-2 object-contain rounded-lg mx-auto"
    :picture="picture"
  />
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import ResponsiveImage from './ResponsiveImage.vue'

export default defineComponent({
  components: { ResponsiveImage },
  props: {
    picture: { type: String, default: '', required: true },
  },
})
</script>
