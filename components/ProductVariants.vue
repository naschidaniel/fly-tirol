<template>
  <div class="m-4">
    Termine
    <ul>
      <li v-for="variant in productVariants" :key="variant.id">
        {{ variant.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    productVariants() {
      const products = this.$store.state.products.filter(
        (p) => p.handle === this.$route.params.slug
      )
      return products[0]?.variants
    },
  },
}
</script>
