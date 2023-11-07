<template>
  <div>
    <PageHeader pre-headline="Paragliding" headline="Sicherheitstrainings">
      Bist du bereits ein Paragleitpilot mit einem A-Schein und suchst nach einer optimalen Vorbereitung auf außergewöhnliche Flugsituationen? Dann heißen wir dich herzlich willkommen in der renommierten Flugschule „Fly Tirol“. Unter der fachkundigen Anleitung von Sebastian Kahn, Team Weltmeister im Acro-Paragleiten 2014 und Synchron-Acrobatic-Paragleiten Vizeweltmeister, bieten wir dir die einzigartige Gelegenheit, an zwei atemberaubenden Standorten zu trainieren: am malerischen Lago Di Garda in Italien und in der faszinierenden Umgebung von Ölüdeniz in der Türkei.
      
      Diese exklusive Erfahrung ermöglicht es dir, unter realistischen Bedingungen Extremsituationen zu simulieren und wichtige Techniken wie die Steilspirale und den B-Stall zu erlernen oder zu perfektionieren. Unser Ziel ist es, dir das nötige Rüstzeug zu vermitteln, um kritische Flugsituationen in der Zukunft souverän zu meistern oder sogar zu vermeiden.
      
      Das Training in diesen atemberaubenden Umgebungen bietet nicht nur eine umfassende fachliche Ausbildung, sondern auch eine unvergessliche Erfahrung in zwei der schönsten Fluggebiete Europas. Unsere Experten stehen bereit, um dir umfassende Kenntnisse und praktische Fähigkeiten zu vermitteln, damit du stets selbstbewusst und sicher in der Luft agieren kannst.
      
      Wir laden dich ein, dich uns anzuschließen, um ein umfassendes Training zu erleben, das deine Flugerfahrung auf ein neues Niveau heben wird. Fliege mit uns, um dich auf jedes Flugszenario vorzubereiten und deine Fähigkeiten zu perfektionieren.
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
