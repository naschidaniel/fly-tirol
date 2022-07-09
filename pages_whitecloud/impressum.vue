<template>
  <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
    <Impressum />
    <Version />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { useMetaTags } from '~/composable/useMetaTags'
import Impressum from '~/content_whitecloud/impressum.vue'
import Version from '~/components/Version.vue'

export default defineComponent({
  components: { Impressum, Version },
  setup() {
    const { generateMetaTags, page } = useMetaTags()
    return { generateMetaTags, page }
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
