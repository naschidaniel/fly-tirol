<template>
  <div :class="{ block: isOpen, hidden: !isOpen }" @click="isOpen = !isOpen">
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
    </div>
    <div class="px-2 p-2">
      <navigation-dropdown-link name="Kontakt" to="/kontakt" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import NavigationDropdownLink from './NavigationDropdownLink.vue'
import { useData } from '~/composable/useData'

export default defineComponent({
  name: 'NavigationDropdown',
  components: {
    NavigationDropdownLink,
  },
  setup() {
    const { isOpen } = useData()
    return { isOpen }
  },
})
</script>
