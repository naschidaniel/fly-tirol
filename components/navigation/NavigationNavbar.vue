<template>
  <div class="flex">
    <navigation-navbar-link name="Tandemfliegen" to="/tandemfliegen" />
    <navigation-navbar-link name="Ausbildung" to="/ausbildung" />
    <navigation-navbar-link name="Fortbildung" to="/fortbildung" />
    <navigation-navbar-link name="Reisen" to="/reisen" />
    <navigation-navbar-link
      name="Sicherheitstrainings"
      to="/sicherheitstrainings"
    />
    <navigation-navbar-link name="Team" to="/team" />
    <navigation-navbar-link name="Kontakt" to="/kontakt" />
  </div>
</template>

<script>
import NavigationNavbarLink from './NavigationNavbarLink.vue'

export default {
  name: 'NavigationNavbar',
  components: { NavigationNavbarLink },
}
</script>
