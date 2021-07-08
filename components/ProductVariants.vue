<template>
  <div class="m-4 my-auto">
    <h2 class="font-bold">Termine</h2>
    <ul>
      <li v-for="variant in productVariants" :key="variant.id">
        {{ variant.title }}
      </li>
    </ul>
    <button-contact />
  </div>
</template>

<script>
import ButtonContact from '~/components/ButtonContact.vue'

export default {
  components: { ButtonContact },
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
