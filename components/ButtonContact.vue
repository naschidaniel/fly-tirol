<template>
  <button class="btn-primary btn--large mt-4">
    <outline-chat-icon class="w-6 h-6" />
    <nuxt-link to="/kontakt" class="ml-4">Buchen</nuxt-link>
  </button>
</template>

<script>
import OutlineChatIcon from './icons/OutlineChatIcon.vue'

export default {
  components: { OutlineChatIcon },
}
</script>
