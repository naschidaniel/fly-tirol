<template>
  <div>
    <nuxt-content :document="index" />
    <info-box :infobox="prerequisites" />
  </div>
</template>

<script>
import InfoBox from '~/components/InfoBox.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { InfoBox },
  async asyncData({ $content }) {
    const index = await $content('ausbildung', 'index').fetch()
    const prerequisites = await $content(
      'ausbildung',
      'voraussetzungen'
    ).fetch()
    return { index, prerequisites }
  },
  head() {
    const metatags = generateMetatags(
      this.index.title,
      this.index.description,
      this.$route.fullPath
    )
    return { title: this.index.title, meta: metatags }
  },
}
</script>
