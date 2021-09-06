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
    const pages = await $content('fortbildung').sortBy('order').fetch()
    return { pages }
  },
  data() {
    return {
      title: 'Fortbildung',
      description:
        'Du hast deinen A-Schein bereits und möchtest deine Fähigkeiten ausbauen? Ob Thermikfliegen oder Tandemschein, wir helfen dir dabei ein besserer Pilot zu werden!',
      hero: {
        pretitle: 'Paragliding',
        title: 'Fortbildung',
        intro:
          'Du hast deinen A-Schein bereits und möchtest deine Fähigkeiten ausbauen? Ob Thermikfliegen oder Tandemschein, wir helfen dir dabei ein besserer Pilot zu werden!',
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
