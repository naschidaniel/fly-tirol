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
