<!-- should we use this instead? 
https://github.com/PivaleCo/nuxt-image-loader-module
-->

<template>
  <img
    v-if="responsiveUrl != ''"
    class="cursor-pointer"
    :src="responsiveUrl"
    :width="width"
    :height="height"
    :alt="imageInformation['alt']"
    :title="imageInformation['title']"
  />
</template>

<script>
export default {
  props: {
    height: { type: String, default: '' },
    picture: { type: String, default: '', required: true },
    width: { type: String, default: '' },
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
        : { alt: '', title: '', url: this.picture }
    },
    responsiveUrl() {
      const extension = this.imageInformation.url?.split('.')?.reverse()[0]
      if (process.env.NODE_ENV === 'development' || extension === undefined) {
        return this.imageInformation.url
      }
      return this.imageInformation.url.replace(
        `.${extension}`,
        `_${this.$store.state.windowWidth}.${extension}`
      )
    },
  },
}
</script>
