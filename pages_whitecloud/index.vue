<template>
  <div>
    <h1>WHITE-CLOUD Tandemflüge</h1>
    <ContentImageGallery
      path="/media/index/gallerie/"
      class="w-full lg:w-2/3 lg:pl-8"
    />
    <SocialBar />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useMetaTags } from '~/composable/useMetaTags'
import ContentImageGallery from '~/components/ContentImageGallery'
import SocialBar from '~/components/SocialBar'

export default defineComponent({
  components: { ContentImageGallery, SocialBar },
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
