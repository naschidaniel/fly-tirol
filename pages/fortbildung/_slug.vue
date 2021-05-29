<template>
  <nuxt-content :document="page" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('fortbildung', params.slug).fetch()
    return { page }
  },
}
</script>
