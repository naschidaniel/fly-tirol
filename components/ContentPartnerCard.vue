<template>
  <div class="card py-4">
    <div class="card--container w-full rounded-xl bg-white shadow-xl">
      <div class="card--content px-8 pb-12">
        <div class="card--content__inner">
          <h3 class="text-2xl font-heading font-semibold mb-1">
            {{ title }}
          </h3>
          <p v-if="subTitle">{{ subTitle }}</p>
          <p v-else>&nbsp;</p>
          <div class="flex items-center text-sm -ml-1 my-2">
            <IconOutlineInformationCircle class="w-6 h-6" />
            <span class="block leading-none pt-1 ml-1 font-bold">
              {{ type }}
            </span>
          </div>
          <div class="flex items-center text-sm -ml-1 my-2">
            <IconOutlineLocationMarker class="w-6 h-6" />
            <span class="block leading-none pt-1 ml-1">
              {{ address }}
            </span>
          </div>
          <div v-if="phone" class="flex items-center text-sm -ml-1 my-2">
            <IconOutlinePhone class="w-6 h-6" />
            <a
              :href="`tel:${phone}`"
              :title="phone"
              class="block leading-none pt-1 ml-1"
            >
              {{ phone }}
            </a>
          </div>
          <div v-if="mail" class="flex items-center text-sm -ml-1 my-2">
            <IconOutlineMail class="w-6 h-6" />
            <a
              :href="`mailto:${mail}`"
              :title="mail"
              class="block leading-none pt-1 ml-1"
            >
              {{ mail }}
            </a>
          </div>
          <div v-if="website" class="flex items-center text-sm -ml-1 my-2">
            <IconOutlineLink class="w-6 h-6" />
            <a
              :href="website"
              target="_blank"
              :title="website"
              rel="noopener noreferrer"
              class="block leading-none pt-1 ml-1"
            >
              {{ website }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconOutlineInformationCircle from './icon/IconOutlineInformationCircle.vue'
import IconOutlineLink from './icon/IconOutlineLink.vue'
import IconOutlineLocationMarker from './icon/IconOutlineLocationMarker.vue'
import IconOutlineMail from './icon/IconOutlineMail.vue'
import IconOutlinePhone from './icon/IconOutlinePhone.vue'

defineProps({
  type: { type: String, required: true },
  title: { type: String, required: true },
  subTitle: { type: String, required: false, default: '' },
  address: { type: String, required: true },
  phone: { type: String, required: false, default: '' },
  mail: { type: String, required: false, default: '' },
  website: { type: String, required: false, default: '' },
})
</script>
