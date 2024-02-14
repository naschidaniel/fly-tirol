<template>
  <div>
    <div
      class="relative min-h-screen-60 md:min-h-screen-70 overflow-hidden flex flex-row lg:flex-col items-end lg:items-start mb-12"
    >
      <ResponsiveImage
        box-class="absolute top-0 bottom-0 left-0 right-0"
        img-class="object-cover object-center md:object-bottom lg:object-center w-full h-full"
        :is-lazy="false"
        :is-preload="true"
        picture="/media/BikeAndFlyHeader.jpg"
      />
      <div
        class="absolute h-40 bottom-0 left-0 right-0 bg-gradient-to-t from-white"
      ></div>
    </div>
    <LinkList />
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import { useMetaTags } from '@/composable/useMetaTags'
import LinkList from '@/components/LinkList.vue'
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import SocialBar from '@/components/SocialBar.vue'

useMetaTags()
</script>
