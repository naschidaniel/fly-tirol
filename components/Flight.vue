<template>
  <div class="rounded-xl p-8 bg-blue-300 m-8">
    <h3 class="text-lg font-semibold text-cyan-600">{{ title }}</h3>
    <p class="font-medium ext-gray-500">
      {{ description }}
    </p>
    <span
      ><NuxtLink :to="`/tandem/${slug}`">{{ price }}</NuxtLink></span
    >
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'slug', 'price'],
}
</script>
