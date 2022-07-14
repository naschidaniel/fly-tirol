<template>
  <div>
    <div
      class="relative min-h-screen-40 md:min-h-screen-50 overflow-hidden flex flex-row lg:flex-col items-end lg:items-start mt-2"
    >
      <ResponsiveImage
        box-class="absolute top-0 bottom-0 left-0 right-0"
        img-class="object-cover object-center md:object-bottom lg:object-center w-full h-full"
        :is-lazy="false"
        :picture="picture"
        :is-preload="true"
      />
    </div>
    <div class="bg-gray-100 nuxt-content lg:pt-10">
      <div class="max-w-90 mx-auto py-6">
        <Index />
      </div>
      <div class="flex justify-center my-10">
        <NuxtLink
          to="/fluege-und-preise"
          class="btn-primary btn--large m-4 w-5/6 md:w-1/2 lg:w-1/3"
          ><IconSolidPlay
            class="mr-2"
            style="width: 2em; height: 2em; color: #ececec"
          />
          <span class="text-2xl">Flug buchen</span></NuxtLink
        >
      </div>
      <div class="max-w-90 mx-auto py-6">
        <h2><small>Tandemflug</small>Der&nbsp;<strong>Ablauf</strong></h2>
        <div class="flex flex-wrap">
          <div class="w-full min-h-full lg:w-2/5 lg:pr-2">
            <ResponsiveImage
              box-class="w-full h-full overflow-hidden"
              img-class="rounded shadow-md object-cover object-center w-full h-full"
              picture="/media/tandemfliegen_salve.jpg"
            />
          </div>
          <div class="w-full lg:w-3/5 lg:pl-2 mt-4 lg:mt-0">
            <div class="flex mt-4">
              <div
                class="flex-none w-12 h-12 bg-[#1c9dd8] p-2 rounded-full mr-4"
              >
                <IconOutlineLocationMarker
                  class="h-8 w-8 mx-auto text-gray-100"
                />
              </div>
              <div class="grow">
                <h3>Fluggebiet</h3>
                <p>
                  Von Hopfgarten im Brixental oder auch von Söll am Wilden
                  Kaiser geht es mit der Bergbahn hinauf auf den Gipfel der Hohe
                  Salve. Die zuverlässigen Aufwinde im Frühling und Sommer und
                  die atemberaubende Aussicht über die Kitzbüheler Alpen machen
                  diesen Berg zu einem der beliebtesten Fluggebiete im Tiroler
                  Unterland.
                </p>
              </div>
            </div>
            <div class="flex mt-4">
              <div
                class="flex-none w-12 h-12 bg-[#1c9dd8] p-2 rounded-full mr-4"
              >
                <IconOutlineCloudUpload class="h-8 w-8 mx-auto text-gray-100" />
              </div>
              <div class="grow">
                <h3>Der Start</h3>
                <p>
                  Nach einer gründlichen Einweisung des Piloten &amp;
                  Sicherheits-Checks kommt das Kommando zum Start. Schon nach
                  wenigen Schritten Anlauf werden wir den Boden unter den Füßen
                  verlieren und sanft abheben.
                </p>
              </div>
            </div>
            <div class="flex mt-4">
              <div
                class="flex-none w-12 h-12 bg-[#1c9dd8] p-2 rounded-full mr-4"
              >
                <IconOutlineCloud class="h-8 w-8 mx-auto text-gray-100" />
              </div>
              <div class="grow">
                <h3>Der Flug</h3>
                <p>
                  Nach dem Start sitzen wir bequem in unseren Gurtzeugen und der
                  Passagier kann sich voll und ganz den Eindrücken des Fliegens
                  zuwenden. Spüren Sie den Wind und erleben Sie die Welt von
                  oben. Wie ein Adler gleiten wir lautlos durch die Luft. Das
                  ist wahre Freiheit!
                </p>
              </div>
            </div>
            <div class="flex mt-4">
              <div
                class="flex-none w-12 h-12 bg-[#1c9dd8] p-2 rounded-full mr-4"
              >
                <IconOutlineCloudDownload
                  class="h-8 w-8 mx-auto text-gray-100"
                />
              </div>
              <div class="grow">
                <h3>Die Landung</h3>
                <p>
                  Kurz vor der Landung werden Sie aufgefordert die Beine nach
                  oben zu strecken. Der Pilot bremst den Schirm ab und auf dem
                  gepolstertem Sitz landen wir wieder sicher und weich auf
                  festem Boden.
                </p>
              </div>
            </div>
            <div class="flex flex-wrap mt-8">
              <div class="w-full md:w-1/2">
                <h3>SICHERHEIT</h3>
                <p>
                  ..steht selbstverständlich an erster Stelle. Die Ausrüstung
                  wird regelmäßig überprüft und ist auf dem neuesten technischen
                  Stand und der Pilot ist stets bestens über Wetter und Wind
                  informiert.
                </p>
              </div>
              <div class="w-full md:w-1/2">
                <h3>ANFORDERUNGEN</h3>
                <ul>
                  <li>Körpergewicht 25 - 120kg</li>
                  <li>feste Schuhe</li>
                  <li>körperliche Gesundheit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-90 mx-auto nuxt-content mt-20">
      <h2><small>Ihr Pilot</small>Matthias&nbsp;<strong>Hohlrieder</strong></h2>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 pr-2">
          <p>
            Der Kindheitstraum vom Fliegen trieb mich vor über 13 Jahren in die
            Flugschule und die Begeisterung für den Flugsport steigt noch immer.
          </p>
          <p class="mt-2">
            Heute, nach mehr als 6000 unfallfreien Flügen und als staatlich
            geprüfter Tandempilot, möchte ich meine Eindrücke und Erlebnisse bei
            einem Gleitschirm-Tandemflug mit Ihnen teilen.
          </p>
        </div>
        <div class="w-full md:w-1/2 pl-2">
          <ResponsiveImage
            img-class="mb-2 object-contain rounded-lg mx-auto"
            picture="/media/kontakt/mathias_holrieder.jpg"
          />
        </div>
      </div>
    </div>

    <div class="max-w-90 mx-auto nuxt-content mt-20">
      <h2><small>Webcam</small>Gipfel&nbsp;<strong>Hohe Salve</strong></h2>
      <Webcam />
    </div>
    <SocialBar />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMetaTags } from '~/composable/useMetaTags'
import SocialBar from '~/components/SocialBar'
import Index from '~/content_whitecloud/index'
import ResponsiveImage from '~/components/ResponsiveImage'
import IconOutlineCloud from '~/components/icon/IconOutlineCloud'
import IconOutlineCloudDownload from '~/components/icon/IconOutlineCloudDownload'
import IconOutlineCloudUpload from '~/components/icon/IconOutlineCloudUpload'
import IconOutlineLocationMarker from '~/components/icon/IconOutlineLocationMarker'
import IconSolidPlay from '~/components/icon/IconSolidPlay'
import Webcam from '~/components/Webcam'

useMetaTags()

const pictures = [
  '/media/index/gallerie/akrobatikflug-hopfgarten.jpg',
  '/media/index/gallerie/thermikflug-ueber-den-wolken.jpg',
  '/media/index/gallerie/tandemfliegen_whitecloud_salve.jpg',
]
const selectPicture = Math.floor(Math.random() * 3)
const picture = ref(pictures[selectPicture])
</script>
