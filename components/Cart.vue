<template>
  <div>
    <div
      v-if="isCartItems"
      class="flex border border-blue-900 text-blue-900 px-4 py-3"
      role="alert"
    >
      <div class="py-2">
        <outline-information-circle-icon class="h-6 w-6 text-teal-500 mr-4" />
      </div>
      <div>
        <p class="font-bold">
          Es wurden noch keine Produkte in den Warenkorb hinzugefügt.
        </p>
        <p class="text-sm">
          <nuxt-link to="/">Hier geht es zur Startseite</nuxt-link>
        </p>
      </div>
    </div>
    <div v-else>
      <table class="table-fixed border w-full">
        <thead>
          <tr>
            <th class="w-4/6 p-2 border">Produkt</th>
            <th class="w-1/6 p-2 border">Preis</th>
            <th class="w-1/6 p-2 border">Anzahl</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartItems" :key="item.key">
            <td class="p-1 sm:p-3 text-left border">
              <p class="font-bold">{{ item.title }}</p>
              <p>{{ item.variant.title }}</p>
            </td>
            <td class="p-1 sm:p-3 text-center border">
              {{ item.variant.price | formatPrice }}
            </td>
            <td class="p-1 sm:p-3 text-center border">
              <select
                class="
                  block
                  w-full
                  mt-1
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
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-right mt-6">
        <span
          >Gesamtpreis:
          <span class="font-bold">{{
            checkout.subtotalPrice | formatPrice
          }}</span></span
        ><br />
        <span class="text-sm"
          >Im Preis sind die gesetzlichen Steuern enthalten</span
        >
      </div>
      <div class="w-full text-right mt-3">
        <button class="btn-primary" @click.prevent="refreshCart()">
          <outline-refresh-icon style="hight: 1em; widht: 1em" />&nbsp;<span
            >Warenkorb aktualisieren</span
          >
        </button>
      </div>
      <div class="text-center mt-6">
        <a :href="checkout.webUrl">
          <button class="btn-primary btn--large">
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
import OutlineInformationCircleIcon from './icons/OutlineInformationCircleIcon.vue'
import OutlineRefreshIcon from './icons/OutlineRefreshIcon.vue'
import OutlineShoppingBagIcon from './icons/OutlineShoppingBagIcon.vue'

export default {
  name: 'Cart',
  components: {
    OutlineInformationCircleIcon,
    OutlineRefreshIcon,
    OutlineShoppingBagIcon,
  },
  data() {
    return {
      lineItemsChanged: [],
    }
  },
  computed: {
    checkout() {
      return this.$store.state.checkout
    },
    cartItems() {
      return this.$store.state.checkout?.lineItems
    },
    isCartItems() {
      return (
        this.$store.state.checkout?.lineItems?.length === 0 ||
        this.$store.state.checkout?.lineItems === undefined
      )
    },
  },
  methods: {
    updateLineItems(id, e) {
      const quantity = parseInt(e.target.value)
      const updateIndex = this.lineItemsChanged
        .map((item) => item?.id)
        .indexOf(id)
      if (updateIndex === -1) {
        this.lineItemsChanged.push({ id, quantity })
      } else {
        this.lineItemsChanged[updateIndex] = { id, quantity }
      }
    },
    async removeItems(checkoutId) {
      const lineItemsToRemove = this.lineItemsChanged
        .filter((item) => item.quantity === 0)
        .map((item) => item.id)
      if (lineItemsToRemove.length !== 0) {
        await this.$shopify.checkout
          .removeLineItems(checkoutId, lineItemsToRemove)
          .then((checkout) => {
            this.$store.commit('setCheckout', checkout)
          })
      }
    },
    async updateItems(checkoutId) {
      const lineItemsToUpdate = this.lineItemsChanged.filter(
        (item) => item.quantity !== 0
      )
      if (lineItemsToUpdate.length !== 0) {
        await this.$shopify.checkout
          .updateLineItems(checkoutId, lineItemsToUpdate)
          .then((checkout) => {
            this.$store.commit('setCheckout', checkout)
          })
      }
    },
    async refreshCart() {
      const checkoutId = this.$store.state.checkout?.id
      if (checkoutId === undefined) return
      await this.removeItems(checkoutId)
      await this.updateItems(checkoutId)
    },
  },
}
</script>
