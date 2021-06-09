<template>
  <nuxt-link
    :to="to"
    class="
      border-2
      mt-1
      block
      px-3
      py-2
      rounded-md
      text-base
      font-medium
      text-gray-500
      bg-gray-100
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
  props: {
    name: { type: String, required: true },
    to: { type: String, required: true },
  },
}
</script>
