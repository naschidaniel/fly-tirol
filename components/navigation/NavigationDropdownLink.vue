<template>
  <nuxt-link :to="to" exact>
    <div
      class="
        mt-1
        block
        px-3
        py-2
        rounded-md
        text-base
        font-medium
        text-gray-300
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
    </div></nuxt-link
  >
</template>

<script>
export default {
  name: 'NavigationDropdownLink',
  props: ['name', 'to'],
}
</script>
