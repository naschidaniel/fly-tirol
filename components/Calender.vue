<template>
  <div>
    Kalender
    <div v-for="entry in calender" :key="entry.id">
      {{ entry.title }} {{ entry.dateString }}
      <span @click.prevent="bookProduct(entry.id)">Buchen</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useShop } from '~/composable/useShop'

export default defineComponent({
  name: 'Calender',
  setup() {
    const { bookProduct, calender } = useShop()
    return { bookProduct, calender }
  },
})
</script>
