<template>
  <div>
    <PageHeader pre-headline="Paragliding" headline="Sicherheitstrainings">
      Bist du ein bereits zertifizierter Paragleitpilot mit einem A-Schein und suchst nach einer optimalen Vorbereitung auf außergewöhnliche Flugsituationen? 
      
      Unter der fachkundigen Anleitung von Sebastian Kahn, dem Weltmeister im Acro-Paragleiten von 2014 und dem Vizeweltmeister im Synchron-Acrobatic-Paragleiten, bieten wir dir die einzigartige Gelegenheit, an zwei der schönsten Fluggebiete Europas zu trainieren: am malerischen Lago Di Garda in Italien und in der faszinierenden Umgebung von Ölüdeniz in der Türkei. 
      
      Diese exklusive Erfahrung ermöglicht es dir, unter realistischen Bedingungen Extremsituationen zu simulieren und wichtige Techniken wie die Steilspirale und den B-Stall zu erlernen oder zu perfektionieren. Unser Ziel ist es, dir das nötige Rüstzeug zu vermitteln, um kritische Flugsituationen in der Zukunft souverän zu meistern oder sogar zu vermeiden.
    </PageHeader>
    <ProductList />
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue'
import PageHeader from '@/components/PageHeader.vue'
import ProductList from '@/components/ProductList.vue'
import { useMetaTags } from '@/composable/useMetaTags'

useMetaTags()
</script>
