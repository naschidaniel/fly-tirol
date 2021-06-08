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
      return images.length === 1 ? images[0] : { alt: '', title: '', url: '' }
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
