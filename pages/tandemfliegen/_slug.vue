<template>
  <div>
    <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
      <nuxt-content :document="page" />
      <div v-if="page.isAppointment">
        <div class="max-w-5xl">
          <Alert class="mt-6">
            <div class="my-2">
              Buche jetzt dein Wunschdatum und vereinbare dann einen Zeitpunkt
              unter <a href="tel:00436766422088">+43 6766422088</a> oder
              <a href="mailto:info@fly-tirol.com">info@fly-tirol.com</a>.
            </div>
          </Alert>
        </div>
        <h2>Buche deinen Wunschtermin</h2>
        <product-appointment />
      </div>
      <div v-else>
        <h2>Wähle deinen Flug</h2>
        <product-variants />
      </div>
    </div>
    <div
      v-if="page.flight"
      class="flex flex-wrap max-w-90 mx-auto py-12 lg:py-24"
    >
      <nuxt-content
        :document="index"
        class="w-full md:w-1/3 text-lg leading-relaxed max-w-prose"
      />
      <content-image-gallery
        path="/media/tandemfliegen/"
        class="w-full md:w-2/3 md:pl-8"
      />
    </div>
    <info-box v-if="page.flight" :infobox="prerequisites" />
  </div>
</template>

<script>
import Alert from '~/components/Alert.vue'
import ProductAppointment from '~/components/ProductAppointment.vue'
import ProductVariants from '~/components/ProductVariants.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { Alert, ProductAppointment, ProductVariants },
  async asyncData({ $content, params }) {
    const page = await $content('tandemfliegen', params.slug).fetch()
    const index = await $content('tandemfliegen', 'index').fetch()
    const prerequisites = await $content(
      'tandemfliegen',
      'voraussetzungen'
    ).fetch()
    return { index, page, prerequisites }
  },
  head() {
    const metatags = generateMetatags(
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
}
</script>
