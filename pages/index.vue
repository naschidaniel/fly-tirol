<template>
  <div>
    <h1>Index</h1>
    <nuxt-content :document="index" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const index = await $content('index').fetch()
    return { index }
  },
}
</script>
