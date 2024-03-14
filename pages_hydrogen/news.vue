<template>
  <div>
    <PageHeader
      pre-headline="Hydrogen News"
      headline="News"
      picture="/media/biel-morro-HCha-UHkIg8-unsplash-scaled.jpg"
    >
      <div>
        <p class="mb-2">
          This section lists important news items for the development of the
          hydrogen economies. It includes links to press releases, reports,
          company announcements, project proposals, news paper articles and the
          like. The order is chronological with the newest item on top of the
          list
        </p>
      </div>
    </PageHeader>
    <div class="max-w-90 w-full mx-auto py-6">
      <News class="nuxt-content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import News from '@/content_hydrogen/news.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useMetaTags } from '@/composable/useMetaTags'

useMetaTags()
</script>
