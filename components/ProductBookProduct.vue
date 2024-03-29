<template>
  <div class="max-w-90 mx-auto -m-8 lg:py-8 nuxt-content">
    <h2 v-if="isFlyTirol">Dein Service Wunsch</h2>
    <h2 v-else>Dein Package für das Bike & Fly Festival</h2>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 md:p-2">
        <Alert class="mt-2 mr-3">
          <div class="mx-1 md:my-2">
            <ol v-if="isFlyTirol" class="list-decimal">
              <li>
                Vereinbare einen Zeitpunkt telefonisch unter
                <a href="tel:00436766422088" class="underline whitespace-nowrap"
                  >+43 6766422088</a
                >
                oder schreibe uns eine Email
                <a
                  href="mailto:service@fly-tirol.com"
                  class="underline whitespace-nowrap"
                  >service@fly-tirol.com</a
                >
                oder per
                <a
                  href="https://wa.me/436766422088"
                  target="_blank"
                  class="underline whitespace-nowrap"
                >
                  WhatsApp </a
                >.
              </li>
              <li>
                Bringe deinen deinen Gleitschirm, dein Gurtzeug oder deine
                Rettung zu uns in den Shop.
              </li>
            </ol>
            <ol v-if="isBikeAndFly" class="list-decimal">
              <li>Wähle das für dich passende Ticket aus.</li>
              <li>Klicke auf die entsprechende Schaltfläche.</li>
              <li>Bezahle bequem per Überweisung oder Paypal.</li>
              <li>Drucke dein Ticket mit QR-Code anschließend aus.</li>
            </ol>
          </div>
        </Alert>
      </div>
      <div class="w-full mt-2 md:w-1/2 md:mt-0 md:p-2">
        <div class="mx-1 md:my-3">
          <ProductVariants :is-course="false" :excluded="metadata" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Alert from '@/components/Alert.vue'
import { usePage } from '@/composable/usePage'
import { useMetaTags } from '@/composable/useMetaTags'
import { useData } from '@/composable/useData'
import ProductVariants from '@/components/ProductVariants.vue'
const { page, getMetadata } = usePage()
const { isFlyTirol, isBikeAndFly } = useData()

const metadata = getMetadata(page.value.path)
useMetaTags()
</script>
