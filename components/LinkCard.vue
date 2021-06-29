<template>
  <div class="rounded-xl p-4 bg-gray-50 border-2 border-gray-300 shadow-sm">
    <p class="text-cyan-600">
      {{ cardTitle }}
    </p>
    <responsive-image :picture="cardImage" />
    <p class="text-gray-600">
      {{ description }}
    </p>
    <div class="flex content-center">
      <div class="text-right">
        <card-button :to="to" :name="linkName" />
      </div>
    </div>
  </div>
</template>

<script>
import ResponsiveImage from './ResponsiveImage.vue'
export default {
  components: { ResponsiveImage },
  props: {
    cardTitle: { type: String, required: true },
    cardImage: { type: String, required: true },
    description: { type: String, default: '' },
    linkName: { type: String, required: true },
    to: { type: String, required: true },
  },
}
</script>
