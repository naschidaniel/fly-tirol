<template>
  <div
    class="rounded-xl p-4 bg-gray-50 mb-4 border-2 border-gray-300 shadow-sm"
  >
    <h3 class="text-cyan-600 mt-2">
      {{ name }}
    </h3>
    <div class="md:flex mt-2">
      <img
        class="mb-2 object-none rounded-lg mx-auto md:m-2"
        src="https://www.x-dreamfly.ch/wp-content/uploads/2017/06/Sebastian_Kahn_Pilot_X-dreamfly.jpg"
        width="400"
        height="300"
        :alt="name"
        :title="name"
      />
      <div class="md:flex-1">
        <p class="font-mono text-gray-600 text-lg md:text-xl">
          {{ position }}
        </p>
        <p class="mt-2 text-base md:text-lg">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['description', 'name', 'position'],
}
</script>
