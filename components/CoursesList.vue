<template>
  <div>
    <div v-for="course in courses" :key="course.slug">
      <course-card class="m-2" :course="course" />
    </div>
  </div>
</template>

<script>
import CourseCard from './CourseCard.vue'
export default {
  components: { CourseCard },
  props: {
    courses: { type: Object, required: true },
  },
}
</script>
