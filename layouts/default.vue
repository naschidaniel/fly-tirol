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
}
</script>
