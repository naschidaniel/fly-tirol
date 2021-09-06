<template>
  <div class="my-auto w-full lg:w-5/6">
    <div class="grid grid-cols-1 gap-6">
      <label class="block">
        <span :class="isFormValid ? 'text-gray-700' : 'text-red-600'"
          >Wähle das gewünschtes Datum</span
        >
        <input
          v-model="selectedDate"
          type="date"
          :min="today"
          class="
            mt-1
            block
            w-full
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          :class="
            (!isDateValid && selectedDate !== '') || !isFormValid
              ? 'border-red-600'
              : 'border-gray-300'
          "
          @change="checkDate()"
        />
      </label>
      <button
        class="btn-primary text-sm md:text-base"
        :class="isFormValid && isDateValid ? '' : 'btn--disabled'"
        @click.prevent="bookProduct(productVariantsId)"
      >
        Buche deinen Wunschtermin
        <span v-if="isDateValid"
          >&nbsp; {{ selectedDateTimestamp | formatDate }}</span
        >
      </button>
    </div>
  </div>
</template>

<script>
import { formatDate } from '~/util/formatDate.js'

export default {
  name: 'ProductAppointment',
  data() {
    return {
      selectedDate: '',
      isFormValid: true,
      isDateValid: false,
    }
  },
  computed: {
    productVariantsId() {
      const products = this.$store.state.products.filter(
        (p) => p.handle === this.$route.params.slug
      )
      return products[0]?.variants[0].id
    },
    today() {
      return new Date().toISOString().split('T')[0]
    },
    selectedDateTimestamp() {
      return new Date(this.selectedDate)
    },
  },
  methods: {
    checkDate() {
      const entryTimestamp = new Date(this.selectedDate).getTime()
      const todayTimestamp = new Date(this.today).getTime()
      const validation = entryTimestamp >= todayTimestamp
      this.isFormValid = validation
      this.isDateValid = validation
    },
    async bookProduct(variantId) {
      if (this.selectedDate === '' || !this.isDateValid) {
        this.isDateValid = false
        this.isFormValid = false
        return
      }
      const lineItemsToAdd = [
        {
          variantId,
          quantity: 1,
          customAttributes: [
            {
              key: 'Wunschtermin nach Absprache',
              value: formatDate(this.selectedDateTimestamp),
            },
          ],
        },
      ]
      const checkoutId = this.$store.state.checkout.id
      await this.$shopify.checkout
        .addLineItems(checkoutId, lineItemsToAdd)
        .then((checkout) => {
          this.$store.commit('setCheckout', checkout)
        })
      this.$router.push({ path: '/buchen' })
    },
  },
}
</script>
