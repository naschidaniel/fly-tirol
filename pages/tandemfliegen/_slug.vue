<template>
  <div>
    <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
      <nuxt-content :document="page" />
      <div v-if="page.isAppointment">
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
import { generateMetatags } from '~/util/generateHeaderInformation'
import ProductAppointment from '~/components/ProductAppointment.vue'
import ProductVariants from '~/components/ProductVariants.vue'

export default {
  components: { ProductAppointment, ProductVariants },
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
