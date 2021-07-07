<template>
  <div class="card--grid grid-gap-1 max-w-90 mx-auto py-4 md:py-12">
    <div v-for="course in courses" :key="course.handle">
      <course-card
        v-if="course.variants"
        class="p-4"
        :course="course"
        :slug="`${category}/${course.handle}`"
      />
    </div>
  </div>
</template>

<script>
import CourseCard from './CourseCard.vue'
export default {
  components: { CourseCard },
  props: {
    courses: { type: Array, required: true },
    category: { type: String, default: '', required: false },
  },
}
</script>
