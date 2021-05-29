<template>
  <div class="-mr-2 flex sm:hidden">
    <button
      class="
        inline-flex
        items-center
        justify-center
        p-2
        rounded-md
        text-gray-400
        hover:text-white
        hover:bg-gray-700
        focus:outline-none
        focus:bg-gray-700
        focus:text-white
        transition
        duration-150
        ease-in-out
      "
      @click="toggleDropdown()"
    >
      <i class="bi" :class="isOpen ? 'bi-x-lg' : 'bi-list'"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SiteNavigationButton',
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
