<template>
  <nuxt-content
    :document="doc"
    class="flex-grow w-full p-6 text-gray-900 text-xl"
  />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(params.slug || 'index').fetch()
    return { doc }
  },
}
</script>
