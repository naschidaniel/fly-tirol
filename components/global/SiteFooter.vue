<template>
  <div class="text-center">
    <small class="text-sm text-blue-500 mr-6"> &#169; feel-Free.tirol </small>
    <nuxt-link to="/dsvgo">
      <small class="text-sm text-blue-500 mr-6"> DSVGO </small>
    </nuxt-link>
    <nuxt-link to="/impressum">
      <small class="text-sm text-blue-500 mr-6"> Impressum </small>
    </nuxt-link>
    <small class="text-sm text-blue-500 mr-6">
      Version: {{ NUXT_ENV_CURRENT_GIT_SHA }}
    </small>
  </div>
</template>

<script>
export default {
  data() {
    return { NUXT_ENV_CURRENT_GIT_SHA: process.env.NUXT_ENV_CURRENT_GIT_SHA }
  },
}
</script>
