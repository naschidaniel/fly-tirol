<template>
  <button
    class="
      bg-green-500
      hover:bg-green
      text-green-darkest
      font-bold
      my-2
      mr-2
      my-2
      mr-2
      py-2
      px-4
      rounded
      inline-flex
      items-center
    "
  >
    <outline-chat-icon class="w-6 h-6" />
    <a :href="`tel:${telefonnumber}`">
      <nuxt-link to="/kontakt" class="ml-4">Buchen</nuxt-link>
    </a>
  </button>
</template>
