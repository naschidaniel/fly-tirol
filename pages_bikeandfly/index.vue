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
        :picture="headerImage"
      />
      <div
        class="absolute h-40 bottom-0 left-0 right-0 bg-gradient-to-t from-white"
      />
    </div>
    <LinkList />
    <div class="max-w-90 w-full mx-auto py-6">
      <div class="flex justify-center items-center mb-6">
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/v3mfoPTZSZ8?si=VfrgbrRbHfEiYONE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
      <div class="flex justify-center items-center">
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/z631e8LEUUs?si=d01CdAOflLU-qKBS"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
    </div>
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import { useMetaTags } from '@/composable/useMetaTags'
import LinkList from '@/components/LinkList.vue'
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import SocialBar from '@/components/SocialBar.vue'
import { useMedia } from '@/composable/useMedia'

const { headerImage } = useMedia()
useMetaTags()
</script>
