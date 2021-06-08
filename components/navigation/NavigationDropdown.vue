<template>
  <div :class="{ block: isOpen, hidden: !isOpen }" @click="toggleDropdown()">
    <div class="px-2 pt-2">
      <navigation-dropdown-link name="Home" to="/" />
      <navigation-dropdown-link name="Tandemfliegen" to="/tandemfliegen" />
      <navigation-dropdown-link name="Ausbildung" to="/ausbildung" />
      <navigation-dropdown-link name="Fortbildung" to="/fortbildung" />
      <navigation-dropdown-link
        name="Sicherheitstrainings"
        to="/sicherheitstrainings"
      />
      <navigation-dropdown-link name="Reisen" to="/reisen" />
      <navigation-dropdown-link name="Team" to="/team" />
      <navigation-dropdown-link name="Kontakt" to="/kontakt" />
    </div>
  </div>
</template>

<script>
import NavigationDropdownLink from './NavigationDropdownLink.vue'

export default {
  name: 'NavigationDropdown',
  components: {
    NavigationDropdownLink,
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
