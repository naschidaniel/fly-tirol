<template>
  <div>
    <iframe
      :src="url"
      style="border: 0px solid #eee; background: white"
      class="w-full"
      frameborder="0"
      height="1100"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ProductsRegiondo',
  props: {
    flight: { type: String, required: true },
  },
  setup(props) {
    const url = `/regiondo_whitecloud/bookingwidget_de_${props.flight}.html`
    return { url }
  },
})
</script>
