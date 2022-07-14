<template>
  <div class="mt-3">
    <div class="flex items-center text-sm -ml-1 mb-2">
      <IconOutlineLocationMarker class="w-4 h-4" />
      <span class="block leading-none pt-1 ml-1">
        {{ location }}
      </span>
    </div>
    <div v-if="duration" class="flex items-center text-sm -ml-1 mb-2">
      <IconOutlineClock class="w-4 h-4 mr-1" />
      <span class="block leading-none pt-1">{{ duration }}</span>
    </div>
    <div
      v-if="praxis || flightDuration"
      class="flex items-center text-sm -ml-1 mb-2"
    >
      <IconOutlinePaperPlane class="w-4 h-4" />
      <span class="block leading-none pt-1 ml-1">
        <span v-if="praxis">{{ praxis }}</span>
        <span v-else>{{ flightDuration }}</span>
      </span>
    </div>
    <div v-if="theorie" class="flex items-center text-sm -ml-1 mb-2">
      <IconOutlineAcademicCap class="w-4 h-4" />
      <span class="block leading-none pt-1 ml-1">
        {{ theorie }}
      </span>
    </div>
    <div class="flex items-center text-sm -ml-1 mb-2">
      <IconOutlineCash class="w-4 h-4 mr-1" />
      <span v-if="price" class="block leading-none pt-1 font-bold">
        {{ price }}
      </span>
      <IconSpinner v-else class="animate-spin h-4 w-4 text-brand" />
    </div>
    <div v-if="isShowDate" class="flex items-center text-sm -ml-1 mb-4">
      <IconOutlineCalendar class="w-4 h-4 mr-1" />
      <span v-if="dates" class="block leading-none pt-1"
        >{{ dates }} Termine</span
      >
      <IconSpinner v-else class="animate-spin h-4 w-4 text-brand" />
    </div>
  </div>
</template>

<script setup>
// TODO NUXT3
// eslint-disable-next-line import/named
import { defineProps } from 'vue'
import IconOutlineAcademicCap from './icon/IconOutlineAcademicCap'
import IconOutlineClock from './icon/IconOutlineClock'
import IconOutlineCash from './icon/IconOutlineCash'
import IconOutlineCalendar from './icon/IconOutlineCalendar'
import IconOutlineLocationMarker from './icon/IconOutlineLocationMarker'
import IconOutlinePaperPlane from './icon/IconOutlinePaperPlane'
import IconSpinner from './icon/IconSpinner'

defineProps({
  dates: { type: Number, default: undefined },
  duration: { type: String, default: undefined },
  flightDuration: { type: String, default: undefined },
  isShowDate: { type: Boolean, default: true },
  location: { type: String, default: undefined },
  praxis: { type: String, default: undefined },
  price: { type: String, default: undefined },
  theorie: { type: String, default: undefined },
})
</script>
