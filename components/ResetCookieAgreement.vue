<template>
  <div v-if="isCookieAgreement">
    <div class="my-4 font-bold">
      Sie haben der Cookie Vereinbarung zugestimmt.<br>
      Hier finden Sie eine Auflistung aller gespeicherten Cookies.
    </div>
    <table class="w-full">
      <thead>
        <tr class="border">
          <th class="border">
            Cookie-Name
          </th>
          <td class="border">
            Cookie-Wert
          </td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="cookie of allCookies"
          :key="cookie.name"
          class="border"
        >
          <th class="p-1 text-sm lg:text-base align-top border text-center">
            {{ cookie?.name }}
          </th>
          <td class="p-1 text-sm lg:text-base break-all border">
            {{ cookie?.value }}
          </td>
        </tr>
      </tbody>
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

<script setup lang="ts">
import { useFlyCookies } from '@/composable/useFlyCookies'

const { allCookies, isCookieAgreement, removeAllCookies } = useFlyCookies()
</script>
