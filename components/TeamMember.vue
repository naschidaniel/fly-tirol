<template>
  <div
    class="rounded-xl p-4 bg-gray-50 mb-4 border-2 border-gray-300 shadow-sm"
  >
    <h3 class="text-cyan-600 mt-2">
      {{ name }}
    </h3>
    <div class="md:flex mt-2">
      <responsive-image
        v-if="picture !== ''"
        class="mb-2 object-contain rounded-lg mx-auto md:m-2"
        :picture="picture"
        width="400"
        hight="300"
      />
      <div class="md:flex-1 md:ml-4">
        <p class="font-mono text-gray-600 text-lg md:text-xl">
          {{ position }}
        </p>
        <p class="mt-2 text-base md:text-lg">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ResponsiveImage from './ResponsiveImage.vue'
export default {
  components: { ResponsiveImage },
  props: {
    description: { type: String, default: '' },
    name: { type: String, default: '', required: true },
    picture: { type: String, default: '' },
    position: { type: String, default: '' },
  },
}
</script>
