<template>
  <div>
    <PageHeader
      pre-headline="service"
      headline="Service"
      picture="/media/service/service.jpg"
      :link1="serviceNumber"
      :link2="serviceMailAddress"
    >
      <div>
        <p>
          Habt ihr euren Rettungsschirm schon neu gepackt und überprüfen lassen?
          Möglicherweise ist eine Reparatur der Leinen oder des Gleitschirms
          notwendig? Ist der zweijährliche Check fällig oder möchtet ihr
          lediglich den Trimm eures Schirms überprüfen lassen? In diesem Fall
          kontaktiert uns und wir werden uns gerne um euer Anliegen kümmern.
        </p>
        <div class="flex flex-wrap justify-center mt-6">
          <div class="flex p-2 w-5/6 md:w-1/3">
            <a
              :href="serviceNumber.href"
              class="btn-primary btn--large w-full"
              >{{ serviceNumber.name }}</a
            >
          </div>
          <div class="flex p-2 w-5/6 md:w-1/3">
            <a
              :href="serviceMailAddress.href"
              class="btn-primary btn--large w-full"
              >{{ serviceMailAddress.name }}</a
            >
          </div>
        </div>
      </div>
    </PageHeader>
    <ProductList />
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useMetaTags } from '@/composable/useMetaTags'

const serviceNumber = {
  href: 'tel:00436766422088',
  name: '+43 676 6422088',
}
const serviceMailAddress = {
  href: 'mailto:service@fly-tirol.com ',
  name: 'service@fly-tirol.com',
}

useMetaTags()
</script>
