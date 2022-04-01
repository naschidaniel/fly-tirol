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
    <div class="bg-[#1c9dd8] pt-5 pb-5 md:pt-10 md:pb-10">
      <div class="mx-auto max-w-80 text-center">
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
    <div class="max-w-90 mx-auto py-6 nuxt-content">
      <Index />
    </div>
    <ContentImageGallery path="/media/index/gallerie/" class="w-full lg:pl-8" />

    <div class="max-w-90 mx-auto nuxt-content">
      <h2><small>Ihr Pilot</small>Matthias<strong>Hohlrieder</strong></h2>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 pr-2">
          <p>
            Der Kindheitstraum vom Fliegen trieb mich vor über 10 Jahren in die
            Flugschule und die Begeisterung für den Flugsport steigt noch immer.
          </p>
          <p class="mt-2">
            Heute, nach mehr als 5000 unfallfreien Flügen und als staatlich
            geprüfter Tandempilot, möchte ich meine Eindrücke und Erlebnisse bei
            einem Gleitschirm-Tandemflug mit Ihnen teilen.
          </p>
        </div>
        <div class="w-full md:w-1/2 pl-2">
          <ResponsiveImage
            img-class="mb-2 object-contain rounded-lg mx-auto"
            picture="/media/kontakt/mathias_holrieder.jpg"
          />
        </div>
      </div>
    </div>

    <div class="max-w-90 mx-auto nuxt-content">
      <h2><small>Webcam</small>Gipfel<strong>Hohe Salve</strong></h2>
      <Webcam />
    </div>
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
import Webcam from '~/components/Webcam'

export default defineComponent({
  components: {
    ContentImageGallery,
    Index,
    ResponsiveImage,
    SocialBar,
    Webcam,
  },
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
