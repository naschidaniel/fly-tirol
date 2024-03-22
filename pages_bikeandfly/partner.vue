<template>
  <div>
    <PageHeader
      pre-headline="Bike&Fly. Festival Brixental"
      headline="Partner"
      picture="/media/page-header.jpg"
    >
      <p>Eine tolles Festival braucht starke Partner!</p>
      <p>
        Wir sind stolz darauf, unsere großartigen Partner beim Bike and Fly
        Festival zu präsentieren! Ein herzliches Dankeschön geht an unsere
        Partner, die uns dabei unterstützen, dieses Festival zu einem
        unvergesslichen Erlebnis zu machen.
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
