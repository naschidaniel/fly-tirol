<template>
  <div>
    <nuxt-content :document="impressum" />
    <h2>Sourcecode der Webseite</h2>
    <div>
      Github Repository:
      <a href="https://github.com/naschidaniel/feelfree" target="_blank"
        >https://github.com/naschidaniel/feelfree</a
      >
    </div>
    <div>Version: {{ NUXT_ENV_CURRENT_GIT_SHA }}</div>
    <div>
      Buildtime:
      {{ NUXT_ENV_CURRENT_TIMESTAMP | formatDateTime }}
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const impressum = await $content('impressum').fetch()
    return { impressum }
  },
  data() {
    return {
      NUXT_ENV_CURRENT_GIT_SHA: process.env.NUXT_ENV_CURRENT_GIT_SHA,
      NUXT_ENV_CURRENT_TIMESTAMP: process.env.NUXT_ENV_CURRENT_TIMESTAMP,
    }
  },
}
</script>
