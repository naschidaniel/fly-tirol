<template>
  <div>
    <h1 v-if="error.statusCode === 404">404 Page not found</h1>
    <h1 v-else>Es ist ein Fehler aufgetretten</h1>
    <NuxtLink to="/">zurück zur Startseite</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: ['error'],
}
</script>
