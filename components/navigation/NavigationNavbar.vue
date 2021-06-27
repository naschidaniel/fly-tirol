<template>
  <div class="flex justify-between lg:w-full">
    <div
      class="
        navbar--wrapper
        fixed
        lg:relative
        flex
        justify-end
        lg:flex lg:justify-center
        w-full
      "
      :class="{ open: isOpen, closed: !isOpen }"
      @click="toggleDropdown()"
    >
      <nav class="navigation--main flex flex-col items-start lg:flex-row">
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
    </div>

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

<style lang="scss">
.navbar-controls {
  @apply flex;
}
.navbar--wrapper {
  top: 5rem;
  right: 0;
  height: calc(100vh - 5rem);
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(2px);
  z-index: 99;
  @apply p-16;
  transition-duration: 0.5s;

  @screen lg {
    top: auto;
    height: auto;
    background-color: transparent;
    backdrop-filter: none;
    z-index: unset;
    @apply p-0;
  }

  &.closed {
    transform: translateX(100%);

    @screen lg {
      transform: none;
    }
  }
  &.open {
    transform: none;
  }
}

.navigation--main {
}
</style>
