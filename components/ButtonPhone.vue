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
    <!-- https://heroicons.dev/ - phone - MIT Licence  -->
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      ></path>
    </svg>
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
