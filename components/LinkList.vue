<template>
  <div class="max-w-90 mx-auto 2xl:mr-6 2xl:ml-auto">
    <div class="flex flex-wrap 2xl:flex-nowrap">
      <div class="flex flex-col w-full 2xl:w-96 max-w-screen-sm flex-shrink-0">
        <div class="mt-6">
          <h2 class="mb-6">
            <span
              class="text-lg font-heading font-medium flex flex-row items-center mb-2"
            >
              <span class="inline-block bg-brand w-7 h-0.75 mr-2"></span>
              <span class="inline-block">Finde das richtige</span>
            </span>
            <span class="text-5xl font-heading font-bold">Angebot</span>
          </h2>
          <p class="text-lg leading-relaxed max-w-prose">
            Egal ob du einmal das Gefühl der Freiheit bei einem Tandemflug in
            den wunderschönen Kitzbüheler Alpen genießen möchtest, du selbst ein
            Paragleitpilot werden möchtest, deine vorhandenen Flugfähigkeiten
            ausbauen willst oder mit uns auf Flugreise gehen möchtest - wir
            haben genau das richtige für dich!
          </p>
        </div>
      </div>
      <div
        class="card--grid grid-gap-1 md:max-w-90 mx-auto py-4 w-full xl:py-12 xl:ml-4 2xl:flex"
      >
        <link-card
          :card-image="tandemflights.cardImage"
          :card-title="tandemflights.cardTitle"
          :description="tandemflights.description"
          :to="tandemflights.to"
        />
        <link-card
          :card-image="basicTrainings.cardImage"
          :card-title="basicTrainings.cardTitle"
          :description="basicTrainings.description"
          :to="basicTrainings.to"
        />
        <link-card
          :card-image="advancedTrainings.cardImage"
          :card-title="advancedTrainings.cardTitle"
          :description="advancedTrainings.description"
          :to="advancedTrainings.to"
        />
        <link-card
          :card-image="saftyTrainings.cardImage"
          :card-title="saftyTrainings.cardTitle"
          :description="saftyTrainings.description"
          :to="saftyTrainings.to"
        />
        <link-card
          :card-image="travels.cardImage"
          :card-title="travels.cardTitle"
          :description="travels.description"
          :to="travels.to"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import LinkCard from './LinkCard.vue'

export default defineComponent({
  components: {
    LinkCard,
  },
  data() {
    return {
      advancedTrainings: {
        cardTitle: 'Fortbildung',
        cardImage: '/media/fortbildung/fortbildung.jpg',
        description: 'Fortbildungen in der Flugschule Fly Tirol',
        to: '/fortbildung',
      },
      basicTrainings: {
        cardTitle: 'Ausbildung',
        cardImage: '/media/ausbildung/ausbildung.jpg',
        description: 'Schulungsbetrieb in der Flugschule Fly Tirol',
        to: '/ausbildung',
      },
      saftyTrainings: {
        cardTitle: 'Sicherheitstrainings',
        cardImage:
          '/media/sicherheitstrainings/sicherheitstraining-am-gardasee.jpg',
        description: 'Unsere Sicherheitstrainings mit Sebastian Kahn',
        to: '/sicherheitstrainings',
      },
      tandemflights: {
        cardTitle: 'Tandemflüge',
        cardImage: '/media/tandemfliegen/tandemfluege.jpg',
        description: 'Erlebe das Alpenpanorama aus der Vogelperspektive.',
        to: '/tandemfliegen',
      },
      travels: {
        cardTitle: 'Reisen',
        cardImage: '/media/reisen/paragliding_lago_de_garda.jpg',
        description: 'Geh mit uns auf Reise und besuche neue Fluggebiete',
        to: '/reisen',
      },
    }
  },
})
</script>
