<template>
  <nuxt-link class="btn-primary" :to="to" exact @click="toggleDropdown()">
    {{ name }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'NavigationNavbarCta',
  props: {
    name: { type: String, required: true },
    to: { type: String, required: true },
  },
  methods: {
    toggleDropdown() {
      this.$store.commit('toggleDropdown')
    },
  },
}
</script>
