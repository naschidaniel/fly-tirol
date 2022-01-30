<template>
  <div>
    <PageHeader pre-headline="Paragliding" headline="Fortbildung">
      <Index />
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
import Index from '~/content/fortbildung/index.vue'

export default defineComponent({
  components: { SocialBar, ProductList, PageHeader, Index },
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
