<template>
  <div>
    <PageHeader
      pre-headline="Die Geschichte der"
      headline="Flugschule Westendorf"
      picture="/media/team/flytirol_geschichte.jpg"
    >
      <Index />
      seine ersten eigenen Flüge.
    </PageHeader>
    <TeamList :members="members" />
    <SocialBar />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import SocialBar from '~/components/SocialBar.vue'
import PageHeader from '~/components/PageHeader.vue'
import TeamList from '~/components/TeamList.vue'
import Index from '~/content/team.vue'
import { useMetaTags } from '~/composable/useMetaTags'

export default defineComponent({
  components: { SocialBar, PageHeader, TeamList, Index },
  setup() {
    const { generateMetaTags, page } = useMetaTags()
    return { generateMetaTags, page }
  },
  data() {
    return {
      members: [
        {
          name: 'Sebastian Kahn',
          picture: '/media/team/sebastian.jpg',
          position:
            'Geschäftsführer, Ausbildungsleiter, staatlich geprüfter Fluglehrer, Tandempilot',
          information:
            'Team Weltmeister im Acro-Paragleiten 2014 und ausgezeichnet mit dem Österreichischen Eisernen Verdienstkreuz für sportliche Auszeichnungen, Synchron-Acrobatic-Paragleiten Vizeweltmeister mit seinem Cousin Ricky Kahn 2012, mehrfacher österreichischer Staatsmeister im Acro-Paragleiten, nationale und internationale Buchungen für Acro-Showflüge auf Events (Dolomitenmann, Ski-Weltcups, Natural Games…)',
        },
        {
          name: 'Stefan Bischofer',
          picture: '/media/team/stefan.jpg',
          position: 'Tandempilot',
          information: '',
        },
        {
          name: 'Bernhard Mimmler',
          picture: '/media/team/bernie.jpg',
          position: 'Tandempilot',
          information: '',
        },
      ],
    }
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
