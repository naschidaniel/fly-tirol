<template>
  <div class="relative overflow-hidden w-full">
    <div
      class="
        relative
        flex flex-wrap
        lg:flex-nowrap lg:w-11/12 lg:maxw-90 lg:mr-0 lg:ml-auto lg:pt-8
        pb-12
        2xl:pb-24
        z-10
      "
    >
      <div
        v-if="hero.image"
        class="
          relative
          w-full
          aspect-w-1 aspect-h-1
          overflow-hidden
          bg-gray-200
          lg:aspect-w-3 lg:aspect-h-1 lg:order-2 lg:ml-8
        "
      >
        <span
          class="
            block
            absolute
            bg-white
            rounded-t-4xl
            -bottom-5
            left-0
            top-auto
            h-20
            w-full
            -skew-y-6
            lg:w-48
            lg:h-full
            lg:top-0
            lg:-left-28
            lg:-skew-x-12
            lg:skew-y-0
            lg:rounded-r-4xl
            z-10
            transform
          "
        ></span>
        <responsive-image
          class="object-cover object-center w-full h-full"
          :picture="hero.image"
        />
      </div>
      <div
        class="
          flex flex-col
          max-w-90
          mx-auto
          lg:max-w-screen-sm lg:flex-shrink-0 lg:mx-0
        "
      >
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
              <span class="inline-block">{{ hero.pretitle }}</span>
            </span>
            <span class="text-4xl lg:text-6xl font-heading font-bold">
              {{ hero.title }}
            </span>
          </h1>
          <p class="text-lg leading-relaxed max-w-prose">
            {{ hero.intro }}
          </p>
          <div
            v-if="hero.link1 || hero.link2"
            class="flex flex-wrap mt-6 space-y-4 lg:space-y-0 lg:space-x-4"
          >
            <a
              v-if="hero.link1"
              :href="hero.link1.href"
              class="btn-primary btn--large"
            >
              {{ hero.link1.name }}
            </a>
            <a
              v-if="hero.link2"
              :href="hero.link2.href"
              class="btn-primary btn--large"
            >
              {{ hero.link2.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hero: { type: Object, required: true },
  },
}
</script>
