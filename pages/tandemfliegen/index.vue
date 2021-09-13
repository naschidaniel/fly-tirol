<template>
  <div>
    <PageHeader pre-headline="Gehe mit FlyTirol" headline="Tandemfliegen">
      {{ description }}
    </PageHeader>
    <ProductList :pages="pages" />
    <div class="flex flex-wrap max-w-90 mx-auto py-12 lg:py-24 nuxt-content">
      <h2>Bildergalerie</h2>
      <ContentImageGallery
        path="/media/tandemfliegen/galerie/"
        class="w-full md:pl-8"
      />
    </div>
    <info-box headline="Voraussetzungen für einen Tandemflug">
      <ul>
        <li>Festes Schuhwerk</li>
        <li>Sportliche und den Temperaturen und Wetter angepasste Kleidung</li>
        <li>
          Du wiegst mindestens 25 kg und bist beim Gehen nicht eingeschränkt.
          Sollte es eine Einschränkung geben, sprich uns bitte vorab darauf an,
          damit wir dafür eine gemeinsame Lösung finden können.
        </li>
      </ul>
    </info-box>
  </div>
</template>

<script>
import InfoBox from '~/components/InfoBox.vue'
import ProductList from '~/components/ProductList.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { InfoBox, ProductList },
  async asyncData({ $content }) {
    const pages = await $content('tandemfliegen').sortBy('order').fetch()
    return { pages }
  },
  data() {
    return {
      title: 'Tandemfliegen',
      description:
        'Einmal das Gefühl der Freiheit hoch über den Gipfeln der Kitzbüheler Alpen mit Blick auf den Alpenhauptkamm und den Wilden Kaiser bei einem Tandemflug mit einem unserer Top-Tandempiloten genießen! Egal ob im Winter oder Sommer, die Fly Tirol Flugschule zeigt dir das Alpenpanorama aus der Vogelperspektive.',
    }
  },
  head() {
    const metatags = generateMetatags(
      this.title,
      this.description,
      this.$route.fullPath
    )
    return { title: this.title, meta: metatags }
  },
}
</script>
