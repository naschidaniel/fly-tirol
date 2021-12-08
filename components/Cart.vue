<template>
  <div class="w-full lg:w-5/6 xl:w-2/3">
    <Alert v-if="isCartItems">
      <div>
        <p class="font-bold">
          Es wurden noch keine Produkte in den Warenkorb hinzugefügt.
        </p>
        <p class="text-sm">
          <nuxt-link to="/">Hier geht es zur Startseite</nuxt-link>
        </p>
      </div>
    </Alert>
    <div v-else>
      <table class="table-fixed border w-full">
        <thead>
          <tr>
            <th class="w-1/2 p-1 md:p-2 text-sm md:text-base border">
              Produkt
            </th>
            <th class="w-1/4 p-1 md:p-2 text-sm md:text-base border">Preis</th>
            <th class="w-1/4 p-1 md:p-2 text-sm md:text-base border">Anzahl</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartItems" :key="item.key">
            <td class="p-1 sm:p-2 md:p-3 text-left border">
              <p class="text-sm md:text-base font-bold">{{ item.title }}</p>
              <p
                v-if="item.variant.title !== 'Default Title'"
                class="text-sm md:text-md"
              >
                {{ item.variant.title }}
              </p>
              <div v-if="item.customAttributes.length !== 0">
                <p
                  v-for="attribute in item.customAttributes"
                  :key="attribute.key"
                  class="text-sm md:text-md"
                >
                  {{ attribute.key }}: {{ attribute.value }}
                </p>
              </div>
            </td>
            <td class="text-sm md:text-base p-1 md:p-3 text-center border">
              {{ formatPrice(item.variant.price) }}
            </td>
            <td class="p-1 sm:p-3 align-middle border">
              <div class="flex justify-center">
                <select
                  class="
                    text-sm
                    md:text-base
                    block
                    text-center
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                  @change="updateLineItems(item.id, $event)"
                >
                  <option :selected="item.quantity === 0" value="0">0</option>
                  <option :selected="item.quantity === 1" value="1">1</option>
                  <option :selected="item.quantity === 2" value="2">2</option>
                  <option :selected="item.quantity === 3" value="3">3</option>
                  <option :selected="item.quantity === 4" value="4">4</option>
                  <option :selected="item.quantity === 5" value="5">5</option>
                </select>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-right mt-6">
        <span
          >Gesamtpreis:
          <span class="font-bold">{{
            formatPrice(checkout.subtotalPrice)
          }}</span></span
        ><br />
        <span class="text-sm"
          >Im Preis ist die gesetzliche Mehrwertsteuer von 20% enthalten.</span
        >
      </div>
      <div class="w-full text-right mt-3">
        <button
          aria-label="refresh Cart"
          class="btn-primary"
          @click.prevent="refreshCart()"
        >
          <outline-refresh-icon style="hight: 1em; widht: 1em" />&nbsp;<span
            >Warenkorb aktualisieren</span
          >
        </button>
      </div>
      <div class="text-center mt-14">
        <a :href="checkout.webUrl">
          <button aria-label="Order Products" class="btn-primary btn--large">
            <outline-shopping-bag-icon
              style="hight: 1em; widht: 1em"
            />&nbsp;<span>Bestellung abschließen</span>
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from '@vue/composition-api'
import Alert from './Alert.vue'
import OutlineRefreshIcon from './icons/OutlineRefreshIcon.vue'
import OutlineShoppingBagIcon from './icons/OutlineShoppingBagIcon.vue'
import { useShopifyCart } from '~/composable/useShopifyCart'
import { useFormat } from '~/composable/useFormat'

export default defineComponent({
  name: 'Cart',
  components: {
    Alert,
    OutlineRefreshIcon,
    OutlineShoppingBagIcon,
  },
  setup() {
    const { formatPrice } = useFormat()
    const {
      cartItems,
      lineItemsChanged,
      checkout,
      isCartItems,
      refreshCart,
      updateLineItems,
    } = useShopifyCart()
    onMounted(() => {
      lineItemsChanged.value = []
    })
    return {
      cartItems,
      checkout,
      formatPrice,
      isCartItems,
      refreshCart,
      updateLineItems,
    }
  },
})
</script>
