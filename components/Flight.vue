<template>
  <div class="rounded-xl p-4 bg-gray-50 m-8 border-2 border-gray-300 shadow-sm">
    <h3 class="text-cyan-600">
      {{ flight.title }}
    </h3>
    <p class="text-gray-600">
      {{ flight.description }}
    </p>
    <p>
      {{ flight.information }}
    </p>
    <div class="flex content-start">
      <div class="flex-1">
        {{ flight.price }}
      </div>
      <div class="text-right">
        <nuxt-link
          to="/kontakt"
          class="
            border-2
            mt-1
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
            text-gray-500
            bg-gray-100
            hover:text-white
            hover:bg-gray-700
            focus:outline-none
            focus:text-white
            focus:bg-gray-700
            transition
            duration-150
            ease-in-out
            cursor-pointer
          "
        >
          Buchen
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['flight'],
}
</script>
