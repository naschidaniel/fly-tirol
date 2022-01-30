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
            class="mx-2"
            title="Teilen per Facebook"
            @click="openFacebook()"
          >
            <span
              class="inline-flex items-center justify-center p-2 rounded-full"
              style="background-color: rgb(177, 177, 177)"
              ><FacebookIconVue style="width: 2em; height: 2em; color: #ececec"
            /></span></button
          ><button
            class="mx-2"
            title="Teilen per WhatsApp"
            @click="openWhatsAppShare()"
          >
            <span
              class="inline-flex items-center justify-center p-2 rounded-full"
              style="background-color: rgb(177, 177, 177)"
              ><WhatsAppIconVue
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
              ><TwitterIconVue style="width: 2em; height: 2em; color: #ececec"
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
            class="mx-2"
            title="Kontaktiere uns per WhatsApp"
            @click="openWhatsAppContact()"
          >
            <span
              class="inline-flex items-center justify-center p-2 rounded-full"
              style="background-color: #25d366"
              ><WhatsAppIconVue
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
import InstagramIcon from './icons/InstagramIcon.vue'
import FacebookIconVue from './icons/FacebookIcon.vue'
import OutlineMailIcon from './icons/OutlineMailIcon.vue'
import OutlinePhoneIcon from './icons/OutlinePhoneIcon.vue'
import TwitterIconVue from './icons/TwitterIcon.vue'
import WhatsAppIconVue from './icons/WhatsAppIcon.vue'
import { useMetaTags } from '~/composable/useMetaTags'

export default defineComponent({
  name: 'SocialBar',
  components: {
    InstagramIcon,
    FacebookIconVue,
    OutlineMailIcon,
    OutlinePhoneIcon,
    TwitterIconVue,
    WhatsAppIconVue,
  },
  setup() {
    const { page } = useMetaTags()
    return { page }
  },
  computed: {
    encodedUrl() {
      return encodeURI(`https://fly-tirol.com${this.page.path}`)
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
      const url = 'https://www.instagram.com/fly.tirol/'
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
      const url = `mailto:info@fly-tirol.com?subject=Kontakt über Fly-Tirol.com`
      window.location.replace(url)
    },
    openMailShare() {
      const url = `mailto:?subject=Schau%20doch%20mal%20vorbei%20bei – ${this.encodeTitle} – auf Fly-Tirol.com&body=Hallo,%0D%0A%0D%0D%0A%0D${this.encodeDescription}%0D%0A%0D%0D%0A%0Dhttps://${this.encodedUrl}`
      window.location.replace(url)
    },
    openPhone() {
      const url = `tel:00436766422088`
      window.open(url)
    },
    openTwitter() {
      const url = `https://twitter.com/intent/tweet?size=large&url=${this.encodedUrl}&text=${this.encodeDescription}&via=fly-tirol.com`
      window
        .open(url, 'newWindow', 'width=600, height=800', { target: '_blank' })
        .focus()
    },
    openWhatsAppContact() {
      const url = `https://api.whatsapp.com/send/?phone=436766422088&text&app_absent=0`
      window.open(url)
    },
    openWhatsAppShare() {
      const url = `whatsapp://send?text=${this.encodedUrl}`
      window.open(url)
    },
  },
})
</script>
