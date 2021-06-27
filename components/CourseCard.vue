<template>
  <div class="card max-w-xs w-80">
    <div class="card--container w-full rounded-xl bg-white shadow-xl">
      <div class="card--header aspect-w-16 aspect-h-9 rounded-t-xl">
        <responsive-image class="object-cover" :picture="course.image" />
      </div>
      <div class="card--content p-4 pb-12">
        <h3 class="text-2xl font-heading font-bold mb-1">
          {{ course.title }}
        </h3>
        <div class="flex items-center text-sm -ml-1 mb-4">
          <outline-location-marker-icon class="w-4 h-4" />
          <span class="block leading-none pt-1 ml-1">
            {{ course.location }}
          </span>
        </div>
        <p class="text-gray-600">
          {{ course.description }}
        </p>
        <div class="font-medium mt-4">
          {{ course.price }}
        </div>
      </div>
    </div>
    <div class="flex justify-end pr-8">
      <div class="transform -translate-y-2/4">
        <card-button :to="course.path" name="Mehr erfahren" />
      </div>
    </div>
  </div>
</template>

<script>
import CardButton from './CardButton.vue'
export default {
  components: { CardButton },
  props: {
    course: { type: Object, required: true },
  },
}
</script>
