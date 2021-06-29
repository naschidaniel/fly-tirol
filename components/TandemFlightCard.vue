<template>
  <div class="card max-w-xs w-80">
    <div class="card--container w-full rounded-xl bg-white shadow-xl">
      <div class="card--header aspect-w-16 aspect-h-9 rounded-t-xl bg-gray-200">
        <responsive-image class="object-cover" :picture="flight.image" />
      </div>
      <div class="card--content p-4 pb-12">
        <div class="card--content__inner">
          <h3 class="text-2xl font-heading font-semibold mb-1">
            {{ flight.title }}
          </h3>
          <div class="flex items-center text-sm -ml-1 mb-4">
            <!-- https://heroicons.dev/ - location-marker - MIT Licence  -->
            <svg
              licence="<!-- https://heroicons.dev/ - location-marker - MIT Licence  -->"
              class="w-4 h-4"
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
            <span class="block leading-none pt-1 ml-1">
              {{ flight.location }}
            </span>
          </div>
          <p class="text-gray-600">
            {{ flight.description }}
          </p>
          <div class="font-medium mt-4">
            {{ flight.price }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end pr-8">
      <div class="transform -translate-y-2/4">
        <card-button name="Buchen" to="/kontakt" />
      </div>
    </div>
  </div>
</template>

<script>
import CardButton from './CardButton.vue'
export default {
  components: { CardButton },
  props: { flight: { type: Object, required: true } },
}
</script>
