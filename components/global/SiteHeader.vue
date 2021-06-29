<template>
  <div class="max-w-90 w-full mx-auto">
    <div class="flex items-center justify-between h-10">
      <div class="flex-shrink-0">
        <nuxt-link to="/" class="block outline-none w-24" exact>
          <FlyTirolLogo class="w-full" />
        </nuxt-link>
      </div>
      <navigation-navbar />
    </div>
  </div>
</template>

<script>
import FlyTirolLogo from '../FlyTirolLogo.vue'
import NavigationNavbar from '../navigation/NavigationNavbar.vue'

export default {
  name: 'SiteHeader',
  components: {
    FlyTirolLogo,
    NavigationNavbar,
  },
}
</script>

<style>
#logo-sun {
  fill: #ff4e00;
}
</style>
