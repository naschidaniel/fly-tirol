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
        <outline-information-circle-icon class="w-6 h-6" />
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
