<template>
  <div>
    <div
      class="
        relative
        min-h-screen-60
        md:min-h-screen-70
        overflow-hidden
        flex flex-row
        lg:flex-col
        items-end
        lg:items-start
        mb-12
      "
    >
      <ResponsiveImage
        img-class="object-cover object-center md:object-bottom lg:object-center w-full h-full"
        picture="/media/ft_hero.jpg"
      />
      <div
        class="
          absolute
          h-40
          bottom-0
          left-0
          right-0
          bg-gradient-to-t
          from-white
        "
      ></div>
      <div
        class="
          relative
          max-w-90
          mx-auto
          w-full
          lg:w-11/12 lg:mr-0 lg:ml-auto lg:py-24
          z-10
        "
      >
        <div
          class="
            flex flex-col
            lg:w-96
            max-w-screen-sm
            lg:flex-shrink-0
            -mt-24
            md:mt-0
          "
        >
          <div class="mt-12 sm:mt-6">
            <h1 class="mb-6">
              <span
                class="
                  text-lg
                  font-heading font-medium
                  flex flex-row
                  items-center
                  mb-2
                "
              >
                <span class="inline-block bg-brand w-7 h-0.75 mr-2"></span>
                <span class="inline-block">Fly Tirol Flugschule</span>
              </span>
              <span class="text-4xl lg:text-6xl font-heading font-bold">
                Flieg mit uns
              </span>
            </h1>
            <p class="text-lg leading-relaxed max-w-prose">
              Die Fly Tirol Flugschule in Westendorf ist dein Ansprechpartner
              rund um das Thema “Paragleiten” in den Kitzbüheler Alpen und
              darüber hinaus!
            </p>
          </div>
        </div>
      </div>
    </div>
    <link-list
      :advanced-trainings="advancedTrainings"
      :basic-trainings="basicTrainings"
      :tandemflights="tandemflights"
      :safty-trainings="saftyTrainings"
      :travels="travels"
    />
  </div>
</template>

<script>
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
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
      title: 'Willkommen bei der Fly Tirol Flugschule',
      description:
        'Die Fly Tirol Flugschule in Westendorf ist dein Ansprechpartner rund um das Thema “Paragleiten” in den Kitzbüheler Alpen und darüber hinaus!',
    }
  },
  head() {
    const metatags = generateMetatags(
      this.title,
      this.description,
      this.$route.fullPath
    )
    return { title: this.title, meta: metatags }
  },
}
</script>
