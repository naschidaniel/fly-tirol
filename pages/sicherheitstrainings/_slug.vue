<template>
  <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
    <div v-if="page.slug == 'sicherheitstraining-am-gardasee'">
      <SicherheitstrainingAmGardasee />
    </div>
    <div v-if="page.slug == 'sicherheitstraining-in-oeluedeniz'">
      <SicherheitstrainingInOelideniz />
    </div>
    <ProductBookCourse :is-course="true" />
    <SocialBar />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useMetaTags } from '~/composable/useMetaTags'
import SocialBar from '~/components/SocialBar.vue'
import ProductBookCourse from '~/components/ProductBookCourse.vue'
import SicherheitstrainingAmGardasee from '~/content/sicherheitstrainings/sicherheitstraining-am-gardasee.vue'
import SicherheitstrainingInOelideniz from '~/content/sicherheitstrainings/sicherheitstraining-in-oeluedeniz.vue'

export default defineComponent({
  components: {
    SocialBar,
    ProductBookCourse,
    SicherheitstrainingAmGardasee,
    SicherheitstrainingInOelideniz,
  },
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
