<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="Partner"
      picture="/media/partner/partner.jpg"
    >
      <p>Eine tolles Festival braucht starke Partner!</p>
      <p>
        Mit den angeführten <strong>Gaststätten</strong>,
        <strong>Restaurants</strong>, <strong>Hotels</strong>,
        <strong>Unterkünften</strong> und <strong>Betrieben</strong>
        pflegen wir einen sehr guten Kontakt. Sie kennen die Bedürfnisse von
        Piloten und stellen sicher, dass dein Aufenthalt in der Region ein
        besonderes Erlebniss wird.
      </p>
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6">
      <Partner class="nuxt-content" />
    </div>
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useMetaTags } from '@/composable/useMetaTags'
import Partner from '@/content_bikeandfly/partner.vue'

useMetaTags()
</script>
