<template>
  <div>
    <div
      v-if="pages.length === 0"
      class="flex justify-center max-w-90 mx-auto py-4"
    >
      <span class="text-lg font-bold"
        >Vielen Dank für dein Interesse. Leider sind die Produkte noch nicht
        online. Gerne kannst du mit uns
        <nuxt-link class="underline" to="/kontakt">kontakt</nuxt-link>
        aufnehmen.</span
      >
    </div>
    <div
      v-else
      class="card--grid grid-gap-1 max-w-full md:max-w-90 mx-auto md:py-12"
    >
      <div v-for="page in pages" :key="page.title">
        <ProductCard
          class="p-4"
          :slug="`${routeName}/${page.slug}`"
          :page="page"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import ProductCard from './ProductCard.vue'
import { useNavigation } from '~/composable/useNavigation'
import { useMetaTags } from '~/composable/useMetaTags'

export default defineComponent({
  components: { ProductCard },
  setup() {
    const { pages } = useMetaTags()
    const { routeName } = useNavigation()
    return { routeName, pages }
  },
})
</script>
