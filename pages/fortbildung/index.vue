<template>
  <div>
    <PageHeader :pre-headline="preHeadline" :headline="title"
      >{{ description }}
    </PageHeader>
    <ProductList />
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
  data() {
    return {
      title: 'Fortbildung',
      description:
        'Du hast deinen A-Schein bereits und möchtest deine Fähigkeiten ausbauen? Ob Thermikfliegen oder Tandemschein, wir helfen dir dabei ein besserer Pilot zu werden!',
      preHeadline: 'Paragliding',
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
