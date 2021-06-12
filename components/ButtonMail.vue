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
    <!-- https://heroicons.dev/ - mail - MIT Licence  -->
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
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      ></path>
    </svg>
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
