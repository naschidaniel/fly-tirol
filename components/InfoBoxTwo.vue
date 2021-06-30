<template>
  <div class="max-w-90 mx-auto text-lg font-heading font-medium leading-snug">
    <div class="h-0.75 bg-brand rounded-full w-full"></div>
    <div class="flex justify-center py-8 px-8">
      <outline-location-marker-icon class="w-5 h-5 mr-1 -mt-0.25" />
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
