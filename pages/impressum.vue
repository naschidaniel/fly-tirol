<template>
  <div class="max-w-90 w-full mx-auto py-6">
    <nuxt-content :document="impressum" />
    <h2>Sourcecode der Webseite</h2>
    <div>
      Github Repository:
      <a href="https://github.com/naschidaniel/fly-tirol" target="_blank"
        >https://github.com/naschidaniel/fly-tirol</a
      >
    </div>
    <div>Buildtime des Docker Images: {{ NUXT_ENV_CURRENT_TIMESTAMP }}</div>
  </div>
</template>

<script>
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  async asyncData({ $content }) {
    const impressum = await $content('impressum').fetch()
    return { impressum }
  },
  data() {
    return {
      NUXT_ENV_CURRENT_TIMESTAMP:
        process.env.NUXT_ENV_CURRENT_TIMESTAMP || 'DEVELOPMENT',
    }
  },
  head() {
    const metatags = generateMetatags(
      this.impressum.title,
      this.impressum.description,
      this.$route.fullPath
    )
    return { title: this.impressum.title, meta: metatags }
  },
}
</script>
