<template>
  <div class="card--grid grid-gap-1 max-w-90 mx-auto py-12">
    <div v-for="course in courses" :key="course.slug">
      <course-card class="p-4" :course="course" />
    </div>
  </div>
</template>

<script>
import CourseCard from './CourseCard.vue'
export default {
  components: { CourseCard },
  props: {
    courses: { type: Array, required: true },
  },
}
</script>
