<template>
  <div>
    <PageHeader
      pre-headline="Kurse, Reisen, Sicherheitstrainings"
      headline="Termine"
      picture="/media/termine/infinity_am_gardasee.jpg"
    >
      Finde den passenden Termin, für dein ganz besonderes Erlebniss in der
      Flugschule Westendorf. Wir freuen uns auf dich!
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6">
      <Calender />
    </div>
  </div>
</template>

<script>
import Calender from '~/components/Calender.vue'
import PageHeader from '~/components/PageHeader.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { Calender, PageHeader },
  head() {
    const metatags = generateMetatags(
      'Termine',
      'Finde den richtigen Termin bei der Flugschule Fly-Tirol.com',
      this.$route.fullPath
    )
    return { title: 'Termine', meta: metatags }
  },
}
</script>
