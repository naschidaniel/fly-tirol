<template>
  <div>
    <PageHeader pre-headline="Paragliding" :headline="title">
      {{ description }}
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
import { defineComponent } from '@vue/composition-api'
import SocialBar from '~/components/SocialBar.vue'
import PageHeader from '~/components/PageHeader.vue'
import ProductList from '~/components/ProductList.vue'
import { useMetaTags } from '~/composable/useMetaTags'

export default defineComponent({
  components: { SocialBar, ProductList, PageHeader },
  setup() {
    const { generateMetaTags } = useMetaTags()
    return { generateMetaTags }
  },
  async asyncData({ $content }) {
    const pages = await $content('sicherheitstrainings').sortBy('order').fetch()
    return { pages }
  },
  data() {
    return {
      title: 'Sicherheitstrainings',
      description:
        'Du bist bereits ein Paragleitpilot und besitzt den A-Schein oder den Paragleiterschein und möchtest optimal auf außergewöhnliche Flugsituationen vorbereitet werden? Dann fahr mit der Flugschule Fly Tirol an den wunderschönen Lago Di Garda um unter professioneller Anleitung von Sebastian Kahn Extremsituationen zu simulieren und diverse Abstiegshilfen wie z.B. die Steilspirale und den B-Stall zu lernen oder zu perfektionieren, um in Zukunft kritische Flugsituationen zu meistern oder vermeiden zu können.',
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
})
</script>
