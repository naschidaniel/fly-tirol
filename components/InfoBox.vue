<template>
  <div
    class="bg-yellow-300 px-8 py-12 lg:px-12 lg:py-24 max-w-90 mx-auto rounded-xl shadow-xl"
  >
    <div class="flex flex-wrap max-w-max mx-auto">
      <div class="flex space-x-2 mb-8 md:w-1/2">
        <outline-information-circle-icon class="w-6 h-6" />
        <h2 class="text-xl font-heading font-semibold leading-snug">
          {{ headline }}
        </h2>
      </div>
      <div class="max-w-lg md:w-1/2 nuxt-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import OutlineInformationCircleIcon from './icons/OutlineInformationCircleIcon.vue'

export default defineComponent({
  components: { OutlineInformationCircleIcon },
  props: {
    headline: { type: String, required: true },
  },
})
</script>
