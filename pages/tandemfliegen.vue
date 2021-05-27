<template>
  <div>
    <nuxt-content :document="index" />
    <div v-for="flight in tandemflights" :key="flight.title">
      <flight v-if="flight.flight" :flight="flight" />
    </div>
    <nuxt-content :document="prerequisites" />
  </div>
</template>

<script>
import Flight from '@/components/Flight.vue'
export default {
  components: { Flight },
  async asyncData({ $content, params }) {
    const index = await $content('tandemfliegen', 'index').fetch()
    const prerequisites = await $content(
      'tandemfliegen',
      'voraussetzungen'
    ).fetch()
    const tandemflights = await $content('tandemfliegen', params.slug)
      .sortBy('order', 'asc')
      .fetch()
    return { index, prerequisites, tandemflights }
  },
}
</script>
