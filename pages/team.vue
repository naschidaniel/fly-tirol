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
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import TeamList from '~/components/TeamList.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { PageHeader, TeamList },
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
          name: 'Jan Kuhnert',
          picture: '/media/team/jan.jpg',
          position: 'Geschäftsführer, kaufmännische Leitung und Management',
          information:
            'Jan hat im Jahr 2000 in der Flugschule Westendorf mit dem Fliegen angefangen und so seine Leidenschaft für das Paragleiten entdeckt.',
        },
        {
          name: 'Kilian Kuhnert',
          picture: '/media/team/kilian.jpg',
          position: 'Orginisation Tandemflüge und Ausbildung',
          information: 'Kilian ist im Shop für euch da!',
        },
        {
          name: 'Hanna Anselm',
          picture: '/media/team/hanna.jpg',
          position: 'Orginisation Tandemflüge und Ausbildung',
          information: 'Unsere starke Frau im Shop.',
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
