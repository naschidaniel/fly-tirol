<template>
  <div class="flex justify-between lg:w-full">
    <div
      class="navbar--wrapper fixed flex justify-end p-16 pt-32 z-40 w-full h-screen lg:h-auto lg:relative lg:justify-center lg:p-0 lg:z-0"
      :class="{ open: isOpen, closed: !isOpen }"
      @click="isOpen = !isOpen"
    >
      <nav class="flex flex-col items-start lg:flex-row">
        <NavigationNavbarLink name="Tandemfliegen" to="/tandemfliegen" />
        <NavigationNavbarLink name="Ausbildung" to="/ausbildung" />
        <NavigationNavbarLink name="Fortbildung" to="/fortbildung" />
        <NavigationNavbarLink
          name="Sicherheitstrainings"
          to="/sicherheitstrainings"
        />
        <NavigationNavbarLink name="Reisen" to="/reisen" />
        <NavigationNavbarLink name="Termine" to="/termine" />
        <NavigationNavbarLink name="Team" to="/team" />
      </nav>
    </div>

    <div class="flex z-50">
      <div class="mr-2 my-1 lg:my-0" @click="toggleIfDropdownIsOpen()">
        <NavigationNavbarCart />
      </div>
      <div class="mr-3 my-1 lg:my-0" @click="toggleIfDropdownIsOpen()">
        <nuxt-link class="btn-primary" to="/kontakt" exact>
          <span>Kontakt</span>
        </nuxt-link>
      </div>
      <div class="lg:mr-0 lg:hidden">
        <button
          aria-label="Toggle Dropdown Menu"
          class="p-2 rounded-md text-brand focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white focus:ring-opacity-100 focus:outline-none transition duration-150 ease-in-out"
          @click="isOpen = !isOpen"
        >
          <OutlineXIcon v-if="isOpen" class="h-6 w-6" />
          <OutlineMenuIcon v-else class="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import OutlineMenuIcon from '../icons/OutlineMenuIcon.vue'
import OutlineXIcon from '../icons/OutlineXIcon.vue'
import NavigationNavbarCart from './NavigationNavbarCart.vue'
import NavigationNavbarLink from './NavigationNavbarLink.vue'
import { useNavigation } from '~/composable/useNavigation'

export default defineComponent({
  name: 'NavigationNavbar',
  components: {
    NavigationNavbarLink,
    NavigationNavbarCart,
    OutlineMenuIcon,
    OutlineXIcon,
  },
  setup() {
    const { isOpen } = useNavigation()
    return { isOpen }
  },
  methods: {
    toggleIfDropdownIsOpen() {
      if (this.isOpen) {
        this.isOpen = false
      }
    },
  },
})
</script>

<style scoped>
.navbar--wrapper {
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(2px);
  transition-duration: 0.5s;
}
@screen lg {
  .navbar--wrapper {
    top: auto;
    background-color: transparent;
    backdrop-filter: none;
  }
}
.navbar--wrapper.closed {
  transform: translateX(100%);
}
@screen lg {
  .navbar--wrapper.closed {
    transform: none;
  }
}
.navbar--wrapper.open {
  transform: none;
}
</style>
