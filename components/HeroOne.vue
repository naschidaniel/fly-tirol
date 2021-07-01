<template>
  <div
    class="
      relative
      min-h-screen-60
      md:min-h-screen-70
      overflow-hidden
      flex flex-col
      md:flex-row
      items-end
      lg:items-start
      pb-12
      md:pb-24
    "
  >
    <div class="md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0">
      <responsive-image
        img-class="object-cover object-center md:object-bottom lg:object-center w-full h-full"
        :picture="hero.image"
      />
    </div>
    <div
      class="absolute h-40 bottom-0 left-0 right-0 bg-gradient-to-t from-white"
    ></div>
    <div
      class="
        relative
        max-w-90
        mx-auto
        w-full
        lg:w-11/12 lg:mr-0 lg:ml-auto lg:py-24
        z-10
      "
    >
      <div class="flex flex-col lg:w-96 max-w-screen-sm lg:flex-shrink-0">
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

<style scoped lang="scss">
.image-box {
  @apply md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0;
}
</style>
