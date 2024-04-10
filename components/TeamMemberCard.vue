<template>
  <div class="card">
    <div class="card--container w-full rounded-xl bg-white shadow-xl">
      <div class="card--header rounded-t-xl bg-gray-200">
        <ResponsiveImage
          v-if="member.picture"
          img-class="object-contain"
          :picture="member.picture"
        />
        <div
          v-else
          class="flex justify-center items-center h-96"
        >
          <IconOutlineUsers class="w-40 h-40 text-gray-400" />
        </div>
      </div>
      <div class="card--content px-8 pb-8">
        <div class="card--content__inner">
          <h3 class="text-2xl font-heading font-semibold mb-1">
            {{ member.name }}
          </h3>
          <div class="flex items-start -ml-1">
            <IconOutlineClipboardList class="w-4 h-4 mt-0.5" />
            <span class="block leading-none pt-1 ml-1">
              {{ member.position }}
            </span>
          </div>
          <div class="text-gray-600 mt-4 mb-4">
            {{ member.information }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconOutlineClipboardList from './icon/IconOutlineClipboardList.vue'
import IconOutlineUsers from './icon/IconOutlineUsers.vue'
import ResponsiveImage from './ResponsiveImage.vue'

defineProps({ member: { type: Object, required: true } })
</script>
