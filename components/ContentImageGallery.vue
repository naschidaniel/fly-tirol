<template>
  <div class="w-full md:max-w-90 mx-auto">
    <section class="py-8 w-100">
      <div class="flex flex-wrap">
        <div
          v-for="img in imageGallery"
          :key="img.url"
          class="w-1/2 md:w-1/4 p-2"
        >
          <div class="aspect-w-1 aspect-h-1 overflow-hidden">
            <ResponsiveImage
              img-class="rounded shadow-md object-cover w-full h-full"
              :picture="img.url"
              :is-thumbnail="true"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ResponsiveImage from './ResponsiveImage.vue'
import { useMedia } from '~~/composable/useMedia'

const props = defineProps({
  path: { type: String, default: undefined },
})
const { media } = useMedia()
const imageGallery = computed(() =>
  Object.values(media).filter(img => img.path === props.path),
)
</script>
