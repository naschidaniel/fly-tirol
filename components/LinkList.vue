<template>
  <div class="max-w-90 mx-auto 3xl:mr-6 2xl:ml-auto">
    <div class="flex flex-wrap 3xl:flex-nowrap">
      <div class="flex flex-col w-full 3xl:w-96 max-w-screen-sm shrink">
        <div class="mt-6">
          <h2 class="mb-6">
            <span
              class="text-lg font-heading font-medium flex flex-row items-center mb-2"
            >
              <span class="inline-block bg-brand w-7 h-0.75 mr-2"></span>
              <span class="inline-block"
                ><span v-if="isBikeAndFly">Bike&Fly.</span
                ><span v-else>Finde das richtige</span></span
              >
            </span>
            <span class="text-5xl font-heading font-bold"
              ><span v-if="isBikeAndFly">Festival Brixental</span
              ><span v-else>Angebot</span></span
            >
          </h2>
          <p class="text-lg leading-relaxed max-w-prose">
            <span v-if="isBikeAndFly">
              In Westendorf erwartet alle Bike- und Flugbegeisterten ein neues
              Highlight: das Bike and Fly Festival. Von 9. bis 11. August wird
              die Talstation der Alpenrosenbahn zum Treffpunkt für
              Abenteuerlustige und Freizeitsportler.</span
            >
            <span v-else
              >Egal ob du einmal das Gefühl der Freiheit bei einem Tandemflug in
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
const { isBikeAndFly } = useData()

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

const bikeAndFlyData = [
  {
    cardTitle: 'Programm',
    cardImage: '/media/programm/programm.jpg',
    description:
      'Das Festival bietet spannende Vorträge, Workshops und Konzerte zu aktuellen Themen. Informieren Sie sich über das Programm auf unserer Website.',
    to: '/programm',
  },
  {
    cardTitle: 'Packages',
    cardImage: '/media/packages/packages.jpg',
    description:
      'Das Festival bietet spannende Vorträge, Workshops und Konzerte zu aktuellen Themen. Informieren Sie sich über das Programm auf unserer Website.',
    to: '/packages',
  },
  {
    cardTitle: 'Partner',
    cardImage: '/media/partner/partner.jpg',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    to: '/partner',
  },
  {
    cardTitle: 'Kontakt',
    cardImage: '/media/kontakt.jpg',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    to: '/kontakt',
  },
]

const linkCardData = isBikeAndFly ? bikeAndFlyData : flyTirolData
</script>
