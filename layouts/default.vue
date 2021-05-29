<template>
  <div>
    <div class="flex min-h-screen flex-col">
      <site-header class="p-6" />
      <div class="flex-1 border">
        <div class="mx-auto lg:max-w-7xl">
          <Nuxt class="text-gray-900 text-xl" />
        </div>
      </div>
      <TheFooter class="m-3" />
    </div>
  </div>
</template>

<script>
const SiteHeader = () => import('~/components/global/SiteHeader')
export default {
  components: {
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
