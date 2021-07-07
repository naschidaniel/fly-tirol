<template>
  <div>
    <nuxt-content :document="index" />
    <courses-list category="ausbildung" :courses="basicTrainings" />
  </div>
</template>

<script>
import CoursesList from '~/components/CoursesList.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { CoursesList },
  async asyncData({ $content }) {
    const index = await $content('ausbildung', 'index').fetch()
    return { index }
  },
  head() {
    const metatags = generateMetatags(this.index.title, this.index.description)
    return { title: this.index.title, meta: metatags }
  },
  computed: {
    basicTrainings() {
      return this.$store.state.basicTrainings
    },
  },
}
</script>
