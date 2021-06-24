<template>
  <div class="max-w-90 w-full mx-auto">
    <div class="flex items-center justify-between h-10">
      <div class="flex-shrink-0">
        <nuxt-link to="/" class="block outline-none w-24" exact>
          <FTLogo class="w-full" />
        </nuxt-link>
      </div>
      <navigation-navbar />
    </div>
  </div>
</template>

<script>
import FTLogo from '@/assets/flytirol-logo.svg?inline'
import NavigationNavbar from '../navigation/NavigationNavbar.vue'

export default {
  name: 'SiteHeader',
  components: {
    NavigationNavbar,
    FTLogo,
  },
}
</script>

<style>
#logo-sun {
  fill: #ff4e00;
}
</style>
