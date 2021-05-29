<template>
  <div
    :class="{ block: isOpen, hidden: !isOpen }"
    class="sm:hidden"
    @click="toggleDropdown()"
  >
    <div class="px-2 pt-2">
      <navigation-dropdown-link name="Home" to="/" />
      <navigation-dropdown-link name="Tandemfliegen" to="/tandemfliegen" />
      <navigation-dropdown-link name="Ausbildung" to="/ausbildung" />
      <navigation-dropdown-link name="Team" to="/team" />
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
      return this.$store.state.navigation.isOpen
    },
  },
  methods: {
    toggleDropdown() {
      this.$store.commit('navigation/toggleDropdown')
    },
  },
}
</script>
