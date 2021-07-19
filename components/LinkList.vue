<template>
  <div class="overflow-hidden">
    <div class="max-w-90 mx-auto lg:max-w-none lg:w-10/12 lg:mr-0 lg:ml-auto">
      <div class="hidden lg:flex justify-end pr-10p mb-8 mt-8">
        <button
          class="
            inline-flex
            flex-grow-0 flex-initial
            border-2 border-brand
            rounded-full
            mr-4
            slider-button-prev
            focus:ring-2
            focus:ring-blue-400
            focus:ring-offset-2
            focus:ring-offset-white
            focus:ring-opacity-50
            focus:outline-none
          "
        >
          <solid-chevron-left-icon class="w-8 h-8" />
        </button>
        <button
          class="
            inline-flex
            flex-grow-0 flex-initial
            border-2 border-brand
            rounded-full
            slider-button-next
            focus:ring-2
            focus:ring-blue-400
            focus:ring-offset-2
            focus:ring-offset-white
            focus:ring-opacity-50
            focus:outline-none
          "
        >
          <solid-chevron-right-icon class="w-8 h-8" />
        </button>
      </div>
      <div class="flex flex-wrap lg:flex-nowrap">
        <div class="flex flex-col w-full lg:w-96 max-w-screen-sm flex-shrink-0">
          <div class="mt-6">
            <h1 class="mb-6">
              <span
                class="
                  text-lg
                  font-heading font-medium
                  flex flex-row
                  items-center
                  mb-2
                "
              >
                <span class="inline-block bg-brand w-7 h-0.75 mr-2"></span>
                <span class="inline-block">{{ title.pre }}</span>
              </span>
              <span class="text-5xl font-heading font-bold">
                {{ title.main }}
              </span>
            </h1>
            <p class="text-lg leading-relaxed max-w-prose">
              {{ intro }}
            </p>
          </div>
        </div>
        <div class="w-full mt-8 lg:mt-0 lg:w-4/6 lg:pr-10p lg:ml-16">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
              <link-card
                :card-image="tandemflights.cardImage"
                :card-title="tandemflights.cardTitle"
                :description="tandemflights.description"
                :link-name="tandemflights.linkName"
                :to="tandemflights.to"
              />
            </swiper-slide>
            <swiper-slide>
              <link-card
                :card-image="basicTrainings.cardImage"
                :card-title="basicTrainings.cardTitle"
                :description="basicTrainings.description"
                :link-name="basicTrainings.linkName"
                :to="basicTrainings.to"
              />
            </swiper-slide>
            <swiper-slide>
              <link-card
                :card-image="advancedTrainings.cardImage"
                :card-title="advancedTrainings.cardTitle"
                :description="advancedTrainings.description"
                :link-name="advancedTrainings.linkName"
                :to="advancedTrainings.to"
              />
            </swiper-slide>
            <swiper-slide>
              <link-card
                :card-image="saftyTrainings.cardImage"
                :card-title="saftyTrainings.cardTitle"
                :description="saftyTrainings.description"
                :link-name="saftyTrainings.linkName"
                :to="saftyTrainings.to"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import LinkCard from './LinkCard.vue'

export default {
  components: { Swiper, SwiperSlide, LinkCard },
  props: {
    advancedTrainings: { type: Object, default: () => {} },
    basicTrainings: { type: Object, required: true },
    saftyTrainings: { type: Object, required: true },
    tandemflights: { type: Object, required: true },
    travel: { type: Object, default: () => {} },
  },
  data() {
    return {
      title: {
        pre: 'Finde das richtige',
        main: 'Angebot',
      },
      intro:
        'Egal ob du einmal das Gefühl der Freiheit bei einem Tandemflug in den wunderschönen Kitzbüheler Alpen genießen möchtest, du selbst ein Paragleitpilot werden möchtest, deine vorhandenen Flugfähigkeiten ausbauen willst oder mit uns auf Flugreise gehen möchtest - wir haben genau das richtige für dich!',
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 8,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        slideClass: 'card--slide',
        navigation: {
          nextEl: '.slider-button-next',
          prevEl: '.slider-button-prev',
        },
        breakpoints: {
          640: {
            spaceBetween: 32,
          },
        },
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
