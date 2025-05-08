<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="BikeParkourRace"
      :picture="headerImage"
    >
      <p>
        Seid dabei, wenn wir am Freitag, den 08.08.2025 um 14:00 Uhr, unser aufregendes Fahrradrennen für Groß und Klein starten! Egal, ob ihr Anfänger oder erfahrene Radfahrer seid, unser Festival bietet für jede Altersgruppe die perfekte Herausforderung.
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
        Hier könnt ihr euch für das Bike Parkour Rennen anmelden. Bei Fragen meldet euch bitte bei <a :href="`mailto:${mail}`">{{ mail }}</a>. Wir freuen uns auf eure Teilnahme!
      </p>
      <p class="py-2">
        Bitte überweisen Sie vorarb das Nenngeld von 15 Euro auf das Konto:<br>
        Bike&Fly Sport&Musik<br>
        Iban: AT04 2050 5000 0033 4615<br>
        BIC: SPKIAT2KXXX<br>
        Verwendungszweck: Bike Parkour Rennen [[Namen]]<br>
      </p>
      <p class="py-2">
        Entscheidest du dich dein Nenngeld vor Ort zu bezahlen, dann beträgt das Nenngeld 20 Euro.
      </p>
      <RegistrationForm class="my-6" />
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
