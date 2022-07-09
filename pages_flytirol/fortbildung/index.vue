<template>
  <div>
    <PageHeader pre-headline="Paragliding" headline="Fortbildung">
      Du hast deinen A-Schein bereits und möchtest deine Fähigkeiten ausbauen?
      Ob Thermikfliegen oder Tandemschein, wir helfen dir dabei ein besserer
      Pilot zu werden!
    </PageHeader>
    <ProductList />
    <SocialBar />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import SocialBar from '~/components/SocialBar.vue'
import PageHeader from '~/components/PageHeader.vue'
import ProductList from '~/components/ProductList.vue'
import { useMetaTags } from '~/composable/useMetaTags'

export default defineComponent({
  components: { SocialBar, ProductList, PageHeader },
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
