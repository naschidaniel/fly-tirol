<template>
  <div>
    <nuxt-content :document="impressum" />
    <h2>Sourcecode der Webseite</h2>
    <div>
      Github Repository:
      <a href="https://github.com/naschidaniel/fly-tirol" target="_blank"
        >https://github.com/naschidaniel/fly-tirol</a
      >
    </div>
    <div>Version: {{ NUXT_ENV_CURRENT_GIT_SHA }}</div>
    <div>Buildtime: {{ buildtime | formatDateTime }}</div>
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
      NUXT_ENV_CURRENT_GIT_SHA: process.env.NUXT_ENV_CURRENT_GIT_SHA,
      buildtime: process.env.NUXT_ENV_CURRENT_TIMESTAMP * 1000,
    }
  },
  head() {
    const metatags = generateMetatags(
      this.impressum.title,
      this.impressum.description
    )
    return { title: this.impressum.title, meta: metatags }
  },
}
</script>
