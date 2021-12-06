<template>
  <div>
    <PageHeader pre-headline="Paragliding" :headline="title">
      Flieg mit uns im Urlaub! Kombiniere eine wunderschöne Reise mit deiner
      Leidenschaft fürs fliegen und lerne dabei von absoluten Profis dazu. Sieh
      dir unseren Reisekalender an und nutze die einmalige Möglichkeit
      wunderbare neue Landschaften aus der Vogelperspektive zu erkunden.
    </PageHeader>
    <ProductList :pages="pages" />
    <SocialBar
      :description="description"
      :title="title"
      :url="$route.fullPath"
      class="mt-12 lg:mt-36"
    />
  </div>
</template>

<script>
import SocialBar from '~/components/SocialBar.vue'
import PageHeader from '~/components/PageHeader.vue'
import ProductList from '~/components/ProductList.vue'
import { useMetaTags } from '~/composable/useMetaTags'

export default {
  components: { SocialBar, ProductList, PageHeader },
  setup() {
    const { generateMetaTags } = useMetaTags()
    return { generateMetaTags }
  },
  async asyncData({ $content }) {
    const pages = await $content('reisen').sortBy('order').fetch()
    return { pages }
  },
  data() {
    return {
      title: 'Reisen',
      description: 'Reisen mit der Flugschule Fly-Tirol.com',
    }
  },
  head() {
    const metatags = this.generateMetaTags(
      this.title,
      this.description,
      this.$route.fullPath
    )
    return { title: this.title, meta: metatags }
  },
}
</script>
