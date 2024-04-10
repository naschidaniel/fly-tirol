<template>
  <div>
    <PageHeader
      pre-headline="hydrogen-advisers.eu"
      headline="Strategic Advice for your Green Hydrogen Projects"
      picture="/media/chelsea-WvusC5M-TM8-unsplash-scaled.jpg"
    >
      We are an advisory service to provide strategic advice to all actors
      seeking to advance their green hydrogen Agenda and to start roll-out.
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6">
      <TeamList :members="members" />
      <AboutUs class="nuxt-content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import TeamList from '@/components/TeamList.vue'
import AboutUs from '@/content_hydrogen/about-us.vue'
import type { TeamMember } from '~~/types/data'
import { useMetaTags } from '@/composable/useMetaTags'

useMetaTags()

const members: TeamMember[] = [
  {
    name: 'Christian WEINBERGER',
    picture: '/media/team/christian_optimized.jpg',
    position: 'Senior Advisor',
    information: '',
  },
  {
    name: 'Dr. Nikolaus WEINBERGER',
    picture: '/media/team/nikolaus_optimized.jpg',
    position: 'Solar-PV und Renewable Energy expert',
    information: '',
  },
  {
    name: 'Olivier BUCHELI',
    picture: '/media/team/olivier_optimized.jpg',
    position: 'Electrolyser and fuel cell technology expert',
    information: '',
  },
  {
    name: 'Further partners',
    picture: '/media/team/partners_optimized.jpg',
    position: 'welcome',
    information: '',
  },
]
</script>
