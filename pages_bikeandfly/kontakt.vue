<template>
  <div>
    <PageHeader
      pre-headline="Infohotline"
      headline="Kontakt"
      :picture="headerImage"
      :link1="telefonNumber"
      :link2="mailAddress"
      :address="address"
    >
      <div class="nuxt-content">
        <p>
          Hast du Fragen zum Festival? Du möchtest uns Feedback geben oder
          möchtest du einfach nur Hallo sagen? Melde dich bei uns und wir werden
          uns um dein Anliegen kümmern!
        </p>
        <p>
          Ruf uns einfach an oder schreibe uns eine Mail. Wir freuen uns auf
          dich!
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
      </div>
    </PageHeader>
    <div class="max-w-90 mx-auto text-lg font-heading font-medium leading-snug">
      <div class="h-0.75 bg-brand rounded-full w-full" />
      <div class="flex justify-center py-8 px-8">
        <IconOutlineLocationMarker
          class="hidden md:block w-5 h-5 mr-1 -mt-0.25"
        />
        <span class="hidden md:block mr-6">Anschrift</span>
        Bike&Fly. Festival Westendorf | Bergliftstraße 22 | A-6363 Westendorf |
        Tirol | Österreich
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
import { useMedia } from '@/composable/useMedia'

const { headerImage } = useMedia()
const address = {
  href: 'https://www.google.com/maps/search/?api=1&query=47.427568476534546%2C12.213300968591906,Bike&Fly+Westendorf',
  name: 'Route',
}
const telefonNumber = {
  href: 'tel:00436643585449',
  name: '06643585449',
}
const mailAddress = {
  href: 'mailto:info@bikeandfly.at',
  name: 'info@bikeandfly.at',
}

useMetaTags()
</script>
