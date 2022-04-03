<template>
  <div>
    <PageHeader
      pre-headline="Tandemhotline"
      headline="Kontakt"
      picture="/media/kontakt/mathias_holrieder.jpg"
      :link1="telefonNumber"
      :link2="mailAddress"
    >
      <div>
        <p>
          Wir haben dein Interesse an einem Tandemflug oder an einem Kurs
          geweckt?
        </p>
        <p>
          Dann Ruf uns einfach an oder schreibe uns eine Mail. Wir freuen uns
          auf dich!
        </p>
      </div>
    </PageHeader>
    <div
      class="max-w-90 mx-auto text-lg font-heading font-medium leading-snug nuxt-content"
    >
      <h2>Treffpunkt für Tandemflüge</h2>
      <div class="md:flex justify-center py-8 px-8">
        <div class="basis-1/2 flex">
          <outline-location-marker-icon class="w-5 h-5 mr-1 -mt-0.25" /><span
            class="mr-6"
            >Treffpunkt Söll</span
          >
        </div>
        <div class="basis-1/2 ml-6">
          Parkplatz Bergbahn Talstation, Stampfanger 21, A-6306 Söll
        </div>
      </div>
      <div class="h-0.75 bg-brand rounded-full w-full"></div>
      <div class="md:flex justify-center py-8 px-8">
        <div class="basis-1/2 flex">
          <outline-location-marker-icon class="w-5 h-5 mr-1 -mt-0.25" /><span
            class="mr-6"
            >Treffpunkt Hopfgarten</span
          >
        </div>
        <div class="basis-1/2 ml-6">
          Parkhaus und Parkplatz P1 Bergbahnen Hopfgarten - Hohe Salve,
          Meierhofgasse 29 A-6361 Hopfgarten im Brixental, Meierhofgasse 29
        </div>
      </div>
      <div class="h-0.75 bg-brand rounded-full w-full"></div>
      <div class="md:flex justify-center py-8 px-8">
        <div class="basis-1/2 flex">
          <outline-location-marker-icon class="w-5 h-5 mr-1 -mt-0.25" /><span
            class="mr-6"
            >Treffpunkt Hohe Salve</span
          >
        </div>
        <div class="basis-1/2 ml-6">
          Hohe Salve, Meierhofgasse 29, A-6361 Hopfgarten im Brixental,
        </div>
      </div>
    </div>
    <ContactMap map="/leaflet_de.html" class="mt-10" />
    <SocialBar />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useMetaTags } from '~/composable/useMetaTags'
import ContactMap from '~/components/ContactMap'
import SocialBar from '~/components/SocialBar'
import PageHeader from '~/components/PageHeader'
import OutlineLocationMarkerIcon from '~/components/icons/OutlineLocationMarkerIcon'

export default defineComponent({
  components: { ContactMap, SocialBar, OutlineLocationMarkerIcon, PageHeader },
  setup() {
    const { generateMetaTags, page } = useMetaTags()
    return { generateMetaTags, page }
  },
  data() {
    return {
      telefonNumber: {
        href: 'tel:004368181589568 ',
        name: '+43 681 81589568 ',
      },
      mailAddress: {
        href: 'mailto:info@white-cloud.tirol',
        name: 'info@white-cloud.tirol',
      },
    }
  },
  head() {
    const metatags = this.generateMetaTags(
      this.page.title,
      this.page.description,
      this.$route.fullPath
    )
    return { title: this.page.title, meta: metatags }
  },
})
</script>
