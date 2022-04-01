<template>
  <div>
    <h2>{{ flight }}</h2>
    <iframe
      :src="url"
      style="border: 0px solid #eee; background: white"
      class="w-full"
      frameborder="0"
      height="800"
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
      const flightPostfix =
        this.flight === 'Akrobatikflug Hopfgarten'
          ? 'akrobatikflug_hopfgarten'
          : this.flight === 'Akrobatikflug Söll'
          ? 'akrobatikflug_soell'
          : this.flight === 'Gleitflug Hopfgarten'
          ? 'gleitflug_hopfgarten'
          : this.flight === 'Gleitflug Söll'
          ? 'gleitflug_soell'
          : this.flight === 'Thermikflug Hopfgarten'
          ? 'thermikflug_hopfgarten'
          : this.flight === 'Thermikflug Söll'
          ? 'thermikflug_soell'
          : ''
      return `/regiondo_whitecloud/bookingwidget_de_${flightPostfix}.html`
    },
  },
}
</script>
