<template>
  <div>
    <nuxt-content :document="index" />
    <courses-list :courses="courses" />
    <content-image-gallery path="/media/fortbildung/" />
  </div>
</template>

<script>
import CoursesList from '~/components/CoursesList.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { CoursesList },
  async asyncData({ $content, params }) {
    const index = await $content('fortbildung', 'index').fetch()
    const courses = await $content('fortbildung', params.slug)
      .where({ slug: { $ne: 'index' } })
      .sortBy('order', 'asc')
      .fetch()
    return { courses, index }
  },
  head() {
    const metatags = generateMetatags(this.index.title, this.index.description)
    return { title: this.index.title, meta: metatags }
  },
}
</script>
