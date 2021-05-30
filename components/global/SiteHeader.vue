<template>
  <nav class="bg-gray-100">
    <div class="max-w-7xl sm:px-2 lg:px-8 4xl:px-16">
      <div class="flex items-center justify-between h-10">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <nuxt-link to="/" class="outline-none" active-class="" exact>
              FeelFree.tirol
            </nuxt-link>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <navigation-navbar class="ml-12" />
          </div>
        </div>
        <div class="ml-auto sm:ml-6 sm:block">
          <div class="flex items-center">
            <navigation-hamburger-button />
          </div>
        </div>
      </div>
    </div>
    <navigation-dropdown />
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
