<template>
  <div>
    <hero-two :hero="hero" />
    <product-list :pages="pages" />
  </div>
</template>

<script>
import HeroTwo from '~/components/HeroTwo.vue'
import ProductList from '~/components/ProductList.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { ProductList, HeroTwo },
  async asyncData({ $content }) {
    const pages = await $content('sicherheitstrainings').sortBy('order').fetch()
    return { pages }
  },
  data() {
    return {
      title: 'Sicherheitstrainings',
      description:
        'Du bist bereits ein Paragleitpilot und besitzt den A-Schein oder den Paragleiterschein und möchtest optimal auf außergewöhnliche Flugsituationen vorbereitet werden? Dann fahr mit der Flugschule Fly Tirol an den wunderschönen Lago Di Garda um unter professioneller Anleitung von Sebastian Kahn Extremsituationen zu simulieren und diverse Abstiegshilfen wie z.B. die Steilspirale und den B-Stall zu lernen oder zu perfektionieren, um in Zukunft kritische Flugsituationen zu meistern oder vermeiden zu können.',
      hero: {
        pretitle: 'Paragliding',
        title: 'Sicherheitstrainings',
        intro:
          'Du bist bereits ein Paragleitpilot und besitzt den A-Schein oder den Paragleiterschein und möchtest optimal auf außergewöhnliche Flugsituationen vorbereitet werden? Dann fahr mit der Flugschule Fly Tirol an den wunderschönen Lago Di Garda um unter professioneller Anleitung von Sebastian Kahn Extremsituationen zu simulieren und diverse Abstiegshilfen wie z.B. die Steilspirale und den B-Stall zu lernen oder zu perfektionieren, um in Zukunft kritische Flugsituationen zu meistern oder vermeiden zu können.',
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
