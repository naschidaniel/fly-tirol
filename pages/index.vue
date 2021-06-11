<template>
  <div>
    <nuxt-content :document="index" />
    <link-list
      :advanced-trainings="advancedTrainings"
      :basic-trainings="basicTrainings"
      :tandemflights="tandemflights"
      :safty-trainings="saftyTrainings"
    />
  </div>
</template>

<script>
import LinkList from '~/components/LinkList.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { LinkList },
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
        linkName: 'zu den Ausbildungen',
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
        cardImage: '/media/tandemfliegen/7_hohe-salve-westendorf.jpg',
        description: 'Unsere Tandemflüge',
        linkName: 'zu den Tandemflügen',
        to: '/tandemfliegen',
      },
    }
  },
  head() {
    const metatags = generateMetatags(this.index.title, this.index.description)
    return { title: this.index.title, meta: metatags }
  },
}
</script>
