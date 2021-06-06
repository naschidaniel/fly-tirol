<template>
  <img
    :src="responsive_picture"
    :width="width"
    :height="hight"
    :alt="alt"
    :title="title"
  />
</template>

<script>
export default {
  props: {
    alt: { type: String, default: '' },
    hight: { type: String, default: '' },
    picture: { type: String, default: '', required: true },
    title: { type: String, default: '' },
    width: { type: String, default: '' },
  },
  computed: {
    responsive_picture() {
      const extension = this.picture?.split('.')?.reverse()[0]
      if (process.env.NODE_ENV === 'development' || extension === undefined) {
        return this.picture
      }
      return this.picture.replace(
        `.${extension}`,
        `_${this.$store.state.windowWidth}.${extension}`
      )
    },
  },
}
</script>
