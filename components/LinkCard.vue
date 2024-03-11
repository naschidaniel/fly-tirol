<template>
  <div class="card">
    <div class="card--container w-full rounded-xl bg-white shadow-xl">
      <div
        class="card--header aspect-w-16 aspect-h-14 rounded-t-xl bg-gray-200"
      >
        <NuxtLink :to="to">
          <ResponsiveImage
            img-class="object-cover"
            :picture="cardImage"
            :is-thumbnail="true"
          />
        </NuxtLink>
      </div>
      <div class="card--content px-8 pb-12">
        <div class="card--content__inner">
          <h3 class="text-xl font-heading font-semibold mb-4">
            <NuxtLink :to="to" :title="cardTitle">
              {{ cardTitle }}
            </NuxtLink>
          </h3>
          <p class="text-gray-600">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-end pr-8 z-10">
      <div class="transform -translate-y-2/4">
        <NuxtLink :to="to" class="btn-primary btn--large">
          <span v-if="isHydrogen">Read more</span>
          <span v-else>Mehr erfahren</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from '~/composable/useData';
import ResponsiveImage from './ResponsiveImage.vue'

const { isHydrogen } = useData();

defineProps({
  cardTitle: { type: String, required: true },
  cardImage: { type: String, required: true },
  description: { type: String, default: '' },
  to: { type: String, required: true },
})
</script>
