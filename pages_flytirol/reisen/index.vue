<template>
  <div>
    <PageHeader pre-headline="Paragliding" headline="Reisen">
      Flieg mit uns im Urlaub! Kombiniere eine wunderschöne Reise mit deiner
      Leidenschaft fürs fliegen und lerne dabei von absoluten Profis dazu. Sieh
      dir unseren Reisekalender an und nutze die einmalige Möglichkeit
      wunderbare neue Landschaften aus der Vogelperspektive zu erkunden.
    </PageHeader>
    <ProductList />
    <SocialBar />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
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
