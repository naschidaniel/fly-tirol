<template>
  <div>
    <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
      <div v-if="page.slug == 'hoehenflug'">
        <Hoehenflug />
      </div>
      <div v-if="page.slug == 'panoramaflug'">
        <Panoramaflug />
      </div>
      <div v-if="page.slug == 'tandemsafari'">
        <Tandemsafari />
      </div>
      <div v-if="page.slug == 'tandemflug-geschenkkarte'">
        <TandemflugGeschenkkarte />
      </div>
    </div>
    <div class="flex flex-wrap max-w-90 mx-auto py-12 lg:py-24">
      <div
        class="w-full lg:w-1/3 text-lg leading-relaxed max-w-prose nuxt-content"
      >
        <h2>Ablauf</h2>
        Treffpunkt ist unser Standort in Westendorf gegenüber der
        Alpenrosenbahn. Hier lernst du deinen Tandempiloten kennen. Mit der
        Gondel geht es dann zum Startplatz auf über 1800 m Seehöhe. Oben
        angekommen bekommst du nochmals Informationen zum Startvorgang und der
        Tandempilot checkt erneut alle nötigen Sicherheitsvorkehrungen, die für
        einen sicheren Flug notwendig sind. Mit nur wenigen Schritten hebt ihr
        dann gemeinsam in ein unvergessliches Erlebnis ab! Du kannst dich
        entspannt in das bequeme Gurtzeug zurücklehnen und den atemberaubenden
        Ausblick genießen! Möchtest du ein bisschen mehr Action erleben, fliegen
        unsere Tandempiloten auf Wunsch auch gerne einige Kunstflugmanöver mit
        dir.
      </div>
      <ContentImageGallery
        path="/media/tandemfliegen/galerie/"
        class="w-full lg:w-2/3 lg:pl-8"
      />
    </div>
    <div class="max-w-90 mx-auto -m-8 lg:py-8 nuxt-content">
      <h2>Dein Wunschtermin</h2>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 md:p-2">
          <Alert class="mt-2 mr-3">
            <div class="mx-1 md:my-2">
              <ol class="list-decimal">
                <li v-if="isAppointment">Wunschdatum auswählen</li>
                <li v-if="!isAppointment">Gutschein bestellen</li>
                <li v-if="!isAppointment">
                  Wir senden dir die Gutscheinkarte per Post zu.
                </li>
                <li>
                  Vereinbare dann einen Zeitpunkt telefonisch unter
                  <a
                    href="tel:00436766422088"
                    class="underline whitespace-nowrap"
                    >+43 6766422088</a
                  >
                  oder schreibe uns eine Email
                  <a
                    href="mailto:info@fly-tirol.com"
                    class="underline whitespace-nowrap"
                    >info@fly-tirol.com</a
                  >
                  oder per
                  <a
                    href="https://wa.me/436766422088"
                    target="_blank"
                    class="underline whitespace-nowrap"
                  >
                    WhatsApp </a
                  >.
                </li>
              </ol>
            </div>
          </Alert>
        </div>
        <div class="w-full mt-2 md:w-1/2 md:mt-0 md:p-2">
          <div class="mx-1 md:my-3">
            <div v-if="isAppointment">
              <ProductAppointment />
            </div>
            <div v-else>
              <ProductVariants :is-course="false" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <SocialBar />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Alert from '~/components/Alert.vue'
import ContentImageGallery from '~/components/ContentImageGallery.vue'
import SocialBar from '~/components/SocialBar.vue'
import ProductAppointment from '~/components/ProductAppointment.vue'
import { useMetaTags } from '~/composable/useMetaTags'
import Hoehenflug from '~/content/tandemfliegen/hoehenflug.vue'
import Panoramaflug from '~/content/tandemfliegen/panoramaflug.vue'
import TandemflugGeschenkkarte from '~/content/tandemfliegen/tandemflug-geschenkkarte.vue'
import Tandemsafari from '~/content/tandemfliegen/tandemsafari.vue'
import ProductVariants from '~/components/ProductVariants.vue'

export default defineComponent({
  components: {
    Alert,
    ContentImageGallery,
    SocialBar,
    ProductAppointment,
    ProductVariants,
    Hoehenflug,
    Panoramaflug,
    TandemflugGeschenkkarte,
    Tandemsafari,
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
  computed: {
    isAppointment() {
      return this.page.slug !== 'tandemflug-geschenkkarte'
    },
  },
})
</script>
