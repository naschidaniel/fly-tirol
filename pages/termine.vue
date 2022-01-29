<template>
  <div>
    <PageHeader
      pre-headline="Kurse, Reisen, Sicherheitstrainings"
      headline="Termine"
      picture="/media/termine/infinity_am_gardasee.jpg"
    >
      <Index />
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6">
      <Calender />
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
import Calender from '~/components/Calender.vue'
import SocialBar from '~/components/SocialBar.vue'
import PageHeader from '~/components/PageHeader.vue'
import Index from '~/content/termine.vue'
import { useMetaTags } from '~/composable/useMetaTags'

export default defineComponent({
  components: { Calender, SocialBar, PageHeader, Index },
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
