<template>
  <div>
    <PageHeader :hero="hero" />
    <product-list :pages="pages" />
    <info-box headline="Dein Weg zum eigenständigen Fliegen als Paragleitpilot">
      <ul>
        <li>
          Grundausbildung mit mindestens fünf Höhenflügen und 25
          Theorieeinheiten
        </li>
        <li>Höhenflugseminar</li>
        <li>Flugaufträge</li>
        <li>
          Ab dem 40. bescheinigten Flug ist die Absolvierung der A-Schein
          Prüfung (international anerkannte Lizenz) bei uns in der Flugschule
          möglich
        </li>
      </ul>
    </info-box>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import ProductList from '~/components/ProductList.vue'
import InfoBox from '~/components/InfoBox.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { InfoBox, PageHeader, ProductList },
  async asyncData({ $content }) {
    const pages = await $content('ausbildung').sortBy('order').fetch()
    return { pages }
  },
  data() {
    return {
      title: 'Ausbildung',
      description:
        'Das vielseitige Ausbildungsprogramm der Flugschule Fly Tirol bietet eine kompetente Flugausbildung in einem der besten Schulungsgebiete der Welt. Unter der Leitung von Sebastian Kahn, der ausgebildeter Fluglehrer und Weltmeister im Acrobatik-Paragleiten ist, erhältst du die best mögliche Paragliding Ausbildung.',
      hero: {
        pretitle: 'Paragliding',
        title: 'Ausbildung',
        intro:
          'Dich hat die Lust am Paragleiten gepackt und du möchtest lernen eigenständig zu fliegen? Unter der Leitung von Sebastian Kahn, der ausgebildeter Fluglehrer und Team-Weltmeister im Acrobatik-Paragleiten ist, erhältst du durch jahrelange Flugerfahrung auf der ganzen Welt, eine kompetente und vielseitige Flugausbildung in einem der besten Schulungsgebiete der Welt.',
      },
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
