<template>
  <nuxt-link :to="to" class="btn-primary btn--large">
    {{ name }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    to: { type: String, required: true },
  },
}
</script>
