<template>
  <div class="rounded-xl p-4 bg-gray-50 m-8 border-2 border-gray-300 shadow-sm">
    <h3 class="text-cyan-600">
      {{ name }}
    </h3>
    <div class="md:flex">
      <img
        class="mb-2 object-none rounded-lg mx-auto md:m-2"
        src="https://www.x-dreamfly.ch/wp-content/uploads/2017/06/Sebastian_Kahn_Pilot_X-dreamfly.jpg"
        width="400"
        height="300"
        :alt="name"
        :title="name"
      />
      <div class="md:flex-1">
        <p class="text-gray-600">
          {{ position }}
        </p>
        <p>
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
