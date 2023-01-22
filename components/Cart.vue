<template>
  <div class="w-full lg:w-5/6 xl:w-2/3">
    <Alert v-if="!isCartItems">
      <div>
        <p class="font-bold">
          Es wurden noch keine Produkte in den Warenkorb hinzugefügt.
        </p>
        <p class="text-sm">
          <NuxtLink to="/">Hier geht es zur Startseite</NuxtLink>
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
          <tr v-for="item in cart?.cart_items" :key="item.id">
            <td class="p-1 sm:p-2 md:p-3 text-left border">
              <p class="text-sm md:text-base font-bold">{{ item.product }}</p>
              <p class="text-sm md:text-md">
                {{ item.comment }}
              </p>
              <div v-if="item.product_variant.length !== 0">
                <p
                  v-for="variant in item.product_variant"
                  :key="variant.id"
                  class="text-sm md:text-md"
                >
                  {{ variant.product_variant }}:
                  {{ formatProductVariantOptionTitle(variant) }}
                </p>
              </div>
              <div class="flex justify-end">
                <div>
                  <button
                    class="btn-warning"
                    @click.prevent="deleteProduct(item?.id)"
                  >
                    Produkt entfernen
                  </button>
                </div>
              </div>
            </td>
            <td class="text-sm md:text-base p-1 md:p-3 text-center border">
              {{ formatPrice(item.item_price) }}
            </td>
            <td class="p-1 sm:p-3 align-middle border">
              <div class="flex justify-center">
                <select
                  class="text-sm md:text-base block text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  @change.stop="(e: Event) => updateProduct(item?.id, (e.target as HTMLSelectElement).value)"
                >
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
            formatPrice(cart?.get_total_price)
          }}</span></span
        ><br />
        <span class="text-sm"
          >Im Preis ist die Mehrwertsteuer von
          {{ formatPrice(cart?.get_total_tax) }} enthalten.</span
        >
      </div>
      <div class="text-center mt-14">
        <a
          :href="cart?.order_url"
          aria-label="Order Products"
          class="btn-primary btn--large"
        >
          <IconOutlineShoppingBag style="height: 1em; widht: 1em" />&nbsp;<span
            >Bestellung abschließen</span
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Alert from './Alert.vue'
import IconOutlineRefresh from './icon/IconOutlineRefresh.vue'
import IconOutlineShoppingBag from './icon/IconOutlineShoppingBag.vue'
import { useBackend } from '@/composable/useBackend'
import { useFormat } from '@/composable/useFormat'

const { formatPrice, formatProductVariantOptionTitle } = useFormat()
const { cart, isCartItems, deleteProduct, updateProduct } = useBackend()
</script>
