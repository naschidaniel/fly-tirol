<template>
  <div ref="imageBox" class="absolute top-0 bottom-0 left-0 right-0">
    <img
      v-if="responsiveUrl != ''"
      loading="lazy"
      :class="imgClass"
      :src="responsiveUrl"
      :width="width"
      :height="height"
      :alt="imageInformation['alt']"
      :title="imageInformation['title']"
    />
  </div>
</template>

<script>
export default {
  props: {
    picture: { type: String, default: '', required: true },
    imgClass: { type: String, default: '', required: false },
    fixSize: { type: String, default: undefined, required: false },
    isThumbnail: { type: Boolean, default: false, required: false },
  },
  data() {
    return {
      NUXT_ENV_CURRENT_DATE: process.env.NUXT_ENV_CURRENT_DATE,
      imageSizeTailwindClass: undefined,
      width: undefined,
      height: undefined,
      boxSizes: {
        '2xs': 384,
        xs: 512,
        sm: 640,
        md: 768,
        lg: 1080,
        xl: 1280,
        '2xl': 1536,
      },
    }
  },
  computed: {
    buildtime() {
      return Date.parse(this.NUXT_ENV_CURRENT_DATE)
    },
    isWebpSupported() {
      return this.$store.state.isWebpSupported
    },
    imageInformation() {
      const images = Object.values(this.$store.state.media).filter((img) => {
        return img.url === this.picture
      })
      if (images.length === 0) {
        // eslint-disable-next-line no-console
        console.warn(
          `The image '${this.picture}' can not be found in the /media.json file. You have to run ./generateMediaInformation.js.`
        )
      }
      return images.length === 1
        ? images[0]
        : { alt: '', title: '', url: this.picture, dimensions: undefined }
    },
    responsiveUrl() {
      const extension = this.imageInformation.url?.split('.')?.reverse()[0]
      if (process.env.NODE_ENV === 'development' || extension === undefined) {
        return `${this.imageInformation.url}?v=${this.buildtime}`
      }
      if (
        this.fixSize === undefined &&
        this.imageSizeTailwindClass === undefined
      ) {
        return ''
      }
      const filePostFix =
        this.fixSize && this.isThumbnail
          ? `${this.fixSize}_thumbnail.${extension}`
          : this.fixSize && !this.isThumbnail
          ? `${this.fixSize}.${extension}`
          : this.isThumbnail
          ? `${this.imageSizeTailwindClass}_thumbnail.${extension}`
          : `${this.imageSizeTailwindClass}.${extension}`

      let responsiveUrl = this.imageInformation.url.replace(
        `.${extension}`,
        `_${filePostFix}`
      )
      if (this.isWebpSupported) {
        responsiveUrl = responsiveUrl.replace(`.${extension}`, '.webp')
      }
      return `${responsiveUrl}?v=${this.buildtime}`
    },
  },
  mounted() {
    this.canUseWebP()
    this.getImageSizeTailwindClass()
  },
  methods: {
    canUseWebP() {
      if (this.isWebpSupported !== undefined) {
        return
      }
      const isFirefoxVersionSupported =
        navigator.userAgent?.split('Firefox/')[1] >= 65.0
      if (isFirefoxVersionSupported) {
        this.$store.commit('setWebPSupport', isFirefoxVersionSupported)
        return
      }

      const elem = document.createElement('canvas')
      if (elem.getContext && elem.getContext('2d')) {
        this.$store.commit(
          'setWebPSupport',
          elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
        )
        return
      }
      this.$store.commit('setWebPSupport', false)
    },
    getImageSizeTailwindClass() {
      const imageBoxWidth = this.$refs.imageBox?.clientWidth
      const devicePixelRatio = window?.devicePixelRatio > 1.5 ? 2 : 1
      const imageSize = imageBoxWidth * devicePixelRatio
      this.imageSizeTailwindClass =
        imageSize <= this.boxSizes['2xs']
          ? '2xs'
          : imageSize <= this.boxSizes.xs
          ? 'xs'
          : imageSize <= this.boxSizes.sm
          ? 'sm'
          : imageSize <= this.boxSizes.md
          ? 'md'
          : imageSize <= this.boxSizes.lg
          ? 'lg'
          : imageSize <= this.boxSizes.xl
          ? 'xl'
          : '2xl'
      this.width = this.boxSizes[this.imageSizeTailwindClass]
      this.height = this.isThumbnail
        ? this.width
        : Math.round(
            this.boxSizes[this.imageSizeTailwindClass] /
              this.imageInformation?.dimensions?.ratio
          )
    },
  },
}
</script>
