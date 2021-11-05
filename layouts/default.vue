<template>
  <div>
    <div class="flex min-h-screen flex-col">
      <site-cookie-banner />
      <site-header class="py-6" />
      <Nuxt class="text-brand pb-6 flex-grow" />
      <site-footer />
    </div>
  </div>
</template>

<script>
import SiteCookieBanner from '~/components/global/SiteCookieBanner.vue'
import SiteFooter from '~/components/global/SiteFooter.vue'
import SiteHeader from '~/components/global/SiteHeader.vue'

export default {
  components: {
    SiteCookieBanner,
    SiteFooter,
    SiteHeader,
  },
  mounted() {
    if (process.env.NODE_ENV === 'development') {
      document.body.classList.add('debug-screens')
    }
  },
}
</script>
