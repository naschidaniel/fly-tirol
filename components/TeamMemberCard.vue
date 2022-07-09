<template>
  <div class="card">
    <div class="card--container w-full rounded-xl bg-white shadow-xl">
      <div class="card--header aspect-w-2 aspect-h-3 rounded-t-xl bg-gray-200">
        <ResponsiveImage
          v-if="member.picture"
          img-class="object-contain"
          :picture="member.picture"
        />
        <div v-else class="flex justify-center items-center">
          <outline-emoji-happy-icon class="w-36 h-36 text-gray-400" />
        </div>
      </div>
      <div class="card--content px-8 pb-8">
        <div class="card--content__inner">
          <h3 class="text-2xl font-heading font-semibold mb-1">
            {{ member.name }}
          </h3>
          <div class="flex items-start text-sm -ml-1 mb-4">
            <outline-clipboard-list-icon class="w-4 h-4 mt-0.5" />
            <span class="block leading-none pt-1 ml-1">
              {{ member.position }}
            </span>
          </div>
          <p class="text-gray-600">
            {{ member.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from '@nuxtjs/composition-api'
import OutlineClipboardListIcon from './icons/OutlineClipboardListIcon.vue'
import OutlineEmojiHappyIcon from './icons/OutlineEmojiHappyIcon.vue'
import ResponsiveImage from './ResponsiveImage.vue'

defineProps({ member: { type: Object, required: true } })
</script>
