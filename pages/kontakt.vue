<template>
  <div>
    <div class="relative overflow-hidden w-full">
      <div
        class="
          relative
          flex flex-wrap
          lg:w-11/12 lg:maxw-90 lg:mr-0 lg:ml-auto lg:pt-8
          pb-12
          2xl:pb-24
        "
      >
        <div
          v-if="hero.image"
          class="
            relative
            w-full
            aspect-w-1 aspect-h-1
            overflow-hidden
            bg-gray-200
            lg:mt-20 lg:aspect-w-3 lg:aspect-h-1 lg:order-2 lg:ml-8
          "
        >
          <responsive-image
            img-class="object-cover object-top w-full h-full"
            picture="/media/team/team.jpg"
          />
          <span
            class="
              hidden
              lg:absolute
              bg-white
              lg:rounded-t-4xl
              left-0
              -top-20
              right-0
              bottom-0
              -skew-y-6
              lg:block
              lg:bottom-0
              lg:w-48
              lg:h-full
              lg:top-0
              lg:-left-28
              lg:-skew-x-12
              lg:skew-y-0
              lg:rounded-r-4xl
              transform
            "
          ></span>
        </div>
        <div class="relative w-full">
          <span
            class="
              block
              absolute
              bg-white
              rounded-t-4xl
              left-0
              -top-20
              right-0
              bottom-0
              -skew-y-6
              lg:bottom-0
              lg:w-48
              lg:h-full
              lg:top-0
              lg:-left-28
              lg:-skew-x-12
              lg:skew-y-0
              lg:rounded-r-4xl
              transform
              lg:hidden
            "
          ></span>
          <div
            class="
              relative
              flex flex-col
              max-w-90
              mx-auto
              lg:max-w-screen-sm lg:flex-shrink-0 lg:mx-0
              z-20
            "
          >
            <div class="mt-6">
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
                  <span class="inline-block"
                    >Tandem- und Ausbidlungshotline</span
                  >
                </span>
                <span class="text-4xl lg:text-6xl font-heading font-bold">
                  Kontakt
                </span>
              </h1>
              <p class="text-lg leading-relaxed max-w-prose">
                Wir haben dein Interesse an einem Tandemflug oder an einem Kurs
                geweckt? Dann Ruf uns einfach an oder schreibe uns eine Mail.
                Wir freuen uns auf dich!
              </p>
              <div class="flex flex-wrap mt-6 lg:space-x-4">
                <a
                  href="tel:00436766422088"
                  class="btn-primary btn--large mr-2 self-end"
                >
                  +43 676 6422088
                </a>
                <a
                  href="mailto:info@fly-tirol.com"
                  class="btn-primary btn--large mt-6 sm:mt-0 self-end"
                >
                  info@fly-tirol.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-90 mx-auto text-lg font-heading font-medium leading-snug">
      <div class="h-0.75 bg-brand rounded-full w-full"></div>
      <div class="flex justify-center py-8 px-8">
        <outline-location-marker-icon
          class="hidden md:block w-5 h-5 mr-1 -mt-0.25"
        />
        <span class="hidden md:block mr-6">Anschrift</span>
        Fly Tirol - Flugschule Kitzbühler Alpen | Bergliftstraße 22 | A-6363
        Westendorf | Tirol | Österreich
      </div>
      <div class="h-0.75 bg-brand rounded-full w-full"></div>
    </div>
  </div>
</template>

<script>
import { generateMetatags } from '~/util/generateHeaderInformation'
import OutlineLocationMarkerIcon from '~/components/icons/OutlineLocationMarkerIcon.vue'

export default {
  components: { OutlineLocationMarkerIcon },
  data() {
    return {
      title: 'Kontakt',
      description: 'Unsere Kontaktdaten',
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
