<template>
  <div class="mx-2 flex lg:hidden">
    <button
      class="
        inline-flex
        items-center
        justify-center
        p-2
        rounded-md
        text-brand
        focus:ring-2
        focus:ring-blue-400
        focus:ring-offset-2
        focus:ring-offset-white
        focus:ring-opacity-100
        focus:outline-none
        transition
        duration-150
        ease-in-out
      "
      @click="toggleDropdown()"
    >
      <!-- https://heroicons.dev/ - x - MIT Licence  -->
      <svg
        v-if="isOpen"
        licence="<!-- https://heroicons.dev/ - x - MIT Licence  -->"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <!-- https://heroicons.dev/ - menu - MIT Licence  -->
      <svg
        v-else
        licence="<!-- https://heroicons.dev/ - menu - MIT Licence  -->"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 10h16M4 14h16M4 18h16"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SiteNavigationButton',
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
