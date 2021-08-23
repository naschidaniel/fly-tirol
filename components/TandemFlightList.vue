<template>
  <div class="card--grid grid-gap-1 max-w-90 mx-auto py-4 md:py-12">
    <div v-for="flight in tandemflights" :key="flight.title">
      <tandem-flight-card :flight="flight" :page="getPage(flight.title)" />
    </div>
  </div>
</template>

<script>
import TandemFlightCard from './TandemFlightCard.vue'
export default {
  components: { TandemFlightCard },
  props: {
    tandemflights: { type: Array, required: true },
    pages: { type: Array, required: true },
  },
  methods: {
    getPage(title) {
      return this.pages.find((page) => page.title === title) || { path: '' }
    },
  },
}
</script>
