<template>
  <div v-if="page.slug != ''" class="max-w-90 w-full mx-auto pt-8 nuxt-content">
    <div v-if="page.slug == 'tandemkurs'">
      <Tandemkurs />
    </div>
    <ProductVariants :is-course="true" :page="page" />
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
import { useMetaTags } from '~/composable/useMetaTags'
import ProductVariants from '~/components/ProductVariants.vue'
import SocialBar from '~/components/SocialBar.vue'
import Tandemkurs from '~/content/fortbildung/tandemkurs.vue'

export default defineComponent({
  components: { ProductVariants, SocialBar, Tandemkurs },
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
