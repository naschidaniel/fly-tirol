<template>
  <div>
    <PageHeader
      pre-headline="Die Geschichte der"
      headline="Flugschule Westendorf"
      picture="/media/team/flytirol_geschichte.jpg"
    >
      Die Flugschule Westendorf wurde im Jahr 2021 von Sebastian Kahn von seinem
      Onkel Otto Kahn übernommen und komplett neu gestaltet. So bekam die
      Flugschule einen neuen Namen und zusätzlich noch weitere Piloten und
      Fluglehrer ins Team. Otto Kahn hatte im Frühling 2005 die Flugschule
      Westendorf übernommen, die er seit den 90er Jahren mit aufgebaut hat.
      Durch die Leidenschaft zum Paragleiten vom Onkel angesteckt, absolvierte
      Sebastian bereits im Alter von 12 Jahren seine ersten eigenen Flüge.
    </PageHeader>
    <TeamList :members="members" />
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import PageHeader from '@/components/PageHeader.vue'
import TeamList from '@/components/TeamList.vue'
import type { TeamMember } from '~~/types/data'
import { useMetaTags } from '@/composable/useMetaTags'

useMetaTags()

const members: TeamMember[] = [
  {
    name: 'Sebastian Kahn',
    picture: '/media/team/sebastian.jpg',
    position:
      'Geschäftsführer, Ausbildungsleiter, Staatlich geprüfter Fluglehrer, Tandempilot',
    information:
      'Team Weltmeister im Acro-Paragleiten 2014 und ausgezeichnet mit dem Österreichischen Eisernen Verdienstkreuz für sportliche Auszeichnungen, Synchron-Acrobatic-Paragleiten Vizeweltmeister mit seinem Cousin Ricky Kahn 2012, mehrfacher österreichischer Staatsmeister im Acro-Paragleiten, nationale und internationale Buchungen für Acro-Showflüge auf Events (Dolomitenmann, Ski-Weltcups, Natural Games…)',
  },
  {
    name: 'Marc Lutz',
    picture: '/media/team/marc.jpg',
    position:
      'Staatlich geprüfter Fluglehrer, DHV Prüfer, Performancetrainer, Tandempilot',
    information: '',
  },
  {
    name: 'Martin Perdacher',
    picture: '/media/team/martin.jpg',
    position: 'Tandemkoordinator/-pilot, Social Media Manager',
    information: '',
  },
  {
    name: 'Roman Gartelgruber',
    picture: '/media/team/roman.jpg',
    position: 'Tandempilot',
    information: '',
  },
]
</script>
