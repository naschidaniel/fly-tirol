<template>
  <div class="relative overflow-hidden w-full">
    <div
      class="
        relative
        flex flex-wrap
        lg:w-11/12 lg:maxw-90 lg:mr-0 lg:ml-auto lg:pt-8
        pb-12
        2xl:pb-24
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
          lg:mt-20 lg:aspect-w-3 lg:aspect-h-1 lg:order-2 lg:ml-8
        "
      >
        <responsive-image
          img-class="object-cover object-top w-full h-full"
          :picture="hero.image"
        />
        <span
          class="
            hidden
            lg:absolute
            bg-white
            lg:rounded-t-4xl
            left-0
            -top-20
            right-0
            bottom-0
            -skew-y-6
            lg:block
            lg:bottom-0
            lg:w-48
            lg:h-full
            lg:top-0
            lg:-left-28
            lg:-skew-x-12
            lg:skew-y-0
            lg:rounded-r-4xl
            transform
          "
        ></span>
      </div>
      <div class="relative w-full">
        <span
          class="
            block
            absolute
            bg-white
            rounded-t-4xl
            left-0
            -top-20
            right-0
            bottom-0
            -skew-y-6
            lg:bottom-0
            lg:w-48
            lg:h-full
            lg:top-0
            lg:-left-28
            lg:-skew-x-12
            lg:skew-y-0
            lg:rounded-r-4xl
            transform
            lg:hidden
          "
        ></span>
        <div
          class="
            relative
            flex flex-col
            max-w-90
            mx-auto
            lg:max-w-screen-sm lg:flex-shrink-0 lg:mx-0
            z-20
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
              class="flex flex-wrap mt-6 lg:space-x-4"
            >
              <a
                v-if="hero.link1"
                :href="hero.link1.href"
                class="btn-primary btn--large mr-2 self-end"
              >
                {{ hero.link1.name }}
              </a>
              <a
                v-if="hero.link2"
                :href="hero.link2.href"
                class="btn-primary btn--large mt-6 sm:mt-0 self-end"
              >
                {{ hero.link2.name }}
              </a>
            </div>
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
