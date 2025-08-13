<template>
  <div>
    <PageHeader
      pre-headline="Tandempoint Stubaital"
      headline="Kontakt"
      picture="/media/team/team.jpg"
      :link1="telefonNumber"
      :link2="mailAddress"
      :link3="tandemTelefonNumber"
      :link4="tandemmailAddress"
      :address="address"
    >
      <div class="nuxt-content">
        <p class="mt-10 text-lg leading-relaxed max-w-prose">
          Du willst einen Termin für einen Tandemflug vereinbaren oder hast eine
          generelle Frage bezüglich eines Tandemflugs? Dann zögere nicht und
          kontaktiere unsere Tandemhotline via Telefon oder Mail!
        </p>
        <div class="flex flex-wrap justify-center mt-6">
          <div class="flex p-2 w-5/6 md:w-1/3">
            <a
              v-if="tandemTelefonNumber"
              :href="tandemTelefonNumber.href"
              class="btn-primary btn--large w-full"
            >{{ tandemTelefonNumber.name }}</a>
          </div>
          <div class="flex p-2 w-5/6 md:w-1/3">
            <a
              v-if="address"
              :href="address.href"
              target="_blank"
              class="btn-primary btn--large w-full"
            >{{ address.name }}</a>
          </div>
          <div class="flex p-2 w-5/6 md:w-1/3">
            <a
              v-if="tandemmailAddress"
              :href="tandemmailAddress.href"
              class="btn-primary btn--large w-full"
            >{{ tandemmailAddress.name }}</a>
          </div>
        </div>
      </div>
    </PageHeader>
    <div class="max-w-90 mx-auto text-lg font-heading font-medium leading-snug">
      <div class="h-0.75 bg-brand rounded-full w-full" />
      <div class="flex justify-center py-8 px-8">
        <IconOutlineLocationMarker
          class="hidden md:block w-5 h-5 mr-1 -mt-0.25"
        />
        <span class="hidden md:block mr-6">Anschrift</span>
        TandemPoint.at - Gleitschirm Tandemflüge Stubaital | Moos 12 | A-6167
        Neustift im Stubaital | Tirol | Österreich
      </div>
      <div class="h-0.75 bg-brand rounded-full w-full" />
    </div>
    <ContactMap class="mt-10" />
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useMetaTags } from '@/composable/useMetaTags'
import IconOutlineLocationMarker from '@/components/icon/IconOutlineLocationMarker.vue'

const address = {
  href: 'https://www.google.com/maps/search/?api=1&query=47.099005,11.3270919,14.79z,Parkplatz+Elferlifte',
  name: 'Route',
}
const telefonNumber = {
  href: '',
  name: '',
}
const mailAddress = {
  href: '',
  name: '',
}
const tandemTelefonNumber = {
  href: 'tel:004369917280304',
  name: '+43 699 17280304',
}
const tandemmailAddress = {
  href: 'mailto:office@tandempoint.at',
  name: 'office@tandempoint.at',
}

useMetaTags()
</script>
