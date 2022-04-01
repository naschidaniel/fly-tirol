<template>
  <div>
    <div
      class="relative min-h-screen-40 md:min-h-screen-50 overflow-hidden flex flex-row lg:flex-col items-end lg:items-start"
    >
      <ResponsiveImage
        img-class="object-cover object-center md:object-bottom lg:object-center w-full h-full"
        :is-lazy="false"
        picture="/media/index/gallerie/1.jpg"
      />
    </div>
    <div class="flex justify-center bg-[#1c9dd8] pt-5 pb-5 md:pt-10 md:pb-10">
      <div class="max-w-80 text-center">
        <p class="text-white text-lg md:text-xl">
          "Wenn du das Fliegen einmal erlebt hast, wirst du für immer auf Erden
          wandeln, mit deinen Augen himmelwärts gerichtet. Denn dort bist du
          gewesen und dort wird es dich immer wieder hinziehen."
        </p>
        <p class="text-gray-200 tracking-wider md:text-lg mt-2">
          Leonardo da Vinci
        </p>
      </div>
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
