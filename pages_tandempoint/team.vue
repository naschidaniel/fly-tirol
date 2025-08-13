<template>
  <div>
    <PageHeader
      pre-headline="Das Team von"
      headline="Tandempoint Stubaital"
      picture="/media/team/tandempoint.jpg"
    >
      Das Team von Tandempoint Stubaital besteht aus erfahrenen und zertifizierten Piloten, die dir ein sicheres und unvergessliches Flugerlebnis bieten. Unsere Leidenschaft für das Fliegen und die atemberaubende Landschaft des Stubaitals machen jeden Flug zu einem besonderen Abenteuer.
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
    name: 'Dominik Riegler',
    picture: '/media/team/dominik.jpg',
    position:
      'Geschäftsführer, Staatlich geprüfter Tandempilot',
    information:
      '',
  },
]
</script>
