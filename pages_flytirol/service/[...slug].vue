<template>
  <div class="max-w-90 w-full mx-auto pt-8 nuxt-content">
    <div v-if="page.slug == 'gleitschirm-check'">
      <GleitschirmCheck />
    </div>
    <div v-if="page.slug == 'rettungspackservice'">
      <Rettungspackservice />
    </div>
    <div v-if="page.slug == 'k-probe'">
      <Kprobe />
    </div>
    <ProductBookService />
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import { usePage } from '@/composable/usePage'
import { useMetaTags } from '@/composable/useMetaTags'
import GleitschirmCheck from '@/content_flytirol/service/gleitschirm-check.vue'
import Rettungspackservice from '@/content_flytirol/service/rettungspackservice.vue'
import Kprobe from '@/content_flytirol/service/k-probe.vue'

const { page } = usePage()
useMetaTags()
</script>
