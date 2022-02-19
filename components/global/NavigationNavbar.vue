<template>
  <div class="flex justify-between xl:w-full">
    <div
      class="navbar--wrapper fixed flex justify-end p-16 pt-32 z-40 w-full h-screen xl:h-auto xl:relative xl:justify-center xl:p-0 xl:z-0"
      :class="{ open: isOpen, closed: !isOpen }"
      @click="isOpen = !isOpen"
    >
      <nav class="flex flex-col items-start xl:flex-row">
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
        <NavigationNavbarLink name="Partner" to="/partner" />
      </nav>
    </div>

    <div class="flex z-50">
      <div class="mr-2 my-1 xl:my-0" @click="toggleIfDropdownIsOpen()">
        <nuxt-link class="btn-primary" to="/buchen" exact>
          <OutlineShoppingCartIcon
            class="mr-1"
            style="height: 1em; width: 1em"
          />
          ({{ cartItemsLength }})
        </nuxt-link>
      </div>
      <div class="mr-3 my-1 xl:my-0" @click="toggleIfDropdownIsOpen()">
        <nuxt-link class="btn-primary" to="/kontakt" exact>
          <span>Kontakt</span>
        </nuxt-link>
      </div>
      <div class="xl:mr-0 xl:hidden">
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
import OutlineShoppingCartIcon from '../icons/OutlineShoppingCartIcon.vue'
import OutlineXIcon from '../icons/OutlineXIcon.vue'
import NavigationNavbarLink from './NavigationNavbarLink.vue'
import { useNavigation } from '~/composable/useNavigation'
import { useShopifyCart } from '~/composable/useShopifyCart'
export default defineComponent({
  name: 'NavigationNavbar',
  components: {
    NavigationNavbarLink,
    OutlineMenuIcon,
    OutlineShoppingCartIcon,
    OutlineXIcon,
  },
  setup() {
    const { isOpen } = useNavigation()
    const { cartItemsLength } = useShopifyCart()
    return { cartItemsLength, isOpen }
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
@screen xl {
  .navbar--wrapper {
    top: auto;
    background-color: transparent;
    backdrop-filter: none;
  }
}
.navbar--wrapper.closed {
  transform: translateX(100%);
}
@screen xl {
  .navbar--wrapper.closed {
    transform: none;
  }
}
.navbar--wrapper.open {
  transform: none;
}
</style>
