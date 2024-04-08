<template>
  <div>
    <PageHeader
      pre-headline="hydrogen-advisers.eu"
      headline="Contact"
      picture="/media/martin-adams-a_PDPUPuNZ8-unsplash-scaled.jpg"
      :link1="telefonNumber"
      :link2="mailAddress"
      :address="address"
    >
      <div class="nuxt-content">
        <p>
          Do you have any questions about hydrogen? Would you like to give us
          feedback or just say hello? Get in touch with us and we will take care
          of your request!
        </p>
        <p>
          Just give us a call or send us an email. We look forward to hearing
          from you!
        </p>
        <div class="flex flex-wrap justify-center mt-6">
          <div class="flex p-2 w-5/6 md:w-1/2">
            <a
              :href="telefonNumber.href"
              class="btn-primary btn--large w-full"
            >{{ telefonNumber.name }}</a>
          </div>
          <div class="flex p-2 w-5/6 md:w-1/2">
            <a
              :href="mailAddress.href"
              class="btn-primary btn--large w-full"
            >{{
              mailAddress.name
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
        <span class="hidden md:block mr-6">Hydrogen-Advisers.eu</span>
        Christian Weinberger | Kleinvolderbergstraße 7a | A-6111 VOLDERS | Tirol
        | Österreich
      </div>
      <div class="h-0.75 bg-brand rounded-full w-full" />
    </div>
    <ContactMap class="mt-10" />
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import { useMetaTags } from '@/composable/useMetaTags'
import IconOutlineLocationMarker from '@/components/icon/IconOutlineLocationMarker.vue'

const address = {
  href: 'https://www.google.com/maps/search/?api=1&query=47.427568476534546%2C12.213300968591906,Fly+Tirol+-+Flugschule+Kitzbüheler+Alpen',
  name: 'Route',
}
const telefonNumber = {
  href: 'tel:00436767007594',
  name: '+43 676 7007594',
}
const mailAddress = {
  href: 'mailto:office@hydrogen-advisers.eu',
  name: 'office@hydrogen-advisers.eu',
}

useMetaTags()
</script>
