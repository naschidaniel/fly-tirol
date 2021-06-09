<template>
  <nuxt-link
    :to="to"
    exact
    class="
      mt-1
      block
      px-3
      py-2
      rounded-md
      text-base
      font-medium
      text-gray-500
      hover:text-white
      hover:bg-gray-700
      focus:outline-none
      focus:text-white
      focus:bg-gray-700
      transition
      duration-150
      ease-in-out
      cursor-pointer
    "
  >
    {{ name }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'NavigationDropdownLink',
  props: {
    name: { type: String, required: true },
    to: { type: String, required: true },
  },
}
</script>

<style>
a.nuxt-link-exact-active {
  font-weight: bold;
}
</style>
