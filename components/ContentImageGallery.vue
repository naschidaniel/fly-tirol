<template>
  <section class="py-8 px-2 w-100">
    <div class="flex flex-wrap -mx-4 mb-4">
      <div v-for="img in imageGalery" :key="img.url" class="md:w-1/3 px-4 mb-6">
        <responsive-image
          class="rounded shadow-md"
          :alt="img.alt"
          :picture="img.url"
          :title="img.title"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ResponsiveImage from './ResponsiveImage.vue'
export default {
  components: { ResponsiveImage },
  props: {
    path: { type: String, default: '/media' },
  },
  computed: {
    imageGalery() {
      return Object.values(this.$store.state.media).filter((img) => {
        return img.path === this.path
      })
    },
  },
}
</script>
