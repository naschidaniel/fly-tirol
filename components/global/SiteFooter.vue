<template>
  <div :class="!isHydrogen ? 'pt-16' : ''">
    <div
      v-if="isHydrogen"
      class="bg-gradient-to-r from-hydrogreen to-hydroblue relative h-10 md:h-20 lg:h-40"
    >
      <ResponsiveImage
        box-class="absolute top-0 bottom-0 left-0 right-0"
        img-class="object-center w-full h-full"
        :is-lazy="false"
        :is-preload="true"
        picture="/media/wavline-mirrowd.png"
      />
    </div>
    <div>
      <div
        class="w-full py-8 md:py-6"
        :class="
          isFlyTirol
            ? 'bg-gray-200'
            : isHydrogen
              ? 'bg-gradient-to-r from-hydrogreen to-hydroblue'
              : 'bg-[#333333] text-gray-300'
        "
      >
        <div class="max-w-90 w-full mx-auto text-xs">
          <div
            class="flex flex-wrap md:flex-nowrap items-center justify-between"
          >
            <div class="underline m-4 whitespace-nowrap">
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
                <a
                  :href="mailTo"
                  class="underline whitespace-nowrap m-4"
                >
                  {{ mail }}
                </a>
                <a
                  :href="phoneHref"
                  class="underline m-4 whitespace-nowrap"
                >
                  {{ phoneString }}
                </a>
                <NuxtLink
                  v-if="isHydrogen"
                  href="https://at.linkedin.com/in/christian-weinberger-62aaa8114/en"
                  target="_blank"
                  class="underline m-4 whitespace-nowrap"
                >
                  <span>LinkedIn</span>
                </NuxtLink>
                <span
                  v-if="isFlyTirol"
                  class="hidden m-4 whitespace-nowrap"
                >
                  Bergliftstraße 22, 6363 Westendorf
                </span>
                <span
                  v-if="isHydrogen"
                  class="underline m-4 whitespace-nowrap"
                >
                  Kleinvolderbergstraße 7a, 6111 VOLDERS
                </span>
              </div>
              <div class="m-4 flex w-full sm:w-auto sm:ml-4">
                <NuxtLink
                  v-if="isHydrogen"
                  to="/imprint"
                  class="underline"
                >
                  <span>imprint</span>
                </NuxtLink>
                <NuxtLink
                  v-if="!isHydrogen"
                  to="/dsgvo"
                  class="underline"
                >
                  <span>DSGVO</span>
                </NuxtLink>
                <NuxtLink
                  v-if="!isHydrogen"
                  to="/impressum"
                  class="underline ml-8 sm:ml-4 md:ml-6"
                >
                  <span>Impressum</span>
                </NuxtLink>
                <NuxtLink
                  v-if="!isHydrogen"
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
  </div>
</template>

<script setup lang="ts">
import { useData } from '@/composable/useData'

const { isFlyTirol, isHydrogen, mail, phone, phoneString, website } = useData()
const mailTo = `mailto:${mail}`
const phoneHref = `tel:${phone}`
</script>
