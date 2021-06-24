<template>
  <div class="card">
    <div class="card--container w-full rounded-xl bg-white shadow-2xl">
      <div class="card--header aspect-w-16 aspect-h-9 rounded-t-xl">
        <responsive-image class="object-cover" :picture="cardImage" />
      </div>
      <div class="card--content p-4 pb-12">
        <h3 class="text-2xl font-heading font-bold mb-4">
          {{ cardTitle }}
        </h3>
        <p class="text-gray-600">
          {{ description }}
        </p>
      </div>
    </div>
    <div class="flex justify-end pr-8">
      <div class="transform -translate-y-2/4">
        <card-button :to="to" :name="linkName" />
      </div>
    </div>
  </div>
</template>

<script>
import ResponsiveImage from './ResponsiveImage.vue'
export default {
  components: { ResponsiveImage },
  props: {
    cardTitle: { type: String, required: true },
    cardImage: { type: String, required: true },
    description: { type: String, default: '' },
    linkName: { type: String, required: true },
    to: { type: String, required: true },
  },
}
</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  &--slide {
    @apply w-80;
    flex-shrink: 0;
    position: relative;
    transition-property: transform;
  }

  &--header {
    position: relative;
    overflow: hidden;
    &:before {
      content: '';
      z-index: 1;
      position: absolute;
      bottom: 0;
      left: -5%;
      width: 110%;
      height: 2.5rem;
      transform: rotate(-5deg) translateY(1rem);
      background: white;
      border-top-left-radius: 3rem;
      border-top-right-radius: 3rem;
    }
  }
  &--container {
    flex-grow: 1;
  }
}
</style>
