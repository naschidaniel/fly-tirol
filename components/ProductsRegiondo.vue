<template>
  <div>
    <iframe
      :src="url"
      style="border: 0px solid #eee; background: white"
      class="w-full"
      frameborder="0"
      height="1000"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'ProductsRegiondo',
  props: {
    flight: { type: String, required: true },
  },
  computed: {
    url() {
      return `/regiondo_whitecloud/bookingwidget_de_${this.flight}.html`
    },
  },
}
</script>
