<template>
  <div class="max-w-90 w-full mx-auto py-6">
    <nuxt-content :document="impressum" />
    <div class="nuxt-content">
      <h2 class="mt-2">Sourcecode der Webseite</h2>
      <div>
        Github Repository:
        <a href="https://github.com/naschidaniel/fly-tirol" target="_blank"
          >https://github.com/naschidaniel/fly-tirol</a
        >
      </div>
      <div>Buildtime des Docker Images: {{ formatDateTime(buildtime) }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { generateMetatags } from '~/util/generateHeaderInformation'
import { formatDateTime } from '~/util/formatDate'
import { useData } from '~/composable/useData'

export default defineComponent({
  setup() {
    const { buildtime } = useData()
    return { buildtime }
  },
  async asyncData({ $content }) {
    const impressum = await $content('impressum').fetch()
    return { impressum }
  },
  head() {
    const metatags = generateMetatags(
      this.impressum.title,
      this.impressum.description,
      this.$route.fullPath
    )
    return { title: this.impressum.title, meta: metatags }
  },
  methods: {
    formatDateTime,
  },
})
</script>
