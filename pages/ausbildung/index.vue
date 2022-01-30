<template>
  <div>
    <PageHeader pre-headline="Paragliding" headline="Ausbildung">
      <Index />
    </PageHeader>
    <ProductList />
    <InfoBox headline="Dein Weg zum eigenständigen Fliegen als Paragleitpilot">
      <ul>
        <li>
          <span>Grundausbildung</span> zum Gleitschirmpiloten. Hier lernst du
          den Start und die Landung auf unserem Übungshang. Bei diesem Kurs
          werden dir auch die wichtigsten theoretischen Inhalte für das Fliegen
          vermittelt. Als Kursziel sind Flüge vom Berg geplannt.
        </li>
        <li>
          Beim <span>Höhenflugkurs</span> dreht sich alles um das Fliegen. Hier
          perfektionierst du den Start, die Landung, Kurven, Abstiegshilfen und
          vieles mehr. In den Theorieeinheiten beschäftigt man sich mit den
          Praxisrelevanten Themen.
        </li>
        <li>
          Im <span>Paragleitschein Theoriekurs</span> erlernst du für den
          Gleitschirmsport relevanten Fachgebiete: Aerodynamik, Flugpraxis,
          Gerätekunde, Luftrecht und Meteorologie behandelt.
        </li>
        <li>
          Der <span>Kombikurs</span> behinhaltet alle relevanten Kurselemente
          von Grundkurs, Höhenflugkurs und Paragleitschein Theoriekus zu einem
          vergünstigtem Komplettpreis.
        </li>
        <li>
          Ab dem 40. bescheinigten Flug ist die Absolvierung der A-Schein
          Prüfung (international anerkannte Lizenz) bei uns in der Flugschule
          möglich
        </li>
      </ul>
    </InfoBox>
    <SocialBar />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import PageHeader from '~/components/PageHeader.vue'
import SocialBar from '~/components/SocialBar.vue'
import ProductList from '~/components/ProductList.vue'
import InfoBox from '~/components/InfoBox.vue'
import Index from '~/content/ausbildung/index.vue'
import { useMetaTags } from '~/composable/useMetaTags'

export default defineComponent({
  components: { InfoBox, SocialBar, PageHeader, ProductList, Index },
  setup() {
    const { generateMetaTags, page } = useMetaTags()
    return { generateMetaTags, page }
  },
  head() {
    const metatags = this.generateMetaTags(
      this.page.title,
      this.page.description,
      this.$route.fullPath
    )
    return { title: this.page.title, meta: metatags }
  },
})
</script>
