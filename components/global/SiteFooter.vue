<template>
  <div class="pt-16">
    <div
      class="w-full py-8 md:py-6"
      :class="isFlyTirol ? 'bg-gray-200' : 'bg-[#333333] text-gray-300'"
    >
      <div class="max-w-90 w-full mx-auto text-md sm:text-xs">
        <div class="flex flex-wrap md:flex-nowrap items-center justify-between">
          <div class="relative shrink-0 w-full md:w-auto mb-8 md:mb-0">
            <NuxtLink
              to="/"
              class="block outline-none w-24 whitespace-nowrap"
              exact
            >
              &#169; {{ website }}
            </NuxtLink>
          </div>
          <div class="flex flex-wrap sm:flex-nowrap justify-between w-full">
            <div class="flex flex-wrap w-full md:justify-center mb-8 sm:mb-0">
              <a :href="mailTo" class="underline whitespace-nowrap">
                {{ mail }}
              </a>
              <a
                :href="phoneHref"
                class="underline ml-8 sm:ml-4 md:ml-6 whitespace-nowrap"
              >
                {{ phoneString }}
              </a>
              <span
                v-if="isFlyTirol"
                class="hidden lg:block underline ml-8 sm:ml-4 md:ml-6 whitespace-nowrap"
              >
                Bergliftstraße 22, 6363 Westendorf
              </span>
            </div>
            <div class="flex w-full sm:w-auto sm:ml-4">
              <NuxtLink to="/dsgvo" class="underline">
                <span>DSGVO</span>
              </NuxtLink>
              <NuxtLink to="/impressum" class="underline ml-8 sm:ml-4 md:ml-6">
                <span>Impressum</span>
              </NuxtLink>
              <NuxtLink
                v-if="isFlyTirol"
                to="/agb"
                class="underline ml-8 sm:ml-4 md:ml-6"
              >
                <span>AGB</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from '@/composable/useData'

const { isFlyTirol, mail, phone, phoneString, website } = useData()
const mailTo = `mailto:${mail}`
const phoneHref = `tel:${phone}`
</script>
