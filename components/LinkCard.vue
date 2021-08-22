<template>
  <div class="card">
    <div class="card--container w-full rounded-xl bg-white shadow-xl">
      <div class="card--header aspect-w-16 aspect-h-9 rounded-t-xl bg-gray-200">
        <responsive-image
          img-class="object-cover"
          fix-size="sm"
          :picture="cardImage"
        />
      </div>
      <div class="card--content px-8 pb-12">
        <div class="card--content__inner">
          <h3 class="text-xl font-heading font-semibold mb-4">
            {{ cardTitle }}
          </h3>
          <p class="text-gray-600">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-end pr-8 z-10">
      <div class="transform -translate-y-2/4">
        <card-button :to="to" name="Mehr erfahren" />
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
    to: { type: String, required: true },
  },
}
</script>
