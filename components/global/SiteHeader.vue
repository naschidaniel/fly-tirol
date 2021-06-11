<template>
  <nav class="bg-gray-100">
    <div class="max-w-7xl sm:px-2 lg:px-8 4xl:px-16">
      <div class="flex items-center justify-between h-10">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <nuxt-link to="/" class="outline-none" active-class="" exact>
              fly-tirol.com
            </nuxt-link>
          </div>
          <div class="hidden ml-12 lg:block">
            <navigation-navbar />
          </div>
        </div>
        <div class="block ml-auto lg:hidden">
          <div class="flex items-center">
            <navigation-hamburger-button />
          </div>
        </div>
      </div>
    </div>
    <div class="block lg:hidden">
      <navigation-dropdown />
    </div>
  </nav>
</template>

<script>
import NavigationDropdown from '../navigation/NavigationDropdown.vue'
import NavigationHamburgerButton from '../navigation/NavigationNavbarButton.vue'
import NavigationNavbar from '../navigation/NavigationNavbar.vue'

export default {
  name: 'SiteHeader',
  components: {
    NavigationHamburgerButton,
    NavigationNavbar,
    NavigationDropdown,
  },
}
</script>
