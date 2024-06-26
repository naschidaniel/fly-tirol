<template>
  <div>
    <PageHeader
      pre-headline="Ausbildungs- und Tandemhotline"
      headline="Kontakt"
      picture="/media/team/team.jpg"
      :link1="telefonNumber"
      :link2="mailAddress"
      :link3="tandemTelefonNumber"
      :link4="tandemmailAddress"
      :address="address"
    >
      <div class="nuxt-content">
        <h2>Ausbildungshotline</h2>
        <p>
          Wir haben dein Interesse an einem Kurs, einer Flugreise oder an einem
          Sicherheitstraining geweckt? Du benötigst du nach dem Wiedereinstieg
          ins Fliegen ein Tagescoaching?
        </p>
        <p>
          Dann Ruf uns einfach an oder schreibe uns eine Mail. Wir freuen uns
          auf dich!
        </p>
        <div class="flex flex-wrap justify-center mt-6">
          <div class="flex p-2 w-5/6 md:w-1/3">
            <a
              :href="telefonNumber.href"
              class="btn-primary btn--large w-full"
            >{{ telefonNumber.name }}</a>
          </div>
          <div class="flex p-2 w-5/6 md:w-1/3">
            <a
              :href="mailAddress.href"
              class="btn-primary btn--large w-full"
            >{{
              mailAddress.name
            }}</a>
          </div>
          <div class="flex p-2 w-5/6 md:w-1/3">
            <a
              :href="address.href"
              class="btn-primary btn--large w-full"
            >{{
              address.name
            }}</a>
          </div>
        </div>
        <h2>Tandemhotline</h2>
        <p class="mt-10 text-lg leading-relaxed max-w-prose">
          Du willst einen Termin für einen Tandemflug vereinbaren oder hast eine
          generelle Frage bezüglich eines Tandemflugs? Dann zögere nicht und
          kontaktiere unsere Tandemhotline via Telefon oder Mail!
        </p>
        <div class="flex flex-wrap justify-center mt-6">
          <div class="flex p-2 w-5/6 md:w-1/2">
            <a
              v-if="tandemTelefonNumber"
              :href="tandemTelefonNumber.href"
              class="btn-primary btn--large w-full"
            >{{ tandemTelefonNumber.name }}</a>
          </div>
          <div class="flex p-2 w-5/6 md:w-1/2">
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
        Fly Tirol - Flugschule Kitzbühler Alpen | Bergliftstraße 22 | A-6363
        Westendorf | Tirol | Österreich
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
  href: 'https://www.google.com/maps/search/?api=1&query=47.427568476534546%2C12.213300968591906,Fly+Tirol+-+Flugschule+Kitzbüheler+Alpen',
  name: 'Route',
}
const telefonNumber = {
  href: 'tel:00436763931494',
  name: '+43 676 3931494',
}
const mailAddress = {
  href: 'mailto:info@fly-tirol.com ',
  name: 'info@fly-tirol.com',
}
const tandemTelefonNumber = {
  href: 'tel:00436766422088',
  name: '+43 676 6422088',
}
const tandemmailAddress = {
  href: 'mailto:tandem@fly-tirol.com ',
  name: 'tandem@fly-tirol.com',
}

useMetaTags()
</script>
