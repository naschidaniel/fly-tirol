<template>
  <div class="max-w-90 w-full mx-auto py-6">
    <Dsgvo class="nuxt-content" />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useMetaTags } from '~/composable/useMetaTags'
import Dsgvo from '~/content/dsgvo.vue'

export default defineComponent({
  components: { Dsgvo },
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
