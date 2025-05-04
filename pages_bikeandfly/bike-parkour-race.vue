<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="BikeParkourRace"
      :picture="headerImage"
    >
      <p>
        Seid dabei, wenn wir am Freitag, den 07.08.2025 um 14:00 Uhr, unser aufregendes Fahrradrennen für Groß und Klein starten! Egal, ob ihr Anfänger oder erfahrene Radfahrer seid, unser Festival bietet für jede Altersgruppe die perfekte Herausforderung.
      </p>
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6">
      <BikeParkourRace class="nuxt-content" />
    </div>
    <div class="max-w-90 w-full mx-auto py-6">
      <h2 class="py-6">
        Anmeldeformular
      </h2>
      <p class="py-6">
        Hier könnt ihr euch für das Bike Parkour Rennen anmelden. Bitte füllt alle Felder aus und sendet das Formular mit euren Email-Client an <a :href="`mailto:${mail}`">{{ mail }}</a>. Wir freuen uns auf eure Teilnahme!
      </p>
      <RegistrationForm />
    </div>
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import RegistrationForm from '@/components/RegistrationForm.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useMetaTags } from '@/composable/useMetaTags'
import BikeParkourRace from '@/content_bikeandfly/bike-parkour-race.vue'
import { useMedia } from '@/composable/useMedia'
import { useData } from '@/composable/useData'

const { mail } = useData()
const { headerImage } = useMedia()
useMetaTags()
</script>
