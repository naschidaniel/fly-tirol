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
              ><FacebookIcon style="width: 2em; height: 2em; color: #ececec"
            /></span></button
          ><button
            class="mx-2"
            title="Teilen per WhatsApp"
            @click="openWhatsAppShare()"
          >
            <span
              class="inline-flex items-center justify-center p-2 rounded-full"
              style="background-color: rgb(177, 177, 177)"
              ><WhatsAppIcon
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
              ><TwitterIcon style="width: 2em; height: 2em; color: #ececec"
            /></span></button
          ><button
            class="mx-2"
            title="Teilen per Mail"
            @click="openMailShare()"
          >
            <span
              class="inline-flex items-center justify-center p-2 rounded-full"
              style="background-color: rgb(177, 177, 177)"
              ><OutlineMailIcon style="width: 2em; height: 2em; color: #ececec"
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
              ><InstagramIcon style="width: 2em; height: 2em; color: #ececec"
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
              ><YouTubeIcon style="width: 2em; height: 2em; color: #ececec"
            /></span></button
          ><button
            class="mx-2"
            title="Kontaktiere uns per WhatsApp"
            @click="openWhatsAppContact()"
          >
            <span
              class="inline-flex items-center justify-center p-2 rounded-full"
              style="background-color: #25d366"
              ><WhatsAppIcon
                class="whats-app-icon"
                style="width: 2em; height: 2em; color: #ececec"
            /></span></button
          ><button class="mx-2" title="Rufe uns an" @click="openPhone()">
            <span
              class="inline-flex items-center justify-center p-2 rounded-full"
              style="background-color: rgb(90, 78, 255)"
              ><OutlinePhoneIcon
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
              ><OutlineMailIcon style="width: 2em; height: 2em; color: #ececec"
            /></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import InstagramIcon from './icons/InstagramIcon'
import FacebookIcon from './icons/FacebookIcon'
import OutlineMailIcon from './icons/OutlineMailIcon'
import OutlinePhoneIcon from './icons/OutlinePhoneIcon'
import TwitterIcon from './icons/TwitterIcon'
import YouTubeIcon from './icons/YouTubeIcon'
import WhatsAppIcon from './icons/WhatsAppIcon'
import { useData } from '~/composable/useData'
import { useMetaTags } from '~/composable/useMetaTags'

export default defineComponent({
  name: 'SocialBar',
  components: {
    InstagramIcon,
    FacebookIcon,
    OutlineMailIcon,
    OutlinePhoneIcon,
    TwitterIcon,
    YouTubeIcon,
    WhatsAppIcon,
  },
  setup() {
    const { isFlyTirol, isWhiteCloud } = useData()
    const { page } = useMetaTags()
    const instagram = isFlyTirol ? 'fly.tirol' : 'white_cloud_paragliding'
    const mail = isFlyTirol ? 'info@fly-tirol.com' : 'info@white-cloud.tirol'
    const phone = isFlyTirol ? '00436766422088' : '004368181589568'
    const website = isFlyTirol ? 'fly-tirol.com' : 'white-cloud.tirol'
    const websiteUrl = isFlyTirol
      ? 'https://fly-tirol.com'
      : 'https://white-cloud.tirol'
    return {
      instagram,
      isFlyTirol,
      isWhiteCloud,
      mail,
      page,
      phone,
      website,
      websiteUrl,
    }
  },
  computed: {
    encodedUrl() {
      return encodeURI(`${this.websiteUrl}${this.page.path}`)
    },
    encodeTitle() {
      return encodeURI(this.page.title)
    },
    encodeDescription() {
      return encodeURI(this.page.description)
    },
  },
  methods: {
    openInstagram() {
      const url = `https://www.instagram.com/${this.instagram}/`
      window
        .open(url, 'newWindow', 'width=600, height=800', { target: '_blank' })
        .focus()
    },
    openFacebook() {
      const url = `https://www.facebook.com/sharer/sharer.php?u=${this.encodedUrl}&title=${this.encodeTitle}`
      window
        .open(url, 'newWindow', 'width=600, height=800', { target: '_blank' })
        .focus()
    },
    openMailContact() {
      const url = `mailto:${this.mail}?subject=Kontakt über ${this.websiteUrl}`
      window.location.replace(url)
    },
    openMailShare() {
      const url = `mailto:?subject=Schau%20doch%20mal%20vorbei%20bei – ${this.encodeTitle} – auf ${this.website}&body=Hallo,%0D%0A%0D%0D%0A%0D${this.encodeDescription}%0D%0A%0D%0D%0A%0Dhttps://${this.encodedUrl}`
      window.location.replace(url)
    },
    openPhone() {
      window.open(`tel:${this.phone}`)
    },
    openTwitter() {
      const url = `https://twitter.com/intent/tweet?size=large&url=${this.encodedUrl}&text=${this.encodeDescription}&via=${this.website}`
      window
        .open(url, 'newWindow', 'width=600, height=800', { target: '_blank' })
        .focus()
    },
    openYouTube() {
      const url = `https://www.youtube.com/channel/UCcHbWKpX02FQI94FOHVvfQA`
      window.open(url)
    },
    openWhatsAppContact() {
      const url = `whatsapp://send?phone=${this.phone}`
      window.open(url)
    },
    openWhatsAppShare() {
      const url = `whatsapp://send?text=${this.encodedUrl}`
      window.open(url)
    },
  },
})
</script>
