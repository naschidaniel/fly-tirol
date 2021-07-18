<template>
  <div>
    <hero-one :hero="index.hero" />
    <link-list
      :advanced-trainings="advancedTrainings"
      :basic-trainings="basicTrainings"
      :tandemflights="tandemflights"
      :safty-trainings="saftyTrainings"
    />
  </div>
</template>

<script>
import HeroOne from '~/components/HeroOne.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { HeroOne },
  async asyncData({ $content }) {
    const index = await $content('index').fetch()
    return { index }
  },
  data() {
    return {
      advancedTrainings: {
        cardTitle: 'Fortbildung',
        cardImage: '/media/fortbildung/fortbildung.jpg',
        description: 'Fortbildungen in der Flugschule Fly Tirol',
        linkName: 'zu den Fortbildungen',
        to: '/fortbildung',
      },
      basicTrainings: {
        cardTitle: 'Ausbildung',
        cardImage: '/media/ausbildung/grundausbildung/uebungshang.jpg',
        description: 'Schulungsbetrieb in der Flugschule Fly Tirol',
        linkName: 'zu den Ausbildungen',
        to: '/ausbildung',
      },
      saftyTrainings: {
        cardTitle: 'Sicherheitstrainings',
        cardImage:
          '/media/sicherheitstrainings/sicherheitstraining-gardasee/infinit-gardasee.jpg',
        description: 'Unsere Sicherheitstrainings mit Sebastian Kahn',
        linkName: 'zu den Sicherheitstrainings',
        to: '/sicherheitstrainings',
      },
      tandemflights: {
        cardTitle: 'Tandemflüge',
        cardImage: '/media/tandemfliegen/8_Bischae-TakeOff_3.jpg',
        description: 'Erlebe das Alpenpanorama aus der Vogelperspektive.',
        linkName: 'zu den Tandemflügen',
        to: '/tandemfliegen',
      },
    }
  },
  head() {
    const metatags = generateMetatags(
      this.index.title,
      this.index.description,
      this.$route.fullPath
    )
    return { title: this.index.title, meta: metatags }
  },
}
</script>
