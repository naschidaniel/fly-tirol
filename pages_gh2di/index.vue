<template>
  <div
    class="bg-gradient-to-r from-hydrogreen to-hydroblue relative min-h-screen md:min-h-screen overflow-hidden flex flex-row lg:flex-col items-center lg:items-start"
  >
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
              GH2DI.eu
            </span>
          </h1>
          <p class="text-lg leading-relaxed max-w-prose text-white">
            We are an advisory service to provide strategic advice to all
            actors seeking to advance their green hydrogen Agenda and to start
            roll-out.
          </p>
          <p class="text-lg leading-relaxed max-w-prose text-white mt-4">
            <strong>Thank you for your visit. We are currently working on our website and would be pleased if you visit us at a later date.</strong>
          </p>
          <p class="text-lg leading-relaxed max-w-prose text-white mt-4">
            If you would like to contact us, simply send us an e-mail: <strong><a
              target="_blank"
              href="mailto:christian.weinberger@gh2di.eu"
            >christian.weinberger@gh2di.eu</a></strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMetaTags } from '@/composable/useMetaTags'

useMetaTags()
</script>
