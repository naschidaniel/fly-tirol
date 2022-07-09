<template>
  <div class="max-w-90 w-full mx-auto">
    <div class="flex items-center justify-between h-10">
      <div class="relative shrink-0 z-10">
        <NuxtLink to="/" class="block outline-none w-24" exact>
          <FlyTirolLogo v-if="isFlyTirol" class="w-full" />
          <WhiteCloutLogo v-if="isWhiteCloud" class="w-full" />
        </NuxtLink>
      </div>
      <NavigationNavbar />
    </div>
  </div>
</template>

<script setup>
import FlyTirolLogo from '../FlyTirolLogo.vue'
import WhiteCloutLogo from '../WhiteCloudLogo.vue'
import NavigationNavbar from './NavigationNavbar.vue'
import { useData } from '~/composable/useData'

const { isFlyTirol, isWhiteCloud } = useData()
</script>
