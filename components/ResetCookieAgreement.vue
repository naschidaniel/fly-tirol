<template>
  <div>
    <div v-if="isCookieAgreement" class="m-4">
      <strong>Sie haben der Cookie Vereinbarung zugestimmt.</strong><br />
      Hier finden Sie eine Auflistung aller gespeicherten Cookies.
    </div>
    <table>
      <tr>
        <th>Cookie-Name</th>
        <th>Cookie-Wert</th>
      </tr>
      <tr v-for="(value, index) in allCokies" :key="index">
        <td class="p-2">{{ index }}</td>
        <td class="p-2">{{ value }}</td>
      </tr>
    </table>
    <button class="btn-primary mt-2" @click="delAllCookies()">
      Alle Cookies der Website löschen
    </button>
  </div>
</template>

<script>
export default {
  name: 'ResetCookieAgreement',
  data() {
    return {
      allCokies: {},
    }
  },
  computed: {
    isCookieAgreement() {
      return this.$store.state.cookieAgreement
    },
  },
  watch: {
    isCookieAgreement() {
      this.getAllCookies()
    },
  },
  mounted() {
    this.getAllCookies()
  },
  methods: {
    getAllCookies() {
      this.allCokies = this.$cookies.getAll()
    },
    delAllCookies() {
      this.$cookies.removeAll()
      this.$store.commit('setCookieAgreement', false)
      this.getAllCookies()
    },
  },
}
</script>
