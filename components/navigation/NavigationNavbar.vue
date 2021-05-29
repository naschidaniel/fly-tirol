<template>
  <div class="flex">
    <navigation-navbar-link name="Tandemfliegen" to="/tandemfliegen" />
    <navigation-navbar-link name="Ausbildung" to="/ausbildung" />
    <navigation-navbar-link name="Team" to="/team" />
  </div>
</template>

<script>
import NavigationNavbarLink from './NavigationNavbarLink.vue'

export default {
  name: 'NavigationNavbar',
  components: { NavigationNavbarLink },
}
</script>
