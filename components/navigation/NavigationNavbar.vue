<template>
  <div class="flex justify-between">
    <nav :class="{ open: isOpen, closed: !isOpen }" @click="toggleDropdown()">
      <navigation-navbar-link name="Tandemfliegen" to="/tandemfliegen" />
      <navigation-navbar-link name="Ausbildung" to="/ausbildung" />
      <navigation-navbar-link name="Fortbildung" to="/fortbildung" />
      <navigation-navbar-link
        name="Sicherheitstrainings"
        to="/sicherheitstrainings"
      />
      <navigation-navbar-link name="Reisen" to="/reisen" />
      <navigation-navbar-link name="Team" to="/team" />
    </nav>
    <div class="navbar-controls">
      <navigation-navbar-cta name="Kontakt" to="/kontakt" />
      <navigation-hamburger-button />
    </div>
  </div>
</template>

<script>
import NavigationHamburgerButton from '../navigation/NavigationNavbarButton.vue'
import NavigationNavbarLink from './NavigationNavbarLink.vue'
import NavigationNavbarCta from './NavigationNavbarCta.vue'

export default {
  name: 'NavigationNavbar',
  components: {
    NavigationNavbarLink,
    NavigationNavbarCta,
    NavigationHamburgerButton,
  },
  computed: {
    isOpen() {
      return this.$store.state.isOpen
    },
  },
  methods: {
    toggleDropdown() {
      this.$store.commit('toggleDropdown')
    },
  },
}
</script>

<style>
.navbar-controls {
  @apply flex;
  padding-left: 7vw;
}
</style>
