<template>
  <div
    class="px-4 py-3 rounded relative"
    :class="
      alert?.type === 'error'
        ? 'bg-red-100 border border-red-400 text-red-700'
        : alert?.type === 'warning'
          ? 'bg-orange-100 border border-orange-400 text-orange-700'
          : 'bg-green-100 border bg-green-100 border border-green-400 text-green-700'
    "
    role="alert"
  >
    <strong class="font-bold">{{ alert?.type }} </strong>
    <span class="block sm:inline">{{ alert?.message }}</span>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
      <IconOutlineX
        class="text-red-400 h-6 w-6"
        :class="
          alert?.type === 'error'
            ? 'text-red-400'
            : alert?.type === 'warning'
              ? 'text-orange-400'
              : 'text-green-400'
        "
        role="button"
        @click="isShowAlert = !isShowAlert"
      />
    </span>
  </div>
</template>

<script setup lang="ts">
import { useBackend } from '@/composable/useBackend'
import IconOutlineX from '@/components/icon/IconOutlineX.vue'

const { isShowAlert, alert } = useBackend()
</script>
