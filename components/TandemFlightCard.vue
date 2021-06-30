<template>
  <div class="card max-w-xs w-80">
    <div class="card--container w-full rounded-xl bg-white shadow-xl">
      <div class="card--header aspect-w-16 aspect-h-9 rounded-t-xl bg-gray-200">
        <responsive-image img-class="object-cover" :picture="flight.image" />
      </div>
      <div class="card--content px-8 pb-12">
        <div class="card--content__inner">
          <h3 class="text-2xl font-heading font-semibold mb-1">
            {{ flight.title }}
          </h3>
          <div class="flex items-center text-sm -ml-1 mb-4">
            <outline-location-marker-icon class="w-4 h-4" />
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
    <div class="flex justify-end pr-8 z-10">
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
