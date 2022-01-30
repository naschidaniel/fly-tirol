<template>
  <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
    <div v-if="page.slug == 'grundkurs'">
      <Grundkurs />
    </div>
    <div v-if="page.slug == 'hoehenflugkurs'">
      <Hoehenflugkurs />
    </div>
    <div v-if="page.slug == 'kombikurs'">
      <Kombikurs />
    </div>
    <div v-if="page.slug == 'paragleiterschein-theoriekurs'">
      <ParagleiterscheinTheoriekurs />
    </div>
    <div v-if="page.slug == 'schnupperkurs'">
      <Schnupperkurs />
    </div>
    <div v-if="page.slug == 'tagesbetreuung'">
      <Tagesbetreuung />
    </div>
    <ProductBookCourse :is-course="true" />
    <SocialBar />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import SocialBar from '~/components/SocialBar.vue'
import ProductBookCourse from '~/components/ProductBookCourse.vue'
import { useMetaTags } from '~/composable/useMetaTags'
import Grundkurs from '~/content/ausbildung/grundkurs.vue'
import Hoehenflugkurs from '~/content/ausbildung/hoehenflugkurs.vue'
import Kombikurs from '~/content/ausbildung/kombikurs.vue'
import ParagleiterscheinTheoriekurs from '~/content/ausbildung/paragleiterschein-theoriekurs.vue'
import Schnupperkurs from '~/content/ausbildung/schnupperkurs.vue'
import Tagesbetreuung from '~/content/ausbildung/tagesbetreuung.vue'

export default defineComponent({
  components: {
    Grundkurs,
    Hoehenflugkurs,
    Kombikurs,
    ParagleiterscheinTheoriekurs,
    ProductBookCourse,
    SocialBar,
    Schnupperkurs,
    Tagesbetreuung,
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
