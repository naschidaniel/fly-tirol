<template>
  <div v-if="page.slug != ''" class="max-w-90 w-full mx-auto pt-8 nuxt-content">
    <div v-if="page.slug == 'b-schein'">
      <BSchein />
    </div>
    <div v-if="page.slug == 'tandemkurs'">
      <Tandemkurs />
    </div>
    <div v-if="page.slug == 'thermikfliegen'">
      <Thermikfliegen />
    </div>
    <ProductBookCourse :is-course="true" />
    <SocialBar />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { useMetaTags } from '~/composable/useMetaTags'
import ProductBookCourse from '~/components/ProductBookCourse.vue'
import SocialBar from '~/components/SocialBar.vue'
import BSchein from '~/content_flytirol/fortbildung/b-schein.vue'
import Tandemkurs from '~/content_flytirol/fortbildung/tandemkurs.vue'
import Thermikfliegen from '~/content_flytirol/fortbildung/thermikfliegen.vue'

export default defineComponent({
  components: {
    BSchein,
    ProductBookCourse,
    SocialBar,
    Tandemkurs,
    Thermikfliegen,
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
