<template>
  <div>
    <div class="max-w-90 w-full nuxt-content mx-auto">
      <h1>
        <small>Tandemhotline</small>White-Cloud&nbsp;<strong>Kontakt</strong>
      </h1>
      <div class="mt-10">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 pr-2">
            <p><strong>Matthias Hohlrieder</strong></p>
            <p>Österreich Paragleit- und Ballonunternehmungen</p>
            <p>Augasse 23b</p>
            <p>6300 Wörgl</p>
            <div class="flex flex-col my-4 mr-6">
              <button class="w-full">
                <a
                  href="whatsapp://send?phone=+4368181589568"
                  class="btn-primary btn--large m-4 w-full lg:w-2/3"
                  ><IconWhatsApp
                    class="mr-2"
                    style="width: 2em; height: 2em; color: #ececec"
                  />
                  +43 681 81589568</a
                >
              </button>
              <button class="w-full">
                <a
                  href="tel:004368181589568"
                  class="btn-primary btn--large m-4 w-full lg:w-2/3"
                  ><IconOutlinePhone
                    class="mr-2"
                    style="width: 2em; height: 2em; color: #ececec"
                  />
                  +43 681 81589568</a
                >
              </button>
              <button class="w-full">
                <a
                  href="mailto:info@white-cloud.tirol"
                  class="btn-primary btn--large m-4 w-full lg:w-2/3"
                  ><IconOutlineMail
                    class="mr-2"
                    style="width: 2em; height: 2em; color: #ececec"
                  />
                  info@white-cloud.tirol</a
                >
              </button>
            </div>
          </div>
          <div class="w-full md:w-1/2 pl-2">
            <ResponsiveImage
              img-class="mb-2 object-contain rounded-lg mx-auto"
              picture="/media/kontakt/mathias_holrieder.jpg"
            />
          </div>
        </div>
      </div>

      <h2><small>Treffpunkt</small>für&nbsp; <strong>Tandemflüge</strong></h2>
      <div class="md:flex justify-center py-8 px-8">
        <div class="basis-1/2 flex">
          <IconOutlineLocationMarker class="w-5 h-5 mr-1 -mt-0.25" /><span
            class="mr-6"
            >Treffpunkt Bergbahn Hopfgarten, Talstation</span
          >
        </div>
        <div class="basis-1/2 ml-6 mt-2 md:mt-0">
          <a
            title="Navigation öffnen"
            class="underline decoration-dotted"
            href="geo:47.4468733588,12.16207365626177"
          >
            <p>
              Treffpunkt ist bei der Kassa der Talstation der Bergbahn
              Hopfgarten
            </p>
            <p>Meierhofgasse 29, Hopfgarten-Markt, Österreich</p></a
          >
        </div>
      </div>
      <div class="h-0.75 bg-brand rounded-full w-full"></div>
      <div class="leading-snug nuxt-content">
        <div class="md:flex justify-center py-8 px-8">
          <div class="basis-1/2 flex">
            <IconOutlineLocationMarker class="w-5 h-5 mr-1 -mt-0.25" /><span
              class="mr-6"
              >Treffpunkt Bergbahn Söll, Talstation</span
            >
          </div>
          <div class="basis-1/2 ml-6 mt-2 md:mt-0">
            <a
              title="Navigation öffnen"
              class="underline decoration-dotted"
              href="geo:47.49687105347196,12.198308731122726"
            >
              <p>Treffpunkt ist an der Kassa der Taltation der Bergbahn Söll</p>
              <p>Stampfanger 21, Söll, Österreich</p>
            </a>
          </div>
        </div>
        <div class="h-0.75 bg-brand rounded-full w-full"></div>
        <div class="md:flex justify-center py-8 px-8">
          <div class="basis-1/2 flex">
            <IconOutlineLocationMarker class="w-5 h-5 mr-1 -mt-0.25" /><span
              class="mr-6"
              >Startplatz Hohe Salve</span
            >
          </div>
          <div class="basis-1/2 ml-6 mt-2 md:mt-0">
            <a
              title="Navigation öffnen"
              class="underline decoration-dotted"
              href="geo:47.46497366206375,12.203761050710721"
            >
              <p>Gestartet wird am Gipfel der Hohen Salve</p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <ContactMap class="mt-10" />
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import { useMetaTags } from '@/composable/useMetaTags'
import ContactMap from '@/components/ContactMap.vue'
import SocialBar from '@/components/SocialBar.vue'
import IconOutlineLocationMarker from '@/components/icon/IconOutlineLocationMarker.vue'
import IconOutlineMail from '@/components/icon/IconOutlineMail.vue'
import IconOutlinePhone from '@/components/icon/IconOutlinePhone.vue'
import IconWhatsApp from '@/components/icon/IconWhatsApp.vue'

useMetaTags()
</script>
