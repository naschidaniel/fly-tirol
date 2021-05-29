<template>
  <div>
    <div class="flex min-h-screen flex-col">
      <site-header class="p-6" />
      <div class="flex-1 border">
        <div class="mx-auto lg:max-w-7xl">
          <Nuxt class="text-gray-900 text-xl" />
        </div>
      </div>
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

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
}
</style>
