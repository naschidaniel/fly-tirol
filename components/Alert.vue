<template>
  <div
    class="flex border border-blue-900 text-blue-900 px-4 py-3 rounded-xl shadow-md"
    role="alert"
  >
    <div class="py-2">
      <IconOutlineInformationCircle class="h-6 w-6 text-teal-500 mr-4" />
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import IconOutlineInformationCircle from './icon/IconOutlineInformationCircle.vue'
</script>
