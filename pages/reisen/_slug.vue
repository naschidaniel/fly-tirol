<template>
  <div>
    <nuxt-content :document="page" />
    <button-contact />
  </div>
</template>

<script>
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  async asyncData({ $content, params }) {
    const page = await $content('reisen', params.slug).fetch()
    return { page }
  },
  head() {
    const metatags = generateMetatags(this.page.title, this.page.description)
    return { title: this.page.title, meta: metatags }
  },
}
</script>
