<template>
  <div>
    <div class="flex min-h-screen flex-col">
      <site-header class="py-6" />
      <Nuxt class="text-brand pb-6 flex-grow" />
      <site-footer class="m-3" />
    </div>
  </div>
</template>

<script>
import SiteFooter from '~/components/global/SiteFooter.vue'
import SiteHeader from '~/components/global/SiteHeader.vue'

export default {
  components: {
    SiteFooter,
    SiteHeader,
  },
  mounted() {
    this.setWindowWidth()
  },
  methods: {
    setWindowWidth() {
      if (window.innerWidth <= 640) {
        this.$store.commit('setWindowWidth', 'sm')
      } else if (window.innerWidth <= 768) {
        this.$store.commit('setWindowWidth', 'md')
      } else if (window.innerWidth <= 1024) {
        this.$store.commit('setWindowWidth', 'lg')
      } else if (window.innerWidth <= 1280) {
        this.$store.commit('setWindowWidth', 'xl')
      } else {
        this.$store.commit('setWindowWidth', '2xl')
      }
    },
  },
}
</script>
