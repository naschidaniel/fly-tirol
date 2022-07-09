<template>
  <div>
    <div
      class="relative min-h-screen-60 md:min-h-screen-70 overflow-hidden flex flex-row lg:flex-col items-end lg:items-start mb-12"
    >
      <ResponsiveImage
        box-class="absolute top-0 bottom-0 left-0 right-0"
        img-class="object-cover object-center md:object-bottom lg:object-center w-full h-full"
        :is-lazy="false"
        :is-preload="true"
        picture="/media/FlyTirolHeader.jpg"
      />
      <div
        class="absolute h-40 bottom-0 left-0 right-0 bg-gradient-to-t from-white"
      ></div>
      <div
        class="relative max-w-90 mx-auto w-full lg:w-11/12 lg:mr-0 lg:ml-auto lg:py-24 z-10"
      >
        <div
          class="flex flex-col lg:w-96 max-w-screen-sm lg:shrink-0 -mt-24 md:mt-0"
        >
          <div class="mt-12 sm:mt-6">
            <h1 class="mb-6">
              <span
                class="text-lg font-heading font-medium flex flex-row items-center mb-2"
              >
                <span class="inline-block bg-brand w-7 h-0.75 mr-2"></span>
                <span class="inline-block">Fly Tirol Flugschule</span>
              </span>
              <span class="text-4xl lg:text-6xl font-heading font-bold">
                Flieg mit uns
              </span>
            </h1>
            <p class="text-lg leading-relaxed max-w-prose">
              Die Fly Tirol Flugschule in Westendorf ist dein Ansprechpartner
              rund um das Thema “Paragleiten” in den Kitzbüheler Alpen und
              darüber hinaus!
            </p>
          </div>
        </div>
      </div>
    </div>
    <LinkList />
    <SocialBar />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { useMetaTags } from '~/composable/useMetaTags'
import LinkList from '~/components/LinkList.vue'
import ResponsiveImage from '~/components/ResponsiveImage.vue'
import SocialBar from '~/components/SocialBar.vue'

export default defineComponent({
  components: { LinkList, ResponsiveImage, SocialBar },
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
