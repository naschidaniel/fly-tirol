<template>
  <div>
    <div
      class="relative min-h-screen-40 md:min-h-screen-50 overflow-hidden flex flex-row lg:flex-col items-end lg:items-start mb-12"
    >
      <ResponsiveImage
        img-class="object-cover object-center md:object-bottom lg:object-center w-full h-full"
        :is-lazy="false"
        picture="/media/index/gallerie/1.jpg"
      />
    </div>
    <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
      <Index />
    </div>
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
import Index from '~/content_whitecloud/index.vue'
import ResponsiveImage from '~/components/ResponsiveImage'

export default defineComponent({
  components: { ContentImageGallery, Index, ResponsiveImage, SocialBar },
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
