<template>
  <div>
    <div v-for="flight in tandemflights" :key="flight.title">
      <tandem-flight-card v-if="flight.flight" :flight="flight" />
    </div>
  </div>
</template>

<script>
import TandemFlightCard from './TandemFlightCard.vue'
export default {
  components: { TandemFlightCard },
  props: { tandemflights: { type: Object, required: true } },
}
</script>
