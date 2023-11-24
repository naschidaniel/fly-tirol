<template>
  <div>
    <PageHeader pre-headline="Gehe mit FlyTirol" headline="Tandemfliegen">
      Einmal das Gefühl der Freiheit hoch über den Gipfeln der Kitzbüheler Alpen
      mit Blick auf den Alpenhauptkamm und den Wilden Kaiser bei einem
      Tandemflug mit einem unserer Top-Tandempiloten genießen! Egal ob im Winter
      oder Sommer, die Fly Tirol Flugschule zeigt dir das Alpenpanorama aus der
      Vogelperspektive.
    </PageHeader>
    <ProductList />
    <InfoBox headline="Voraussetzungen für einen Tandemflug">
      <ul>
        <li>Festes Schuhwerk</li>
        <li>
          Sportliche und den Temperaturen sowie dem Wetter angepasste Kleidung
        </li>
        <li>
          Optische Brille oder Sonnenbrille erwünscht, da sie vor dem Fahrtwind
          beim Fliegen schützt.
        </li>
        <li>
          Ein Mindestgewicht von 25 kg und keine Einschränkung beim Gehen.
          Sollte es eine Einschränkung geben, teile uns dies bitte im Voraus
          mit, damit wir gemeinsam eine Lösung finden können.
        </li>
        <li>
          Informiere uns außerdem im Voraus, wenn du über 100 kg wiegst, damit
          wir uns entsprechend vorbereiten können.
        </li>
        <li>
          Die Preise vestehen sind exklusive von Liftkarten und Fotos vom Flug.
        </li>
      </ul>
    </InfoBox>
    <SocialBar />
  </div>
</template>

<script setup lang="ts">
import InfoBox from '@/components/InfoBox.vue'
import SocialBar from '@/components/SocialBar.vue'
import ProductList from '@/components/ProductList.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useMetaTags } from '@/composable/useMetaTags'

useMetaTags()
</script>
