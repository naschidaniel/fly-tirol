<template>
  <div>
    <div
      v-if="pages.length === 0"
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
      <div v-for="page in pages" :key="page.title">
        <product-card
          class="p-4"
          :course="getCourse(page.slug)"
          :slug="`${category}/${page.slug}`"
          :page="page"
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
  methods: {
    getCourse(slug) {
      const category = this.$route.name
      const courses =
        category === 'ausbildung'
          ? this.$store.state.basicTrainings
          : category === 'fortbildung'
          ? this.$store.state.advancedTrainings
          : category === 'reisen'
          ? this.$store.state.travels
          : category === 'tandemfliegen'
          ? this.$store.state.tandemflights
          : category === 'sicherheitstrainings'
          ? this.$store.state.saftyTrainings
          : []
      return courses.find((p) => p.handle === slug)
    },
  },
}
</script>
