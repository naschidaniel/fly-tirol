<template>
  <div>
    <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
      <nuxt-content :document="page" />
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
      <div v-if="page.isAppointment">
        <h2>Dein Wunschtermin</h2>
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 md:p-2">
            <Alert class="mt-2 mr-3">
              <div class="mx-1 md:my-2">
                Buche jetzt dein Wunschdatum und vereinbare dann einen Zeitpunkt
                telefonisch unter
                <a href="tel:00436766422088" class="underline whitespace-nowrap"
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
              </div>
            </Alert>
          </div>
          <div class="w-full mt-2 md:w-1/2 md:mt-0 md:p-2">
            <div class="mx-1 md:my-3">
              <ProductAppointment />
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <ProductVariants :is-course="false" :page="page" />
      </div>
    </div>
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
import Alert from '~/components/Alert.vue'
import SocialBar from '~/components/SocialBar.vue'
import ProductAppointment from '~/components/ProductAppointment.vue'
import ProductVariants from '~/components/ProductVariants.vue'
import { useMetaTags } from '~/composable/useMetaTags'

export default defineComponent({
  components: { Alert, SocialBar, ProductAppointment, ProductVariants },
  setup() {
    const { generateMetaTags } = useMetaTags()
    return { generateMetaTags }
  },
  async asyncData({ $content, params }) {
    const page = await $content('tandemfliegen', params.slug).fetch()
    return { page }
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
      return this.page.isAppointment || false
    },
  },
})
</script>
