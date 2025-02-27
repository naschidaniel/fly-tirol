<template>
  <div class="flex justify-between xl:w-full">
    <div
      class="navbar--wrapper fixed flex justify-end p-16 pt-60 z-40 w-full h-screen xl:h-auto xl:relative xl:justify-center xl:p-0 xl:z-0"
      :class="{ open: isOpen, closed: !isOpen }"
      @click="isOpen = !isOpen"
    >
      <nav
        v-if="isFlyTirol"
        class="flex flex-col items-start xl:flex-row"
      >
        <NavigationNavbarLink
          name="Tandemfliegen"
          to="/tandemfliegen"
        />
        <NavigationNavbarLink
          name="Ausbildung"
          to="/ausbildung"
        />
        <NavigationNavbarLink
          name="Fortbildung"
          to="/fortbildung"
        />
        <NavigationNavbarLink
          name="Sicherheitstrainings"
          to="/sicherheitstrainings"
        />
        <NavigationNavbarLink
          name="Acrotrainings"
          to="/acrotrainings"
        />
        <NavigationNavbarLink
          name="Reisen"
          to="/reisen"
        />
        <NavigationNavbarLink
          name="Termine"
          to="/termine"
        />
        <NavigationNavbarLink
          name="Team"
          to="/team"
        />
        <NavigationNavbarLink
          name="Fluggebiet"
          to="/fluggebiet"
        />
        <NavigationNavbarLink
          name="Service"
          to="/service"
        />
        <NavigationNavbarLink
          name="Kontakt"
          to="/kontakt"
        />
      </nav>
      <nav
        v-else-if="isBikeAndFly"
        class="flex flex-col items-start xl:flex-row"
      >
        <NavigationNavbarLink
          name="Programm"
          to="/programm"
        />
        <NavigationNavbarLink
          name="Expo Area"
          to="/expo-area"
        />
        <NavigationNavbarLink
          name="Wanderbird Cup"
          to="/wanderbird"
        />
        <NavigationNavbarLink
          name="Bike Parkour Race"
          to="/bike-parkour-race"
        />
        <NavigationNavbarLink
          name="Livemusik"
          to="/livemusik"
        />
        <NavigationNavbarLink
          name="Streetfood"
          to="/streetfood"
        />
        <NavigationNavbarLink
          name="Partner"
          to="/partner"
        />
        <NavigationNavbarLink
          name="Kontakt"
          to="/kontakt"
        />
      </nav>
      <nav
        v-else
        class="flex flex-col items-start xl:flex-row"
      >
        <NavigationNavbarLink
          name="HOME"
          to="/"
        />
        <NavigationNavbarLink
          name="ABOUT US"
          to="/about-us"
        />
        <NavigationNavbarLink
          name="BASICS"
          to="/basics"
        />
        <NavigationNavbarLink
          name="NEWS"
          to="/news"
        />
        <NavigationNavbarLink
          name="FAQ"
          to="/faq"
        />
        <NavigationNavbarLink
          name="PARTNER"
          to="/partner"
        />
        <NavigationNavbarLink
          name="CONTACT"
          to="/contact"
        />
      </nav>
    </div>

    <div class="flex">
      <div
        class="mr-2 my-1 xl:my-0 z-10"
        @click="toggleIfDropdownIsOpen()"
      >
        <NuxtLink
          v-if="isFlyTirol"
          class="btn-primary"
          to="/buchen"
          exact
        >
          <IconOutlineShoppingCart
            class="mr-1"
            style="height: 1em; width: 1em"
          />
          ({{ cartItemsLength }})
        </NuxtLink>
      </div>
      <a
        v-if="isFlyTirol"
        class="btn-primary mr-3 my-1 xl:my-0 z-10"
        :href="user?.is_authenticated && user?.role === 'CUSTOMER' ? `/shop/user-ui/user?user-id=${user.id}` : user?.is_authenticated ? `/shop/admin-ui/user?user-id=${user.id}` : `/shop/user-ui/login`"
      >
        <IconOutlineUser
          class="mr-1"
          style="height: 1em; width: 1em"
        />
      </a>
      <div class="xl:mr-0 xl:hidden z-50">
        <button
          aria-label="Toggle Dropdown Menu"
          class="p-2 rounded-md text-brand focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white focus:ring-opacity-100 focus:outline-none transition duration-150 ease-in-out"
          @click="isOpen = !isOpen"
        >
          <IconOutlineX
            v-if="isOpen"
            class="h-6 w-6"
          />
          <IconOutlineMenu
            v-else
            class="h-6 w-6"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconOutlineMenu from '../icon/IconOutlineMenu.vue'
import IconOutlineShoppingCart from '../icon/IconOutlineShoppingCart.vue'
import IconOutlineUser from '../icon/IconOutlineUser.vue'
import IconOutlineX from '../icon/IconOutlineX.vue'
import NavigationNavbarLink from './NavigationNavbarLink.vue'
import { useData } from '@/composable/useData'
import { useNavigation } from '@/composable/useNavigation'
import { useBackend } from '@/composable/useBackend'

const { isFlyTirol, isBikeAndFly } = useData()
const { isOpen } = useNavigation()
const { cartItemsLength, user } = useBackend()

function toggleIfDropdownIsOpen() {
  if (isOpen.value) {
    isOpen.value = !isOpen.value
  }
}
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
