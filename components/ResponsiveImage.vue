<template>
  <div ref="imageBox" class="image-box">
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
  },
  data() {
    return {
      buildtime: process.env.NUXT_ENV_CURRENT_TIMESTAMP,
      imageBoxWidthTailwindClass: 'lg',
      width: undefined,
      height: undefined,
      screenSizes: {
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
      const filePostFix = this.fixSize
        ? `${this.fixSize}.${extension}`
        : `${this.imageBoxWidthTailwindClass}.${extension}`
      const responsiveUrl = this.imageInformation.url.replace(
        `.${extension}`,
        `_${filePostFix}`
      )
      return responsiveUrl !== '' ? `${responsiveUrl}?v=${this.buildtime}` : ''
    },
  },
  mounted() {
    this.getimageBoxWidth()
  },
  methods: {
    getimageBoxWidth() {
      const imageBoxWidth = this.$refs.imageBox?.clientWidth
      const devicePixelRatio = window?.devicePixelRatio ?? 1
      const imageSize = imageBoxWidth * devicePixelRatio
      this.imageSizeTailwindClass =
        imageSize <= this.screenSizes['2xs']
          ? '2xs'
          : imageSize <= this.screenSizes.xs
          ? 'xs'
          : imageSize <= this.screenSizes.sm
          ? 'sm'
          : imageSize <= this.screenSizes.md
          ? 'md'
          : imageSize <= this.screenSizes.lg
          ? 'lg'
          : imageSize <= this.screenSizes.xl
          ? 'xl'
          : '2xl'
      this.width = this.screenSizes[this.imageSizeTailwindClass]
      this.height = Math.round(
        this.screenSizes[this.imageSizeTailwindClass] /
          this.imageInformation?.dimensions?.ratio
      )
    },
  },
}
</script>
