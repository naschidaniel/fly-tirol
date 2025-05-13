<template>
  <div class="flex flex-col items-center justify-center w-full h-full">
    <span class="text-3xl text-red-500">Countdown</span>
    <div class="text-2xl font-bold mb-2">
      Bike & Fly Festival
    </div>
    <div class="text-2xl font-bold mb-6">
      08. bis 10. August 2025
    </div>
    <div class="flex flex-row items-center justify-center">
      <div>
        <div class="flex flex-col items-center justify-center p-3">
          <div class="text-xl ">
            {{ days }}
          </div>
          <div>Tage</div>
        </div>
      </div>
      <div>
        <div class="flex flex-col items-center justify-center p-3">
          <div class="text-xl ">
            {{ hours }}
          </div>
          <div>Stunden</div>
        </div>
      </div>
      <div>
        <div class="flex flex-col items-center justify-center p-3">
          <div class="text-xl ">
            {{ minutes }}
          </div>
          <div>Minuten</div>
        </div>
      </div>
      <div>
        <div class="flex flex-col items-center justify-center p-3">
          <div class="text-xl ">
            {{ seconds }}
          </div>
          <div>Sekunden</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const countDownDate = new Date('2025-08-08').getTime()
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

function setTimeValues(): void {
  const now = new Date().getTime()
  const distance = countDownDate - now
  days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
  if (distance < 0) {
    days.value = 0
    hours.value = 0
    minutes.value = 0
    seconds.value = 0
  }
}

function countDownTimer(): void {
  setTimeout(() => {
    setTimeValues()
    countDownTimer()
  }, 1000)
};
onMounted (() => {
  setTimeValues()
  countDownTimer()
})
</script>
