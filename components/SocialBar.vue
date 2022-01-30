<template>
  <div class="flex justify-center mt-12 lg:mt-36">
    <button class="mx-2" title="Teilen per Facebook" @click="openFacebook()">
      <span
        class="inline-flex items-center justify-center p-2 rounded-full"
        style="background-color: #1877f2"
        ><FacebookIconVue style="width: 2em; height: 2em; color: #ececec"
      /></span></button
    ><button class="mx-2" title="Teilen per WhatsApp" @click="openWhatsApp()">
      <span
        class="inline-flex items-center justify-center p-2 rounded-full"
        style="background-color: #25d366"
        ><WhatsAppIconVue
          class="whats-app-icon"
          style="width: 2em; height: 2em; color: #ececec"
      /></span></button
    ><button class="mx-2" title="Teilen per Twitter" @click="openTwitter()">
      <span
        class="inline-flex items-center justify-center p-2 rounded-full"
        style="background-color: #1da1f2"
        ><TwitterIconVue style="width: 2em; height: 2em; color: #ececec"
      /></span></button
    ><button class="mx-2" title="Teilen per Mail" @click="openMail()">
      <span
        class="inline-flex items-center justify-center p-2 rounded-full"
        style="background-color: rgb(177, 177, 177)"
        ><OutlineMailIconVue style="width: 2em; height: 2em; color: #ececec"
      /></span>
    </button>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import FacebookIconVue from './icons/FacebookIcon.vue'
import OutlineMailIconVue from './icons/OutlineMailIcon.vue'
import TwitterIconVue from './icons/TwitterIcon.vue'
import WhatsAppIconVue from './icons/WhatsAppIcon.vue'
import { useMetaTags } from '~/composable/useMetaTags'

export default defineComponent({
  name: 'SocialBar',
  components: {
    FacebookIconVue,
    OutlineMailIconVue,
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
    openFacebook() {
      const url = `https://www.facebook.com/sharer/sharer.php?u=${this.encodedUrl}&title=${this.encodeTitle}`
      window
        .open(url, 'newWindow', 'width=600, height=800', { target: '_blank' })
        .focus()
    },
    openMail() {
      const url = `mailto:?subject=${this.encodeTitle} – auf Fly-Tirol.com&body=Hallo,%0D%0A%0D%0D%0A%0D${this.encodeDescription}%0D%0A%0D%0D%0A%0Dhttps://${this.encodedUrl}`
      window.location.replace(url)
    },
    openTwitter() {
      const url = `https://twitter.com/intent/tweet?size=large&url=${this.encodedUrl}&text=${this.encodeDescription}&via=fly-tirol.com`
      window
        .open(url, 'newWindow', 'width=600, height=800', { target: '_blank' })
        .focus()
    },
    openWhatsApp() {
      const url = `whatsapp://send?text=${this.encodedUrl}`
      window.open(url)
    },
  },
})
</script>
