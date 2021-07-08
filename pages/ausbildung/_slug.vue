<template>
  <div class="max-w-90 mx-auto pt-8">
    <nuxt-content :document="page" />
    <button-contact />
    <product-variants />
  </div>
</template>

<script>
import ButtonContact from '~/components/ButtonContact.vue'
import ProductVariants from '~/components/ProductVariants.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { ButtonContact, ProductVariants },
  async asyncData({ $content, params }) {
    const page = await $content('ausbildung', params.slug).fetch()
    return { page }
  },
  head() {
    const metatags = generateMetatags(this.page.title, this.page.description)
    return { title: this.page.title, meta: metatags }
  },
}
</script>
