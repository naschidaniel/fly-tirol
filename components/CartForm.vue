<template>
  <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
    <div class="mt-8 max-w-md">
      <div class="grid grid-cols-1 gap-6">
        <h2>Kontaktinformation</h2>
        <input
          v-model="email"
          name="email"
          type="email"
          class="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="john@example.com"
        />
        <input
          v-model="phone"
          name="phone"
          type="tel"
          class="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="+43 1234774"
        />
        <h2>Rechnungsadresse</h2>
        <input
          v-model="firstName"
          name="firstName"
          type="text"
          class="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Vorname"
        />
        <input
          v-model="lastName"
          name="lastName"
          type="text"
          class="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Nachname"
        />
        <input
          v-model="address1"
          name="address1"
          type="text"
          class="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Straße und Hausnummer"
        />
        <input
          v-model="address2"
          name="address2"
          type="text"
          class="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Zusatzangaben zur Adresse"
        />
        <input
          v-model="zip"
          name="zip"
          type="text"
          class="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Postleitzahl"
        />
        <input
          v-model="city"
          name="city"
          type="text"
          class="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Stadt"
        />
        <input
          v-model="country"
          name="land"
          type="text"
          class="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Land"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  name: 'CartForm',
  head() {
    const metatags = generateMetatags(
      'Buchen',
      'Buche dienen Traum vom Fliegen bei der Flugschule Fly-Tirol.com',
      this.$route.fullPath
    )
    return { title: 'Buchen', meta: metatags }
  },
  computed: {
    address1: {
      get() {
        return this.$store.state.shippingAddress.address1
      },
      set(value) {
        this.$store.commit('setAddress1', value)
      },
    },
    address2: {
      get() {
        return this.$store.state.shippingAddress.address2
      },
      set(value) {
        this.$store.commit('setAddress2', value)
      },
    },
    city: {
      get() {
        return this.$store.state.shippingAddress.city
      },
      set(value) {
        this.$store.commit('setCity', value)
      },
    },
    country: {
      get() {
        return this.$store.state.shippingAddress.country
      },
      set(value) {
        this.$store.commit('setCountry', value)
      },
    },
    email: {
      get() {
        return this.$store.state.shippingAddress.email
      },
      set(value) {
        this.$store.commit('setEmail', value)
      },
    },
    firstName: {
      get() {
        return this.$store.state.shippingAddress.firstName
      },
      set(value) {
        this.$store.commit('setFirstName', value)
      },
    },
    lastName: {
      get() {
        return this.$store.state.shippingAddress.lastName
      },
      set(value) {
        this.$store.commit('setLastName', value)
      },
    },
    phone: {
      get() {
        return this.$store.state.shippingAddress.phone
      },
      set(value) {
        this.$store.commit('setPhone', value)
      },
    },
    zip: {
      get() {
        return this.$store.state.shippingAddress.zip
      },
      set(value) {
        this.$store.commit('setZip', value)
      },
    },
  },
}
</script>
