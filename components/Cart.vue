<template>
  <div class="my-auto">
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
            {{ item.title }}<br />
            {{ item.variant.title }}
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
            >
              <option :selected="item.quantity === 0">0</option>
              <option :selected="item.quantity === 1">1</option>
              <option :selected="item.quantity === 2">2</option>
              <option :selected="item.quantity === 3">3</option>
              <option :selected="item.quantity === 4">4</option>
              <option :selected="item.quantity === 5">5</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="w-full text-right mt-3">
      <button class="btn-primary btn--large" @click.prevent="refreshCart()">
        <outline-refresh-icon style="hight: 1em; widht: 1em" />&nbsp;<span
          >Warenkorb aktualisieren</span
        >
      </button>
    </div>
  </div>
</template>

<script>
import OutlineRefreshIcon from './icons/OutlineRefreshIcon.vue'

export default {
  name: 'Cart',
  components: { OutlineRefreshIcon },
  computed: {
    cartItems() {
      console.log(this.$store.state.checkout?.lineItems)
      return this.$store.state.checkout?.lineItems
    },
  },
  methods: {
    refreshCart() {
      console.log('clicked')
    },
  },
}
</script>
