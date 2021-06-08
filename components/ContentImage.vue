<template>
  <responsive-image
    class="mb-2 object-contain rounded-lg mx-auto"
    :hight="hight"
    :picture="picture"
    :width="width"
  />
</template>

<script>
import ResponsiveImage from './ResponsiveImage.vue'
export default {
  components: { ResponsiveImage },
  props: {
    hight: { type: String, default: 'h-100' },
    picture: { type: String, default: '', required: true },
    width: { type: String, default: 'w-100' },
  },
}
</script>
