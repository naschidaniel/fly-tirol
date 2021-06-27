<template>
  <div class="flex flex-wrap">
    <div v-for="course in courses" :key="course.slug" class="flex-shrink-0">
      <course-card class="m-2" :course="course" />
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
