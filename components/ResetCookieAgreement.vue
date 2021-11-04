<template>
  <div v-if="isCookieAgreement">
    <div class="my-4 font-bold">
      Sie haben der Cookie Vereinbarung zugestimmt.<br />
      Hier finden Sie eine Auflistung aller gespeicherten Cookies.
    </div>
    <table class="w-full">
      <tr class="border">
        <th class="border">Cookie-Name</th>
        <th class="border">Cookie-Wert</th>
      </tr>
      <tr v-for="(value, index) in allCokies" :key="index" class="border">
        <td class="p-1 text-sm lg:text-base align-top border text-center">
          {{ index }}
        </td>
        <td class="p-1 text-sm lg:text-base break-all border">{{ value }}</td>
      </tr>
    </table>
    <div class="flex justify-center">
      <button
        aria-label="Delete all cookies"
        class="btn-primary w-full md:w-1/2 mt-6"
        @click="removeAllCookies()"
      >
        Alle Cookies der Website löschen
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useData } from '~/composable/useData'

export default defineComponent({
  name: 'ResetCookieAgreement',
  setup() {
    const { allCokies, isCookieAgreement, removeAllCookies } = useData()
    return { allCokies, isCookieAgreement, removeAllCookies }
  },
})
</script>
