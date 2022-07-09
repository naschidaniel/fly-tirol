<template>
  <div>
    <PageHeader
      pre-headline="Tandem- und Ausbidlungshotline"
      headline="Kontakt"
      picture="/media/team/team.jpg"
      :link1="telefonNumber"
      :link2="mailAddress"
      :address="address"
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
    <ContactMap map="/leaflet_de.html" class="mt-10" />
    <SocialBar />
  </div>
</template>

<script setup>
import ContactMap from '~/components/ContactMap'
import SocialBar from '~/components/SocialBar'
import PageHeader from '~/components/PageHeader'
import { useMetaTags } from '~/composable/useMetaTags'
import OutlineLocationMarkerIcon from '~/components/icons/OutlineLocationMarkerIcon'

const { generateMetaTags, page } = useMetaTags()

const address = {
  href: 'https://www.google.com/maps/search/?api=1&query=47.427568476534546%2C12.213300968591906,Fly+Tirol+-+Flugschule+Kitzbüheler+Alpen',
  name: 'Route',
}
const telefonNumber = {
  href: 'tel:00436766422088',
  name: '+43 676 6422088',
}
const mailAddress = {
  href: 'mailto:info@fly-tirol.com ',
  name: 'info@fly-tirol.com',
}

// TODO NUXT3
// head() {
//   const metatags = this.generateMetaTags(
//     this.page.title,
//     this.page.description,
//     this.$route.fullPath
//   )
//   return { title: this.page.title, meta: metatags }
// },
</script>
