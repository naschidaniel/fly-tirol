<template>
  <div class="max-w-90 mx-auto 3xl:mr-6 2xl:ml-auto">
    <div class="flex flex-wrap 3xl:flex-nowrap">
      <div class="flex flex-col w-full 3xl:w-96 max-w-screen-sm shrink">
        <div class="mt-6">
          <h2 class="mb-6">
            <span
              class="text-lg font-heading font-medium flex flex-row items-center mb-2"
            >
              <span class="inline-block bg-brand w-7 h-0.75 mr-2" />
              <span class="inline-block"><span v-if="isBikeAndFly">Bike&Fly.</span><span v-else-if="isHydrogen">Interested In Learning</span><span v-else>Finde das richtige</span></span>
            </span>
            <span class="text-5xl font-heading font-bold"><span v-if="isBikeAndFly">Festival Brixental</span><span v-else-if="isHydrogen">MORE?</span><span v-else>Angebot</span></span>
          </h2>
          <p
            v-if="!isHydrogen"
            class="text-lg leading-relaxed max-w-prose"
          >
            <span v-if="isBikeAndFly">
              <p class="pb-2">
                Tauche ein in ein Wochenende voller Action, Abenteuer und guter
                Musik beim Bike and Fly Festival im malerischen Westendorf im
                Brixental. Dieses Event vereint die aufregende Welt des
                Mountainbikens mit der Freiheit des Gleitschirmfliegens und der
                Energie mitreißender Livemusik - DJs.
              </p>
              <p class="pb-2">
                Genieße die entspannte Atmosphäre, köstliche lokale
                Spezialitäten, großartige Livemusik - DJs, ein Bike und
                Gleitschirm-Testival und ein umfangreiches Programm für Klein
                und Groß.
              </p>
              <p class="pb-2">
                Verpasse nicht dieses unvergessliche Wochenende am 08. bis 10. August 2025 voller
                Adrenalin, Spaß und Musik!
              </p>
            </span>
            <span v-else>Egal ob du einmal das Gefühl der Freiheit bei einem Tandemflug in
              den wunderschönen Kitzbüheler Alpen genießen möchtest, du selbst
              ein Paragleitpilot werden möchtest, deine vorhandenen
              Flugfähigkeiten ausbauen willst oder mit uns auf Flugreise gehen
              möchtest - wir haben genau das richtige für dich!
            </span>
          </p>
        </div>
      </div>
      <div
        class="card--grid grid-gap-1 md:max-w-90 mx-auto py-4 w-full xl:py-12 xl:ml-4 3xl:flex"
      >
        <LinkCard
          v-for="item in linkCardData"
          :key="item.to"
          :card-image="item.cardImage"
          :card-title="item.cardTitle"
          :description="item.description"
          :to="item.to"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LinkCard from './LinkCard.vue'
import { useData } from '@/composable/useData'

const { isBikeAndFly, isFlyTirol, isHydrogen } = useData()

const flyTirolData = [
  {
    cardTitle: 'Tandemflüge',
    cardImage: '/media/tandemfliegen/tandemfluege.jpg',
    description: 'Erlebe das Alpenpanorama aus der Vogelperspektive.',
    to: '/tandemfliegen',
  },
  {
    cardTitle: 'Ausbildung',
    cardImage: '/media/ausbildung/ausbildung.jpg',
    description: 'Schulungsbetrieb in der Flugschule Fly Tirol',
    to: '/ausbildung',
  },
  {
    cardTitle: 'Fortbildung',
    cardImage: '/media/fortbildung/fortbildung.jpg',
    description: 'Fortbildungen in der Flugschule Fly Tirol',
    to: '/fortbildung',
  },
  {
    cardTitle: 'Sicherheitstrainings',
    cardImage: '/media/sicherheitstrainings/sicherheitstrainings.jpg',
    description: 'Unsere Sicherheitstrainings mit Sebastian Kahn',
    to: '/sicherheitstrainings',
  },
  {
    cardTitle: 'Acrotrainings',
    cardImage: '/media/acrotrainings/acrotrainings.jpg',
    description: 'Unsere Acrotrainings mit Sebastian Kahn',
    to: '/acrotrainings',
  },
  {
    cardTitle: 'Reisen',
    cardImage: '/media/reisen/paragliding_lago_de_garda.jpg',
    description: 'Geh mit uns auf Reise und besuche neue Fluggebiete',
    to: '/reisen',
  },
  {
    cardTitle: 'Service',
    cardImage: '/media/service/service.jpg',
    description: 'Dein Gleitschirm in besten Händen',
    to: '/service',
  },
]

const hydrogenData = [
  {
    cardTitle: 'ABOUT US',
    cardImage: '/media/team/christian.png',
    description:
      'We are an advisory service to provide strategic advice to all actors seeking to advance their green hydrogen Agenda and to start roll-out.',
    to: '/about-us',
  },
  {
    cardTitle: 'BASICS',
    cardImage: '/media/Rechteck-2.png',
    description:
      'This page provides links to basic documents in the hydrogen context. It includes both policy documents but also studies and fundamentals to learn more about the overall context of hydrogen.',
    to: '/basics',
  },
  {
    cardTitle: 'NEWS',
    cardImage: '/media/biel-morro-HCha-UHkIg8-unsplash-scaled.jpg',
    description:
      'This section lists important news items for the development of the hydrogen economies. It includes links to press releases, reports, company announcements, project proposals, news paper articles and the like.',
    to: '/news',
  },
  {
    cardTitle: 'FAQ',
    cardImage: '/media/general.jpg',
    description: ' What you always wanted to know about hydrogen.',
    to: '/faq',
  },
  {
    cardTitle: 'PARTNER',
    cardImage: '/media/chelsea-WvusC5M-TM8-unsplash-scaled.jpg',
    description: 'A list of partners with whom we realize projects.',
    to: '/partner',
  },
  {
    cardTitle: 'CONTACT',
    cardImage: '/media/martin-adams-a_PDPUPuNZ8-unsplash-scaled.jpg',
    description:
      'Do you have any questions about hydrogen? Would you like to give us feedback or just say hello? Get in touch with us and we will take care of your request!',
    to: '/contact',
  },
]

const linkCardData = isBikeAndFly
  ? []
  : isFlyTirol
    ? flyTirolData
    : hydrogenData
</script>
