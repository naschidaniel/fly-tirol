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
      <div>buildTime des Docker Images: {{ formatDateTime(buildTime) }}</div>
      <div>
        <div>
          <div class="inline">
            <h2 class="mt-2">Verwendete Softwarepaket und Lizenzinformation</h2>
          </div>
          <div
            v-for="license in licenses"
            id="license-list"
            :key="license.name"
            class="lg:inline"
          >
            <span class="whitespace-normal">
              <span class="font-bold">{{ license.name }}</span
              >&nbsp;–&nbsp;<span class="font-mono"
                >Version {{ license.version }}</span
              >&nbsp;–&nbsp;{{ license.license }} License<span
                class="hidden lg:inline license-spacer"
                >🞄</span
              >
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { generateMetatags } from '~/util/generateHeaderInformation'
import { useFormat } from '~/composable/useFormat.js'
import { useData } from '~/composable/useData'

export default defineComponent({
  setup() {
    const { buildTime } = useData()
    const { formatDateTime } = useFormat()
    const licenses = process.env.licenses
    return { buildTime, formatDateTime, licenses }
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
})
</script>

<style>
.license-spacer {
  margin-left: 0.5em;
  margin-right: 0.5em;
}
#license-list:last-child span .license-spacer {
  display: none;
}
</style>
