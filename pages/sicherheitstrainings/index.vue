<template>
  <div>
    <nuxt-content :document="index" />
  </div>
</template>

<script>
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  async asyncData({ $content, params }) {
    const index = await $content('sicherheitstrainings', 'index').fetch()
    const courses = await $content('sicherheitstrainings', params.slug)
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
