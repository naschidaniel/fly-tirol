<template>
  <div>
    <h2 class="mt-2">Sourcecode der Webseite</h2>
    <div>
      Github Repository:
      <a href="https://github.com/naschidaniel/fly-tirol" target="_blank"
        >https://github.com/naschidaniel/fly-tirol</a
      >
    </div>
    <div>Version des Docker Images: {{ formatDateTime(buildTime) }}</div>
    <h2 class="mt-2">Shop Admin Userinterface</h2>
    <div>
      Testprodukte:
      <NuxtLink to="/testprodukte">
        <span v-if="isBikeAndFly">https://bikeandfly.at/testprodukte</span>
        <span v-else>https://fly-tirol.com/testprodukte</span>
      </NuxtLink>
    </div>
    <div>
      Admin Interface:
      <a v-if="isBikeAndFly" href="https://bikeandfly.at/shop/admin-ui/"
        >https://bikeandfly.at/shop/admin-ui/</a
      >
      <a v-else href="https://fly-tirol.com/shop/admin-ui/"
        >https://fly-tirol.com/shop/admin-ui/</a
      >
    </div>
    <div>
      <div>
        <div class="inline">
          <h2 class="mt-2">Verwendete Softwarepakete und Lizenzinformation</h2>
        </div>
        <div
          v-for="license in licenses"
          id="license-list"
          :key="license.name"
          class="lg:inline"
        >
          <span class="whitespace-normal">
            <span class="font-bold">{{ license.name }}</span
            >&nbsp;–&nbsp;<span class="font-mono"
              >Version {{ license.version }}</span
            >&nbsp;–&nbsp;{{ license.license }} License<span
              class="hidden lg:inline license-spacer"
              >🞄</span
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from '@/composable/useData'
import { useFormat } from '@/composable/useFormat'

const { buildTime, licenses, isBikeAndFly } = useData()
const { formatDateTime } = useFormat()
</script>

<style scoped>
.license-spacer {
  margin-left: 0.5em;
  margin-right: 0.5em;
}
#license-list:last-child span .license-spacer {
  display: none;
}
</style>
