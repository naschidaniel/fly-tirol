<template>
  <div>
    <iframe
      :src="`/regiondo_whitecloud/bookingwidget_de_${page.slug}.html`"
      style="border: 0px solid #eee; background: white"
      class="w-full"
      frameborder="0"
      height="1100"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script setup>
import { usePage } from '~/composable/usePage'

const { page } = usePage()
</script>
