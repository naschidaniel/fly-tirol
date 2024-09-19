<template>
  <div class="card">
    <div class="card--container w-full rounded-xl bg-white shadow-xl">
      <div class="card--header rounded-t-xl bg-gray-200">
        <ResponsiveImage
          v-if="item.picture"
          img-class="object-contain"
          :picture="item.picture"
        />
        <div
          v-else
          class="flex justify-center items-center h-72"
        >
          <IconOutlineUsers class="w-40 h-40 text-gray-400" />
        </div>
      </div>
      <div
        class="px-8 pb-8"
        :class="!isHydrogen ? 'card--content' : ''"
      >
        <div class="card--content__inner">
          <h3
            class="text-2xl font-heading font-semibold mb-1"
            :class="!isHydrogen ? 'mt-1' : 'mt-10'"
          >
            {{ item.name }}
          </h3>
          <div class="text-gray-600 mt-4 mb-4">
            {{ item.information }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end pr-8 z-10">
      <div class="transform -translate-y-2/4">
        <NuxtLink
          :to="item.href"
          target="_blank"
          class="btn--large btn-primary"
          title="Mehr erfahren"
        >
          <span>Mehr erfahren</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconOutlineUsers from './icon/IconOutlineUsers.vue'
import ResponsiveImage from './ResponsiveImage.vue'
import { useData } from '~/composable/useData'

const { isHydrogen } = useData()

defineProps({ item: { type: Object, required: true } })
</script>
