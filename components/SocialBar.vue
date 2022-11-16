<template>
  <div class="mt-20 lg:mt-36">
    <div
      class="bg-gradient-to-r from-white via-[#160D42] to-white p-[2px] mb-4"
    ></div>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-1/2">
        <div class="flex justify-center">
          <span class="font-bold">Teilen</span>&nbsp;in Sozialen Medien
        </div>
        <div class="flex justify-center mt-4">
          <button
            v-if="isFlyTirol"
            class="mx-2"
            title="Teilen per Facebook"
            @click="openFacebook()"
          >
            <span
              class="inline-flex items-center justify-center p-2 rounded-full"
              style="background-color: rgb(177, 177, 177)"
              ><IconFacebook style="width: 2em; height: 2em; color: #ececec"
            /></span></button
          ><button
            class="mx-2"
            title="Teilen per WhatsApp"
            @click="openWhatsAppShare()"
          >
            <span
              class="inline-flex items-center justify-center p-2 rounded-full"
              style="background-color: rgb(177, 177, 177)"
              ><IconWhatsApp
                class="whats-app-icon"
                style="width: 2em; height: 2em; color: #ececec"
            /></span></button
          ><button
            class="mx-2"
            title="Teilen per Twitter"
            @click="openTwitter()"
          >
            <span
              class="inline-flex items-center justify-center p-2 rounded-full"
              style="background-color: rgb(177, 177, 177)"
              ><IconTwitter style="width: 2em; height: 2em; color: #ececec"
            /></span></button
          ><button
            class="mx-2"
            title="Teilen per Mail"
            @click="openMailShare()"
          >
            <span
              class="inline-flex items-center justify-center p-2 rounded-full"
              style="background-color: rgb(177, 177, 177)"
              ><IconOutlineMail style="width: 2em; height: 2em; color: #ececec"
            /></span>
          </button>
        </div>
      </div>
      <div class="w-full lg:w-1/2 mt-16 lg:mt-0">
        <div class="flex justify-center">
          <span class="font-bold">Kontaktiere uns</span>
        </div>
        <div class="flex justify-center mt-4">
          <button
            class="mx-2"
            title="Folge uns auf Instagram"
            @click="openInstagram()"
          >
            <span
              class="inline-flex items-center justify-center p-2 rounded-full"
              style="background-color: #e4405f"
              ><IconInstagram style="width: 2em; height: 2em; color: #ececec"
            /></span></button
          ><button
            v-if="isWhiteCloud"
            class="mx-2"
            title="Folge uns auf YouTube"
            @click="openYouTube()"
          >
            <span
              class="inline-flex items-center justify-center p-2 rounded-full"
              style="background-color: #e4405f"
              ><IconYouTube style="width: 2em; height: 2em; color: #ececec"
            /></span></button
          ><button
            class="mx-2"
            title="Kontaktiere uns per WhatsApp"
            @click="openWhatsAppContact()"
          >
            <span
              class="inline-flex items-center justify-center p-2 rounded-full"
              style="background-color: #25d366"
              ><IconWhatsApp
                class="whats-app-icon"
                style="width: 2em; height: 2em; color: #ececec"
            /></span></button
          ><button class="mx-2" title="Rufe uns an" @click="openPhone()">
            <span
              class="inline-flex items-center justify-center p-2 rounded-full"
              style="background-color: rgb(90, 78, 255)"
              ><IconOutlinePhone
                style="width: 2em; height: 2em; color: #ececec"
            /></span></button
          ><button
            class="mx-2"
            title="Kontaktiere uns per Mail"
            @click="openMailContact()"
          >
            <span
              class="inline-flex items-center justify-center p-2 rounded-full"
              style="background-color: rgb(81, 169, 252)"
              ><IconOutlineMail style="width: 2em; height: 2em; color: #ececec"
            /></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import IconInstagram from './icon/IconInstagram.vue'
import IconFacebook from './icon/IconFacebook.vue'
import IconOutlineMail from './icon/IconOutlineMail.vue'
import IconOutlinePhone from './icon/IconOutlinePhone.vue'
import IconTwitter from './icon/IconTwitter.vue'
import IconYouTube from './icon/IconYouTube.vue'
import IconWhatsApp from './icon/IconWhatsApp.vue'
import { useData } from '@/composable/useData'
import { usePage } from '@/composable/usePage'

const {
  instagram,
  isFlyTirol,
  isWhiteCloud,
  mail,
  phone,
  website,
  websiteUrl,
} = useData()
const { page } = usePage()

const encodedUrl = computed(() => encodeURI(`${websiteUrl}${page.value.path}`))
const encodeTitle = computed(() => encodeURI(page.value.title))
const encodeDescription = computed(() => encodeURI(page.value.description))

function openInstagram() {
  const url = `https://www.instagram.com/${instagram}/`
  window.open(url, '_blank', 'width=600, height=800')?.focus()
}

function openFacebook() {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl.value}&title=${encodeTitle.value}`
  window.open(url, '_blank', 'width=600, height=800')?.focus()
}

function openMailContact() {
  const url = `mailto:${mail}?subject=Kontakt über ${websiteUrl}`
  window.location.replace(url)
}

function openMailShare() {
  const url = `mailto:?subject=Schau%20doch%20mal%20vorbei%20bei – ${encodeTitle.value} – auf ${website}&body=Hallo,%0D%0A%0D%0D%0A%0D${encodeDescription.value}%0D%0A%0D%0D%0A%0Dhttps://${encodedUrl.value}`
  window.location.replace(url)
}

function openPhone() {
  window.open(`tel:${phone}`)
}

function openTwitter() {
  const url = `https://twitter.com/intent/tweet?size=large&url=${encodedUrl.value}&text=${encodeDescription.value}&via=${website}`
  window.open(url, '_blank', 'width=600, height=800')?.focus()
}

function openYouTube() {
  const url = `https://www.youtube.com/channel/UCcHbWKpX02FQI94FOHVvfQA`
  window.open(url)
}

function openWhatsAppContact() {
  const url = `whatsapp://send?phone=${phone}`
  window.open(url)
}

function openWhatsAppShare() {
  const url = `whatsapp://send?text=${encodedUrl.value}`
  window.open(url)
}
</script>
