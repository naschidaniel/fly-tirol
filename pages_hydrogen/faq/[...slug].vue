<template>
  <div>
    <PageHeader
      pre-headline="Hydrogen"
      :headline="page?.title"
      :picture="page?.image"
    >
      <div>
        <p class="mb-2">
          {{ page.description }}
        </p>
      </div>
    </PageHeader>
    <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
      <div v-if="page.slug == 'buildings'">
        <Buildings />
      </div>
      <div v-if="page.slug == 'energy-sector'">
        <EnergySector />
      </div>
      <div v-if="page.slug == 'general'">
        <General />
      </div>
      <div v-if="page.slug == 'industry'">
        <Industry />
      </div>
      <div v-if="page.slug == 'mobility'">
        <Mobility />
      </div>
      <div v-if="page.slug == 'production'">
        <Production />
      </div>
      <div v-if="page.slug == 'transmission'">
        <Transmission />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import Buildings from '@/content_hydrogen/faq/buildings.vue'
import EnergySector from '@/content_hydrogen/faq/energy-sector.vue'
import General from '@/content_hydrogen/faq/general.vue'
import Industry from '@/content_hydrogen/faq/industry.vue'
import Mobility from '@/content_hydrogen/faq/mobility.vue'
import Production from '@/content_hydrogen/faq/production.vue'
import Transmission from '@/content_hydrogen/faq/transmission.vue'
import { usePage } from '@/composable/usePage'
import { useMetaTags } from '@/composable/useMetaTags'

const { page } = usePage()
useMetaTags()
</script>
