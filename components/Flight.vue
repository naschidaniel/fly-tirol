<template>
  <div class="rounded-xl p-8 bg-blue-300 m-8">
    <h3 class="text-lg font-semibold text-cyan-600">
      {{ flight.title }}
    </h3>
    <p class="font-medium ext-gray-500">
      {{ flight.description }}
    </p>
    <p>
      {{ flight.information }}
    </p>
    <span>
      {{ flight.price }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['flight'],
}
</script>
