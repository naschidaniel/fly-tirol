<template>
  <div class="overflow-hidden">
    <div class="w-full max-w-90 mx-auto">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide
          v-for="flight in tandemflights"
          :key="flight.title"
          class="card--slide"
        >
          <tandem-flight-card v-if="flight.flight" :flight="flight" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import TandemFlightCard from './TandemFlightCard.vue'
export default {
  components: { TandemFlightCard, Swiper, SwiperSlide },
  props: { tandemflights: { type: Array, required: true } },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        watchOverflow: true,
        spaceBetween: 12,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        slideClass: 'card--slide',
        breakpoints: {
          640: {
            spaceBetween: 32,
          },
        },
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
