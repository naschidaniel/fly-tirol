<template>
  <div class="flex space-x-8 overflow-hidden w-full">
    <div v-swiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          v-for="flight in tandemflights"
          :key="flight.title"
          class="flex-shrink-0 flex-grow-0 card--slide"
        >
          <tandem-flight-card v-if="flight.flight" :flight="flight" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import TandemFlightCard from './TandemFlightCard.vue'
export default {
  directives: {
    swiper: directive,
  },
  components: { TandemFlightCard },
  props: { tandemflights: { type: Array, required: true } },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        watchOverflow: true,
        spaceBetween: 32,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        slideClass: 'card--slide',
        // navigation: {
        //   nextEl: '.slider-button-next',
        //   prevEl: '.slider-button-prev',
        // },
      },
    }
  },
}
</script>

<style lang="scss">
.swiper-container {
  overflow: visible !important;
}
</style>
