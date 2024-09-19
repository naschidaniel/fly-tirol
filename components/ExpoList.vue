<template>
  <div class="max-w-90 mx-auto pb-12">
    <div class="relative flex w-11/12 ml-auto pt-8 pb-4 2xl:pb-12 z-10">
      <div class="flex flex-col max-w-96 max-w-screen-sm shrink-0">
        <div class="">
          <h2 class="mb-6">
            <span
              class="text-lg font-heading font-medium flex flex-row items-center mb-2"
            >
              <span class="inline-block bg-brand w-7 h-0.75 mr-2" />
              Die
            </span>
            <span class="text-5xl font-heading font-bold">Aussteller</span>
          </h2>
        </div>
      </div>
    </div>
    <div class="card--grid grid-gap-2 w-full">
      <div
        v-for="item in items"
        :key="item.name"
      >
        <ExpoCard
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import ExpoCard from './ExpoCard.vue'
import type { ExpoEntry } from '@/types/data'

defineProps({
  items: { type: Array as PropType<ExpoEntry[]>, required: true },
})
</script>
