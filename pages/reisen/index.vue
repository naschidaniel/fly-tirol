<template>
  <div>
    <nuxt-content :document="page" />
    <courses-list :courses="courses" />
  </div>
</template>

<script>
import CoursesList from '~/components/CoursesList.vue'
export default {
  components: { CoursesList },
  async asyncData({ $content, params }) {
    const page = await $content('reisen', 'index').fetch()
    const courses = await $content('reisen', params.slug)
      .where({ slug: { $ne: 'index' } })
      .sortBy('order', 'asc')
      .fetch()
    return { courses, page }
  },
}
</script>
