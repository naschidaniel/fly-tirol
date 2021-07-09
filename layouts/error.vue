<template>
  <div>
    <h1 v-if="error.statusCode === 404">404 Page not found</h1>
    <h1 v-else>Es ist ein Fehler aufgetretten</h1>
    <nuxt-link to="/">zurück zur Startseite</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => {
        return {
          error: {
            statusCode: 404,
          },
        }
      },
      required: false,
    },
  },
}
</script>
