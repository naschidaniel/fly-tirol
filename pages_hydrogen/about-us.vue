<template>
  <div>
    <PageHeader
      pre-headline="hydrogen-advisers.eu"
      headline="Strategic Advice for your Green Hydrogen Projects"
      picture="/media/about-us.jpg"
    >
    We are an advisory service to provide strategic advice to all actors seeking to advance their green hydrogen Agenda and to start roll-out.
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6">
      <AboutUs class="nuxt-content" />
    </div>
    <TeamList :members="members" />
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import PageHeader from '@/components/PageHeader.vue'
import TeamList from '@/components/TeamList.vue'
import AboutUs from '@/content_hydrogen/about-us.vue'
import type { TeamMember } from '~~/types/data'
import { useMetaTags } from '@/composable/useMetaTags'

useMetaTags()

const members: TeamMember[] = [
  {
    name: 'Christian WEINBERGER',
    picture: '/media/team/christian.png',
    position: 'Senior Advisor',
    information: '',
  },
  {
    name: 'Zhanna WEINBERGER',
    picture: '/media/team/zhanna.png',
    position: 'Assistant',
    information: '',
  },
  {
    name: 'Further partners',
    picture: '/media/team/partners.png',
    position: 'welcome',
    information: '',
  },
]
</script>
