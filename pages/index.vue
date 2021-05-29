<template>
  <div>
    <nuxt-content :document="index" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const index = await $content('', 'index').fetch()
    return { index }
  },
}
</script>
