<template>
  <div>
    <div>Tandemfliegen</div>
    <div v-for="flight in tandemflights" :key="flight.title">
      <flight
        :title="flight.title"
        :description="flight.description"
        :slug="flight.slug"
        :price="flight.price"
      />
    </div>
  </div>
</template>

<script>
import Flight from '@/components/Flight.vue'
export default {
  components: { Flight },
  async asyncData({ $content, params }) {
    const tandemflights = await $content({ deep: true }, params.slug)
      .where({ offer: 'tandem' })
      .fetch()
    return { tandemflights }
  },
}
</script>
