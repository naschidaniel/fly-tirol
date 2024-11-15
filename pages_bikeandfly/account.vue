<template>
  <div class="max-w-90 w-full mx-auto py-6 nuxt-content">
    <h1>Mein Account</h1>
    <div v-if="user?.is_authenticated">
      <p>
        Registrierte Email Adresse: {{ user?.email }} <span v-if="user?.is_email_verified"><IconOutlineShieldCheck style="height: 1em; width: 1em" /></span> <span v-else><IconOutlineShieldExclamation style="height: 1em; width: 1em" /></span>
      </p>
      <p>Name: {{ user?.first_name }} {{ user?.last_name }}</p>
    </div>
    <div v-else>
      <p>Sie sind nicht eingeloggt. Sie können sich hier einloggen oder einen neuen Account erstellen.</p>
      <a
        href="/shop/user-ui/login"
        class="btn-primary btn--large w-1/5"
      >Einloggen / Registrieren</a>
    </div>
    {{ user }}
  </div>
</template>

<script setup lang="ts">
import IconOutlineShieldExclamation from '@/components/icon/IconOutlineShieldExclamation.vue'
import IconOutlineShieldCheck from '@/components/icon/IconOutlineShieldCheck.vue'
import { useBackend } from '@/composable/useBackend'

const { user } = useBackend()
</script>
