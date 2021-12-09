<template>
  <div
    class="flex border border-blue-900 text-blue-900 px-4 py-3 rounded-xl shadow-md"
    role="alert"
  >
    <div class="py-2">
      <outline-information-circle-icon class="h-6 w-6 text-teal-500 mr-4" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import OutlineInformationCircleIcon from './icons/OutlineInformationCircleIcon.vue'

export default defineComponent({
  name: 'Alert',
  components: {
    OutlineInformationCircleIcon,
  },
})
</script>
