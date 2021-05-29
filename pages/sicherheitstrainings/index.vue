<template>
  <div>
    <nuxt-content :document="page" />
    <div v-for="course in courses" :key="course.slug">
      <NuxtLink :to="`${course.path}`">
        {{ course.slug }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('sicherheitstrainings', 'index').fetch()
    const courses = await $content('sicherheitstrainings', params.slug)
      .where({ slug: { $ne: 'index' } })
      .sortBy('order', 'asc')
      .fetch()
    return { courses, page }
  },
}
</script>
