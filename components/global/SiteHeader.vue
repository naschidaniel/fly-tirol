<template>
  <div class="bg-gradient-to-r from-hydrogreen to-hydroblue">
  <div class="max-w-90 w-full mx-auto">
    <div class="flex items-center justify-between h-10">
      <div class="relative shrink-0 z-10">
        <NuxtLink to="/" class="block outline-none w-24" exact>
          <FlyTirolLogo v-if="isFlyTirol" class="w-full" />
          <BikeAndFlyLogoBlack v-if="isBikeAndFly" class="w-full" />
          <ResponsiveImage v-if="isHydrogen"
              img-class="rounded shadow-md object-cover w-3/4"
              picture="/media/Rechteck-2.png"
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
