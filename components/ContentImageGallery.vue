<template>
  <section class="py-8 w-100">
    <div class="flex flex-wrap">
      <div v-for="img in imageGalery" :key="img.url" class="w-1/2 md:w-1/4 p-2">
        <div class="aspect-w-1 aspect-h-1 overflow-hidden">
          <responsive-image
            class="rounded shadow-md object-cover w-full h-full"
            :alt="img.alt"
            :picture="img.url"
            :title="img.title"
          />
        </div>
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
