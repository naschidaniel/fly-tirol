<template>
  <div class="card--grid grid-gap-1 max-w-90 mx-auto py-4 md:py-12">
    <div v-for="flight in tandemflights" :key="flight.title">
      <tandem-flight-card :flight="flight" />
    </div>
  </div>
</template>

<script>
import TandemFlightCard from './TandemFlightCard.vue'
export default {
  components: { TandemFlightCard },
  props: { tandemflights: { type: Array, required: true } },
}
</script>
