<template>
  <div class="relative overflow-hidden">
    <div class="relative max-w-90 w-11/12 ml-auto pt-8 pb-24 z-10">
      <div class="flex flex-col max-w-screen-sm flex-shrink-0">
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
            <span class="text-6xl font-heading font-bold">
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
