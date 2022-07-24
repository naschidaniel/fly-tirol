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
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import Calender from '@/components/Calender.vue'
import SocialBar from '@/components/SocialBar.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useMetaTags } from '@/composable/useMetaTags'

useMetaTags()
</script>
