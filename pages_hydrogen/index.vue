<template>
  <div>
    <div
      class="bg-gradient-to-r from-hydrogreen to-hydroblue relative min-h-screen-60 md:min-h-screen-70 overflow-hidden flex flex-row lg:flex-col items-center lg:items-start mb-12"
    >
      <ResponsiveImage
        box-class="absolute top-0 bottom-0 left-0 right-0"
        img-class="object-cover object-bottom w-full h-full"
        :is-lazy="false"
        :is-preload="true"
        picture="/media/wavline.png"
      />
      <div
        class="relative max-w-90 mx-auto w-full lg:w-11/12 lg:mr-0 lg:ml-auto lg:py-24 z-10"
      >
        <div class="flex flex-col max-w-screen-sm lg:shrink-0 -mt-24 md:mt-0">
          <div class="mt-12 sm:mt-6">
            <h1 class="mb-6">
              <span
                class="text-lg font-heading font-medium flex flex-row items-center mb-2"
              >
                <span class="inline-block bg-brand w-7 h-0.75 mr-2" />
                <span class="inline-block text-white">Hydrogen Advisers</span>
              </span>
              <span
                class="text-4xl lg:text-6xl font-heading font-bold text-white"
              >
                Strategic Advice for your Green Hydrogen Projects
              </span>
            </h1>
            <p class="text-lg leading-relaxed max-w-prose text-white">
              We are an advisory service to provide strategic advice to all
              actors seeking to advance their green hydrogen Agenda and to start
              roll-out.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-90 w-full mx-auto py-6">
      <div class="nuxt-content">
        <h2>The Offer</h2>
        <h3>We offer advice in the form of…</h3>
        <div
          class="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center min-h-40 mt-12"
        >
          <div class="p-4 rounded-lg flex items-center justify-center w-1/2">
            <IconOutlineDocumentDuplicate class="w-6 h-6 mr-4" />
            concept reviews
          </div>
          <div class="p-4 rounded-lg flex items-center justify-center w-1/2">
            <IconOutlineBarChart class="w-6 h-6 mr-4" />
            project analysis
          </div>
          <div class="p-4 rounded-lg flex items-center justify-center w-1/2">
            <IconOutlineChat class="w-6 h-6 mr-4" />
            moderated workshops
          </div>
          <div class="p-4 rounded-lg flex items-center justify-center w-1/2">
            <IconOutlineBook class="w-6 h-6 mr-4" />
            targeted reports
          </div>
          <div class="p-4 rounded-lg flex items-center justify-center w-1/2">
            <IconOutlinePaperPlane class="w-6 h-6 mr-4" />
            interactive sessions
          </div>
          <div class="p-4 rounded-lg flex items-center justify-center w-1/2">
            <IconOutlineAcademicCap class="w-6 h-6 mr-4" />
            strategy development
          </div>
        </div>
        <div
          class="grid md:grid-cols-2 gap-2 place-items-center mt-16 bg-white text-center shadow-lg"
        >
          <div>
            <ResponsiveImage
              box-class="w-full"
              img-class="object-cover object-bottom w-full h-full"
              :is-lazy="false"
              :is-preload="true"
              picture="/media/anwendungsgebiete.png"
            />
          </div>
          <div>
            <h2>to interested parties from...</h2>
            <ul class="list-disc text-left">
              <li>industrial actors</li>
              <li>project consortia</li>
              <li>associations</li>
              <li>investors</li>
              <li>public administrations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <LinkList />
  </div>
</template>

<script setup lang="ts">
import { useMetaTags } from '@/composable/useMetaTags'
import LinkList from '@/components/LinkList.vue'
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import IconOutlineAcademicCap from '@/components/icon/IconOutlineAcademicCap.vue'
import IconOutlineBarChart from '@/components/icon/IconOutlineBarChart.vue'
import IconOutlineDocumentDuplicate from '@/components/icon/IconOutlineDocumentDuplicate.vue'
import IconOutlineChat from '@/components/icon/IconOutlineChat.vue'
import IconOutlinePaperPlane from '@/components/icon/IconOutlinePaperPlane.vue'
import IconOutlineBook from '@/components/icon/IconOutlineBook.vue'

useMetaTags()
</script>
