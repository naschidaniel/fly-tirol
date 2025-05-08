<template>
  <div>
    <form @submit.prevent="submit">
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >Vorname</label>
          <input
            id="first_name"
            v-model="first_name"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Max"
            required
          >
        </div>
        <div>
          <label
            for="last_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >Nachname</label>
          <input
            id="last_name"
            v-model="last_name"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Mustermann"
            required
          >
        </div>
        <div>
          <label
            for="last_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >Geburtsjahr</label>
          <input
            id="last_name"
            v-model="birthdate"
            type="date"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          >
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
          >Email Adresse</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="john.doe@company.com"
            required
          >
        </div>
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300"
            required
          >
        </div>
        <label
          for="remember"
          class="ms-2 text-sm font-medium text-gray-900"
        >Eltern haften für ihre Kinder am Parkourrennen wenn sich jemand verletzt. Vor dem abschicken haben Sie die <a
          href="/agb"
          class="text-blue-600 hover:underline"
        >AGB</a> und <a
          href="/dsgvo"
          class="text-blue-600 hover:underline"
        >DSGVO</a> gelesen.</label>
      </div>
      <button
        type="submit"
        class="btn-primary btn--large w-full sm:w-auto text-center"
      >
        Absenden
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useBackend } from '@/composable/useBackend'

const { postRegistrationForm } = useBackend()

const first_name = ref('')
const last_name = ref('')
const birthdate = ref('')
const email = ref('')

function submit() {
  postRegistrationForm({
    name: `${first_name.value} ${last_name.value}`,
    birthdate: birthdate.value,
    email: email.value,
  })
    .then(() => {
      alert('Formular erfolgreich gesendet!')
    })
    .catch((error) => {
      console.error('Fehler beim Senden des Formulars:', error)
      alert('Fehler beim Senden des Formulars. Bitte versuchen Sie es später erneut.')
    })
}
</script>
