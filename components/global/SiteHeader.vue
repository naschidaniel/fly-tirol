<template>
  <div
    :class="isHydrogen ? 'bg-gradient-to-r from-hydrogreen to-hydroblue' : ''"
  >
    <div class="max-w-90 w-full mx-auto">
      <div
        class="flex items-center justify-between"
        :class="isHydrogen ? 'h-24' : 'h-10'"
      >
        <div class="relative shrink-0 z-10">
          <NuxtLink
            to="/"
            class="block outline-none w-24"
            exact
          >
            <FlyTirolLogo
              v-if="isFlyTirol"
              class="w-full"
            />
            <BikeAndFlyLogoBlack
              v-if="isBikeAndFly"
              class="w-full"
            />
            <ResponsiveImage
              v-if="isHydrogen"
              picture="/media/Rechteck-2_logo.png"
            />
          </NuxtLink>
        </div>
        <NavigationNavbar />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FlyTirolLogo from '../FlyTirolLogo.vue'
import BikeAndFlyLogoBlack from '../BikeAndFlyLogoBlack.vue'
import NavigationNavbar from './NavigationNavbar.vue'
import { useData } from '@/composable/useData'

const { isFlyTirol, isBikeAndFly, isHydrogen } = useData()
</script>
