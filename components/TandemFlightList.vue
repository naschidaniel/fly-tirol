<template>
  <div class="max-w-90 mx-auto md:py-4 md:py-12">
    <div class="flex flex-wrap justify-center">
      <div
        v-for="flight in tandemflights"
        :key="flight.title"
        class="m-1 md:m-3 w-80"
      >
        <tandem-flight-card :flight="flight" />
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import TandemFlightCard from './TandemFlightCard.vue'
export default {
  components: { TandemFlightCard },
  props: { tandemflights: { type: Array, required: true } },
}
</script>

<style lang="scss">
.swiper-container {
  overflow: visible !important;
}
</style>
