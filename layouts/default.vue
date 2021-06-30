<template>
  <div>
    <div class="flex min-h-screen flex-col">
      <site-header class="py-6" />
      <Nuxt class="text-brand pb-6 flex-grow" />
      <site-footer />
    </div>
  </div>
</template>

<script>
import SiteFooter from '~/components/global/SiteFooter.vue'
import SiteHeader from '~/components/global/SiteHeader.vue'

export default {
  dev: process.dev,
  components: {
    SiteFooter,
    SiteHeader,
  },
  mounted() {
    // eslint-disable-next-line no-unused-expressions
    process.dev === true ? document.body.classList.add('debug-screens') : ''
  },
}
</script>
