<template>
  <div class="rounded-xl p-4 bg-gray-50 border-2 border-gray-300 shadow-sm">
    <h3 class="text-cyan-600">
      {{ course.title }}
    </h3>
    <p class="text-gray-600">
      {{ course.description }}
    </p>
    <p>
      {{ course.information }}
    </p>
    <div class="flex content-start">
      <div class="flex-1">
        {{ course.price }}
      </div>
      <div class="text-right">
        <card-button :to="course.path" name="Details" />
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
