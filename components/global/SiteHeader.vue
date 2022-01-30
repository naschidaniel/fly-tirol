<template>
  <div class="max-w-90 w-full mx-auto">
    <div class="flex items-center justify-between h-10">
      <div class="relative flex-shrink-0 z-50">
        <nuxt-link to="/" class="block outline-none w-24" exact>
          <FlyTirolLogo class="w-full" />
        </nuxt-link>
      </div>
      <navigation-navbar />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import FlyTirolLogo from '../FlyTirolLogo.vue'
import NavigationNavbar from '../navigation/NavigationNavbar.vue'

export default defineComponent({
  name: 'SiteHeader',
  components: {
    NavigationNavbar,
    FlyTirolLogo,
  },
})
</script>
