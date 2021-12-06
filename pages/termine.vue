<template>
  <div>
    <PageHeader
      pre-headline="Kurse, Reisen, Sicherheitstrainings"
      :headline="title"
      picture="/media/termine/infinity_am_gardasee.jpg"
    >
      Finde den passenden Termin, für dein ganz besonderes Erlebniss in der
      Flugschule Westendorf. Wir freuen uns auf dich!
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6">
      <Calender />
    </div>
    <SocialBar
      :description="description"
      :title="title"
      :url="$route.fullPath"
      class="mt-12 lg:mt-36"
    />
  </div>
</template>

<script>
import Calender from '~/components/Calender.vue'
import SocialBar from '~/components/SocialBar.vue'
import PageHeader from '~/components/PageHeader.vue'
import { useMetaTags } from '~/composable/useMetaTags'

export default {
  components: { Calender, SocialBar, PageHeader },
  setup() {
    const { generateMetaTags } = useMetaTags()
    return { generateMetaTags }
  },
  data() {
    return {
      title: 'Termine',
      description:
        'Finde den richtigen Termin bei der Flugschule Fly-Tirol.com',
    }
  },
  head() {
    const metatags = this.generateMetaTags(
      this.title,
      this.description,
      this.$route.fullPath
    )
    return { title: 'Termine', meta: metatags }
  },
}
</script>
