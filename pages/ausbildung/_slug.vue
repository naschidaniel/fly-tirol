<template>
  <div class="max-w-90 mx-auto pt-8">
    <nuxt-content :document="page" />
    <button-calendar />
    <button-contact />
  </div>
</template>

<script>
import ButtonCalendar from '~/components/ButtonCalendar.vue'
import ButtonContact from '~/components/ButtonContact.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { ButtonCalendar, ButtonContact },
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
