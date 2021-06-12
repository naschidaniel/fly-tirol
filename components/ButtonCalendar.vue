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
    <!-- https://heroicons.dev/ - calendar - MIT Licence  -->
    <svg
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
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
    <a href="/kalender.pdf" target="_blank">
      <span class="ml-4">Kalender 2021</span>
    </a>
  </button>
</template>
