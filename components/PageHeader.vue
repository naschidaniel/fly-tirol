<template>
  <div class="relative overflow-hidden w-full">
    <div
      class="relative flex flex-wrap lg:flex-nowrap lg:w-11/12 lg:max-w-90 lg:mr-0 lg:ml-auto lg:pt-8 pb-4 md:pb-12 2lg:pb-24 z-10"
    >
      <div
        v-if="picture"
        class="relative w-full aspect-w-1 aspect-h-1 overflow-hidden bg-gray-200 lg:aspect-w-3 lg:aspect-h-1 lg:order-2 lg:ml-8"
      >
        <span
          class="block absolute bg-white -bottom-20 left-0 top-auto h-40 w-full -skew-y-6 lg:w-48 lg:h-full lg:top-0 lg:-left-28 lg:-skew-x-12 lg:skew-y-0 z-10 transform rounded-t-4xl lg:rounded-r-4xl"
        ></span>
        <ResponsiveImage
          img-class="object-cover object-top w-full h-full"
          :picture="picture"
        />
      </div>
      <div
        class="flex flex-col max-w-90 mx-auto lg:max-w-screen-sm lg:shrink-0 lg:mx-0"
      >
        <div class="mt-6">
          <h1 class="mb-6">
            <span
              class="text-lg font-heading font-medium flex flex-row items-center mb-2"
            >
              <span class="inline-block bg-brand w-7 h-0.75 mr-2"></span>
              <span class="inline-block">{{ preHeadline }}</span>
            </span>
            <span class="text-4xl lg:text-6xl font-heading font-bold">
              {{ headline }}
            </span>
          </h1>
          <p class="text-lg leading-relaxed max-w-prose">
            <slot />
          </p>
          <div
            v-if="link1 || link2"
            class="flex flex-wrap justify-center mt-6 lg:space-x-4"
          >
            <div class="p-2">
              <a
                v-if="link1"
                :href="link1.href"
                class="btn-primary btn--large"
                >{{ link1.name }}</a
              >
            </div>
            <div class="p-2">
              <a
                v-if="link2"
                :href="link2.href"
                class="btn-primary btn--large"
                >{{ link2.name }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    headline: { type: String, required: true },
    preHeadline: { type: String, required: true },
    picture: { type: String, required: false, default: '' },
    link1: { type: Object, required: false, default: () => {} },
    link2: { type: Object, required: false, default: () => {} },
  },
})
</script>
