<template>
  <div class="nuxt-content">
    <div class="mb-4">
      <h2>Verfügbare Produkte</h2>
      <div
        v-for="product in calenderProductsAvailable"
        :key="product"
        class="inline"
      >
        <span
          class="
            inline-flex
            items-center
            justify-center
            px-2
            py-1
            mx-2
            mb-2
            leading-none
            text-gray-900
            bg-gray-100
            rounded-full
            cursor-pointer
          "
          @click="setCheckedProducts(product)"
        >
          <span v-if="calenderProductsChecked.includes(product)">
            <OutlineCheckIcon class="text-green-600" />
          </span>
          <span v-else>
            <OutlineXIcon class="text-red-400" />
          </span>
          {{ product }}
        </span>
      </div>
    </div>
    <div class="flex flex-wrap justify-center">
      <div
        v-for="entry in calenderFiltered"
        :key="entry.id"
        class="m-2 p-4 border-2 rounded-lg w-1/3"
      >
        <h3>
          <nuxt-link :to="`${entry.productType.toLowerCase()}/${entry.slug}`">{{
            entry.title
          }}</nuxt-link>
        </h3>

        <p class="mb-2">
          {{ entry.dateString }}
        </p>
        <button
          class="cursor-pointer btn-primary"
          @click.prevent="bookProduct(entry.id)"
        >
          Buchen
        </button>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useShop } from '~/composable/useShop'
import OutlineCheckIcon from '~/components/icons/OutlineCheckIcon.vue'
import OutlineXIcon from '~/components/icons/OutlineXIcon.vue'

export default defineComponent({
  name: 'Calender',
  components: { OutlineCheckIcon, OutlineXIcon },
  setup() {
    const {
      bookProduct,
      calender,
      calenderFiltered,
      calenderProductsAvailable,
      calenderProductsChecked,
      setCheckedProducts,
    } = useShop()
    return {
      bookProduct,
      calender,
      calenderFiltered,
      calenderProductsAvailable,
      calenderProductsChecked,
      setCheckedProducts,
    }
  },
})
</script>
