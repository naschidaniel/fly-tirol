<template>
  <div>
    <PageHeader
      pre-headline="Die Geschichte der"
      headline="Flugschule Westendorf"
      picture="/media/team/flytirol_geschichte.jpg"
    >
      Die Flugschule Westendorf wurde im Jahr 2021 von Sebastian Kahn und seinem
      Geschäftspartner Jan Kuhnert von seinem Onkel Otto Kahn übernommen und
      komplett neu gestaltet. So bekam die Flugschule einen neuen Namen und
      zusätzlich noch weitere Piloten und Fluglehrer ins Team. Otto Kahn hatte
      im Frühling 2005 die Flugschule Westendorf übernommen, die er seit den
      90er Jahren mit aufgebaut hat. Durch die Leidenschaft zum Paragleiten vom
      Onkel angesteckt, absolvierte Sebastian bereits im Alter von 12 Jahren
      seine ersten eigenen Flüge.
    </PageHeader>
    <TeamList :members="members" />
    <SocialBar
      :description="description"
      :title="title"
      :url="$route.fullPath"
      class="mt-12 lg:mt-36"
    />
  </div>
</template>

<script>
import SocialBar from '~/components/SocialBar.vue'
import PageHeader from '~/components/PageHeader.vue'
import TeamList from '~/components/TeamList.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { SocialBar, PageHeader, TeamList },
  data() {
    return {
      title: 'Team',
      description: 'Team der Flugschule',
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
    const metatags = generateMetatags(
      this.title,
      this.description,
      this.$route.fullPath
    )
    return { title: this.title, meta: metatags }
  },
}
</script>
