<template>
  <div>
    <div
      v-if="courses.length === 0"
      class="flex justify-center max-w-90 mx-auto py-4"
    >
      <span class="text-lg font-bold"
        >Vielen Dank für dein Interesse. Leider sind die Produkte noch nicht
        online. Gerne kannst du mit uns
        <nuxt-link class="underline" to="/kontakt">kontakt</nuxt-link>
        aufnehmen.</span
      >
    </div>
    <div v-else class="card--grid grid-gap-1 max-w-90 mx-auto py-4 md:py-12">
      <div v-for="course in courses" :key="course.handle">
        <product-card
          v-if="course.variants"
          class="p-4"
          :course="course"
          :slug="`${category}/${course.handle}`"
          :page="getPage(course.handle)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  components: { ProductCard },
  props: {
    pages: { type: Array, required: true },
  },
  computed: {
    category() {
      return this.$route.name
    },
    courses() {
      return this.category === 'ausbildung'
        ? this.$store.state.basicTrainings
        : this.category === 'fortbildung'
        ? this.$store.state.advancedTrainings
        : this.category === 'reisen'
        ? this.$store.state.travels
        : this.category === 'tandemfliegen'
        ? this.$store.state.tandemflights
        : this.category === 'sicherheitstrainings'
        ? this.$store.state.saftyTrainings
        : []
    },
  },
  methods: {
    getPage(handle) {
      return this.pages.find((p) => p.slug === handle)
    },
  },
}
</script>
