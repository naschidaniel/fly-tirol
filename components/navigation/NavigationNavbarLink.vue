<template>
  <nuxt-link :to="to" exact>
    <span
      class="
        ml-4
        px-3
        py-2
        rounded-md
        text-sm
        font-medium
        leading-5
        text-gray-500
        hover:text-white
        hover:bg-gray-700
        focus:outline-none
        focus:text-white
        focus:bg-gray-700
        transition
        duration-150
        ease-in-out
      "
      @click="toggleDropdown()"
    >
      {{ name }}
    </span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'NavigationDropdownLink',
  props: ['name', 'to'],
  methods: {
    toggleDropdown() {
      this.$store.commit('navigation/toggleDropdown')
    },
  },
}
</script>

<style>
a .nuxt-link-exact-active {
  font-weight: bold;
}
</style>
