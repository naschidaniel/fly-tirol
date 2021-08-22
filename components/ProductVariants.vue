<template>
  <div class="my-auto p-4 mt-4">
    <h2 class="font-bold">Termine</h2>
    <ul class="mb-2">
      <li v-for="variant in productVariants" :key="variant.id">
        {{ variant.title }}
      </li>
    </ul>
    <button class="btn-primary btn--large mt-4">
      <outline-chat-icon class="w-6 h-6" />
      <nuxt-link to="/kontakt" class="ml-4">Buchen</nuxt-link>
    </button>
  </div>
</template>

<script>
import OutlineChatIcon from './icons/OutlineChatIcon.vue'

export default {
  components: { OutlineChatIcon },
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
