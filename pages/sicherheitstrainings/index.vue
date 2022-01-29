<template>
  <div>
    <PageHeader pre-headline="Paragliding" headline="Sicherheitstrainings">
      <Index />
    </PageHeader>
    <ProductList />
    <SocialBar
      :description="page.description"
      :title="page.title"
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
import Index from '~/content/sicherheitstrainings/index.vue'
import { useMetaTags } from '~/composable/useMetaTags'

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
