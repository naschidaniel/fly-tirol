<template>
  <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
    <Impressum />
    <div>
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
import { useMetaTags } from '~/composable/useMetaTags'
import { useData } from '~/composable/useData'
import { useFormat } from '~/composable/useFormat'
import Impressum from '~/content/impressum.vue'

export default defineComponent({
  components: { Impressum },
  setup() {
    const { generateMetaTags, page } = useMetaTags()
    const { buildTime } = useData()
    const { formatDateTime } = useFormat()
    const licenses = process.env.licenses
    return { buildTime, formatDateTime, generateMetaTags, licenses, page }
  },
  head() {
    const metatags = this.generateMetaTags(
      this.page.title,
      this.page.description,
      this.$route.fullPath
    )
    return { title: this.page.title, meta: metatags }
  },
})
</script>

<style scoped>
.license-spacer {
  margin-left: 0.5em;
  margin-right: 0.5em;
}
#license-list:last-child span .license-spacer {
  display: none;
}
</style>
