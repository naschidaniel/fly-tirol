<template>
  <div
    class="
      bg-yellow-300
      px-8
      py-12
      lg:px-12 lg:py-24
      max-w-90
      mx-auto
      rounded-xl
      shadow-xl
    "
  >
    <div class="flex flex-wrap max-w-max mx-auto">
      <div class="flex space-x-2 mb-8 md:w-1/2">
        <!-- https://heroicons.dev/ - information-circle - MIT Licence  -->
        <svg
          licence="<!-- https://heroicons.dev/ - information-circle - MIT Licence  -->"
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
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h1 class="text-xl font-heading font-semibold leading-snug">
          {{ infobox.title }}
        </h1>
      </div>
      <div class="md:w-1/2">
        <nuxt-content :document="infobox" class="max-w-lg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    infobox: { type: Object, required: true },
  },
}
</script>
