<template>
  <div>
    <PageHeader :hero="hero" />
    <product-list :pages="pages" />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import ProductList from '~/components/ProductList.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { ProductList, PageHeader },
  async asyncData({ $content }) {
    const pages = await $content('reisen').sortBy('order').fetch()
    return { pages }
  },
  data() {
    return {
      title: 'Reisen',
      description: 'Reisen mit der Flugschule',
      hero: {
        pretitle: 'Paragliding',
        title: 'Reisen',
        intro:
          'Flieg mit uns im Urlaub! Kombiniere eine wunderschöne Reise mit deiner Leidenschaft fürs fliegen und lerne dabei von absoluten Profis dazu. Sieh dir unseren Reisekalender an und nutze die einmalige Möglichkeit wunderbare neue Landschaften aus der Vogelperspektive zu erkunden.',
      },
    }
  },
  head() {
    const metatags = generateMetatags(
      this.title,
      this.description,
      this.$route.fullPath
    )
    return { title: this.title, meta: metatags }
  },
}
</script>
