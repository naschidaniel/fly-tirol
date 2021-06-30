<template>
  <div class="max-w-90 mx-auto text-lg font-heading font-medium leading-snug">
    <div class="h-0.75 bg-brand rounded-full w-full"></div>
    <div class="flex justify-center py-8 px-8">
      <!-- https://heroicons.dev/ - location-marker - MIT Licence  -->
      <svg
        licence="    <!-- https://heroicons.dev/ - location-marker - MIT Licence  -->"
        class="w-5 h-5 mr-1 -mt-0.25"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <h1 class="mr-6">
        {{ infobox.title }}
      </h1>
      <nuxt-content :document="infobox" />
    </div>
    <div class="h-0.75 bg-brand rounded-full w-full"></div>
  </div>
</template>

<script>
export default {
  props: {
    infobox: { type: Object, required: true },
  },
}
</script>
