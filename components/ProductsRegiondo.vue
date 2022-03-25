<template>
  <div>
    <h2>{{ flight }}</h2>
    <iframe
      :src="url"
      width="400"
      height="500"
      style="border: 0px solid #eee; background: white"
      frameborder="0"
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
      return `https://naschi.info/regiondo_whitecloud/bookingwidget_de_${flightPostfix}.html`
    },
  },
}
</script>
