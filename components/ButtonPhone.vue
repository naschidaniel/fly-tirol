<template>
  <button
    class="
      bg-green-500
      hover:bg-green
      text-green-darkest
      font-bold
      py-2
      px-4
      rounded
      inline-flex
      items-center
    "
  >
    <outline-phone-icon class="w-6 h-6" />
    <a :href="`tel:${telefonnumber}`">
      <span class="ml-4">{{ telefonnumber }}</span>
    </a>
  </button>
</template>

<script>
export default {
  props: {
    telefonnumber: { type: String, required: true },
  },
}
</script>
