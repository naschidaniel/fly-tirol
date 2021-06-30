<template>
  <button
    class="
      bg-green-500
      hover:bg-green
      text-green-darkest
      font-bold
      my-2
      mr-2
      py-2
      px-4
      rounded
      inline-flex
      items-center
    "
  >
    <outline-mail-icon class="w-6 h-6" />
    <a :href="`mailto:${mailaddress}`">
      <span class="ml-4">{{ mailaddress }}</span>
    </a>
  </button>
</template>

<script>
export default {
  props: {
    mailaddress: { type: String, required: true },
  },
}
</script>
