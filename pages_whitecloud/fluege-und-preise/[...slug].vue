<template>
  <div>
    <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
      <div class="flex flex-wrap mt-8">
        <div class="w-full lg:w-1/2 lg:pr-2 order-1">
          <div v-if="page.slug === 'akrobatikflug-hopfgarten'">
            <AkrobatikflugHopfgarten />
          </div>
          <div v-if="page.slug === 'akrobatikflug-soell'">
            <AkrobatikflugSoell />
          </div>
          <div v-if="page.slug === 'gleitflug-hopfgarten'">
            <GleitflugHopfgarten />
          </div>
          <div v-if="page.slug === 'gleitflug-soell'">
            <GleitflugSoell />
          </div>
          <div v-if="page.slug === 'testflug'">
            <Testflug />
          </div>
          <div v-if="page.slug === 'thermikflug-hopfgarten'">
            <ThermikflugHopfgarten />
          </div>
          <div v-if="page.slug === 'thermikflug-soell'">
            <ThermikflugSoell />
          </div>
          <div v-if="page.location === 'Hopfgarten'">
            <h2>Veranstaltungsort</h2>
            <a
              title="Navigation öffnen"
              class="underline decoration-dotted"
              href="geo:47.446873358880126, 12.16207365626177"
            >
              <p>
                Treffpunkt ist an der Kassa der Taltation der Bergbahn
                Hopfgarten
              </p>
              <p>Meierhofgasse 29, Hopfgarten-Markt, Österreich</p>
            </a>
          </div>
          <div v-if="page.location === 'Söll'">
            <h2>Veranstaltungsort</h2>
            <a
              title="Navigation öffnen"
              class="underline decoration-dotted"
              href="geo:47.49687105347196, 12.198308731122726"
            >
              <p>Treffpunkt ist an der Kassa der Taltation der Bergbahn Söll</p>
              <p>Stampfanger 21, Söll, Österreich</p>
            </a>
          </div>
        </div>
        <div class="w-full order-2 lg:order-3">
          <ContentImageGallery
            :path="page.imageGallery"
            class="w-full lg:pl-8"
          />
        </div>
        <div></div>
        <div class="w-full mt-4 lg:w-1/2 lg:pl-2 lg:mt-0 order-3 lg:order-2">
          <h2><small>Glücksgefühle</small>Flug <strong>buchen</strong></h2>
          <ProductsRegiondo />
        </div>
      </div>
    </div>
    <ContactMap class="mt-10" />
    <SocialBar />
  </div>
</template>

<script setup>
import ProductsRegiondo from '~/components/ProductsRegiondo'
import SocialBar from '~/components/SocialBar'
import { usePage } from '~/composable/usePage'
import { useMetaTags } from '~/composable/useMetaTags'
import AkrobatikflugHopfgarten from '~/content_whitecloud/fluege-und-preise/akrobatikflug-hopfgarten'
import AkrobatikflugSoell from '~/content_whitecloud/fluege-und-preise/akrobatikflug-soell'
import GleitflugHopfgarten from '~/content_whitecloud/fluege-und-preise/gleitflug-hopfgarten'
import GleitflugSoell from '~/content_whitecloud/fluege-und-preise/gleitflug-soell'
import Testflug from '~/content_whitecloud/fluege-und-preise/testflug'
import ThermikflugHopfgarten from '~/content_whitecloud/fluege-und-preise/thermikflug-hopfgarten'
import ThermikflugSoell from '~/content_whitecloud/fluege-und-preise/thermikflug-soell'

useMetaTags()
const { page } = usePage()
</script>
