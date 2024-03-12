<template>
  <div class="mt-3">
    <div class="flex items-center text-sm -ml-1 mb-2">
      <IconOutlineLocationMarker v-if="location" class="w-4 h-4" />
      <span class="block leading-none pt-1 ml-1">
        {{ location }}
      </span>
    </div>
    <div v-if="duration" class="flex items-center text-sm -ml-1 mb-2">
      <IconOutlineClock class="w-4 h-4 mr-1" />
      <span class="block leading-none pt-1">{{ duration }}</span>
    </div>
    <div
      v-if="praxis || flightDuration || bikeandfly === 'fly'"
      class="flex items-center text-sm -ml-1 mb-2"
    >
      <IconOutlinePaperPlane class="w-4 h-4" />
      <span class="block leading-none pt-1 ml-1">
        <span v-if="praxis">{{ praxis }}</span>
        <span v-if="flightDuration">{{ flightDuration }}</span>
        <span v-else>{{ bikeandfly }}</span>
      </span>
    </div>
    <div
      v-if="bikeandfly === 'bike'"
      class="flex items-center text-sm -ml-1 mb-2"
    >
      <IconOutlineBattery100 class="w-4 h-4" />
      <span class="block leading-none pt-1 ml-1">
        {{ bikeandfly }}
      </span>
    </div>
    <div
      v-if="bikeandfly === 'bike&fly'"
      class="flex items-center text-sm -ml-1 mb-2"
    >
      <IconOutlineCake class="w-4 h-4" />
      <span class="block leading-none pt-1 ml-1">
        {{ bikeandfly }}
      </span>
    </div>
    <div v-if="theorie" class="flex items-center text-sm -ml-1 mb-2">
      <IconOutlineAcademicCap class="w-4 h-4" />
      <span class="block leading-none pt-1 ml-1">
        {{ theorie }}
      </span>
    </div>
    <div v-if="!isHydrogen" class="flex items-center text-sm -ml-1 mb-2">
      <IconOutlineCash class="w-4 h-4 mr-1" />
      <span v-if="price" class="block leading-none pt-1 font-bold">
        {{ price }}
      </span>
      <IconSpinner v-else class="animate-spin h-4 w-4 text-brand" />
    </div>
    <div v-if="isShowDate" class="flex items-center text-sm -ml-1 mb-2">
      <IconOutlineCalendar class="w-4 h-4 mr-1" />
      <span class="block leading-none pt-1">
        <span v-if="dates && dates >= 1">{{ dates }} Termine</span>
        <span v-else>–</span>
      </span>
    </div>
    <div v-if="excluded" class="flex items-center text-sm -ml-1 mb-2">
      <IconOutlineMinusCircle class="w-4 h-4 mr-1" />
      <span class="block leading-none pt-1 ml-1">
        {{ excluded }}
      </span>
    </div>
    <div v-if="isShowAgb" class="flex items-center text-sm -ml-1 mb-2">
      <IconOutlineBook class="w-4 h-4 mr-1" />
      <NuxtLink to="/agb" class="underline"
        >Du hast die Allgemeinen Geschäftsbedingungen gelesen</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import IconOutlineAcademicCap from './icon/IconOutlineAcademicCap.vue'
import IconOutlineBook from './icon/IconOutlineBook.vue'
import IconOutlineClock from './icon/IconOutlineClock.vue'
import IconOutlineCake from './icon/IconOutlineCake.vue'
import IconOutlineCash from './icon/IconOutlineCash.vue'
import IconOutlineCalendar from './icon/IconOutlineCalendar.vue'
import IconOutlineLocationMarker from './icon/IconOutlineLocationMarker.vue'
import IconOutlineMinusCircle from './icon/IconOutlineMinusCircle.vue'
import IconOutlinePaperPlane from './icon/IconOutlinePaperPlane.vue'
import IconOutlineBattery100 from './icon/IconOutlineBattery100.vue'
import IconSpinner from './icon/IconSpinner.vue'
import { useData } from '~/composable/useData'

const { isHydrogen } = useData()

defineProps({
  bikeandfly: { type: String, default: undefined },
  dates: { type: Number, default: undefined },
  duration: { type: String, default: undefined },
  excluded: { type: String, default: undefined },
  flightDuration: { type: String, default: undefined },
  isShowDate: { type: Boolean, default: true },
  location: { type: String, default: undefined },
  praxis: { type: String, default: undefined },
  price: { type: String, default: undefined },
  theorie: { type: String, default: undefined },
  isShowAgb: { type: Boolean, default: true },
})
</script>
