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
import { defineComponent, onMounted } from '@vue/composition-api'
import SiteCookieBanner from '~/components/global/SiteCookieBanner.vue'
import SiteFooter from '~/components/global/SiteFooter.vue'
import SiteHeader from '~/components/global/SiteHeader.vue'
import { useFetchShopify } from '~/composable/useFetchShopify'
import { useShopifyCart } from '~/composable/useShopifyCart'

export default defineComponent({
  components: {
    SiteCookieBanner,
    SiteFooter,
    SiteHeader,
  },
  setup() {
    const { initShop } = useFetchShopify()
    const { loadCheckout } = useShopifyCart()
    onMounted(() => {
      initShop()
      loadCheckout()
    })
  },
})
</script>
