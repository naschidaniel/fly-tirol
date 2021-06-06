<template>
  <responsive-image
    class="mb-2 object-contain rounded-lg mx-auto"
    :alt="alt"
    :hight="hight"
    :picture="picture"
    :title="title"
    :width="width"
  />
</template>

<script>
import ResponsiveImage from './ResponsiveImage.vue'
export default {
  components: { ResponsiveImage },
  props: {
    alt: { type: String, default: '' },
    hight: { type: String, default: 'h-100' },
    picture: { type: String, default: '', required: true },
    title: { type: String, default: '' },
    width: { type: String, default: 'w-100' },
  },
}
</script>
