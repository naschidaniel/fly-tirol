<template>
  <div class="max-w-90 mx-auto pb-12">
    <div class="relative flex w-11/12 ml-auto pt-8 pb-4 2xl:pb-12 z-10">
      <div class="flex flex-col max-w-96 max-w-screen-sm shrink-0">
        <div class="">
          <h2 class="mb-6">
            <span
              class="text-lg font-heading font-medium flex flex-row items-center mb-2"
            >
              <span class="inline-block bg-brand w-7 h-0.75 mr-2" />
              <span
                v-if="isFlyTirol"
                class="inline-block"
              >Dein Fly Tirol</span>
              <span
                v-else
                class="inline-block"
              >hydrogen-adviesers.eu</span>
            </span>
            <span class="text-5xl font-heading font-bold">Team</span>
          </h2>
        </div>
      </div>
    </div>
    <div class="card--grid grid-gap-2 w-full">
      <div
        v-for="member in members"
        :key="member.name"
      >
        <TeamMemberCard
          v-if="member.name"
          :member="member"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { TeamMember } from '@/types/data'
import { useData } from '~/composable/useData'

const { isFlyTirol } = useData()

defineProps({
  members: { type: Array as PropType<TeamMember[]>, required: true },
})
</script>
