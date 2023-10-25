<template>
  <div class="max-w-90 mx-auto -m-8 lg:py-8 nuxt-content">
    <h2>Dein Wunschtermin</h2>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 md:p-2">
        <Alert class="mt-2 mr-3">
          <div class="mx-1 md:my-2">
            <ol class="list-decimal">
              <li v-if="isAppointment">Wunschdatum auswählen</li>
              <li v-if="!isAppointment">Gutschein bestellen</li>
              <li v-if="!isAppointment">
                Wir senden dir die Gutscheinkarte per Post zu.
              </li>
              <li>
                Vereinbare dann einen Zeitpunkt telefonisch unter
                <a href="tel:00436766422088" class="underline whitespace-nowrap"
                  >+43 6766422088</a
                >
                oder schreibe uns eine Email
                <a
                  href="mailto:tandem@fly-tirol.com"
                  class="underline whitespace-nowrap"
                  >tandem@fly-tirol.com</a
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
            </ol>
          </div>
        </Alert>
      </div>
      <div class="w-full mt-2 md:w-1/2 md:mt-0 md:p-2">
        <div class="mx-1 md:my-3">
          <div v-if="isAppointment">
            <ProductAppointment />
          </div>
          <div v-else>
            <ProductVariants :is-course="false" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Alert from '@/components/Alert.vue'
import ProductAppointment from '@/components/ProductAppointment.vue'
import { usePage } from '@/composable/usePage'
import { useMetaTags } from '@/composable/useMetaTags'
import ProductVariants from '@/components/ProductVariants.vue'

useMetaTags()
const { page } = usePage()

const isAppointment = computed(
  () => page.value.slug !== 'tandemflug-geschenkkarte',
)
</script>
