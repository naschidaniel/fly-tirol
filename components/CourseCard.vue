<template>
  <div class="card max-w-xs w-80">
    <div class="card--container w-full rounded-xl bg-white shadow-xl">
      <div class="card--header aspect-w-16 aspect-h-9 rounded-t-xl bg-gray-200">
        <responsive-image class="object-cover" :picture="course.image" />
      </div>
      <div class="card--content p-4 pb-12">
        <div class="card--content__inner">
          <h3 class="text-2xl font-heading font-semibold mb-1">
            {{ course.title }}
          </h3>
          <div class="flex items-center text-sm -ml-1 mb-4">
            <!-- https://heroicons.dev/ - location-marker - MIT Licence  -->
            <svg
              licence="<!-- https://heroicons.dev/ - location-marker - MIT Licence  -->"
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span class="block leading-none pt-1 ml-1">
              {{ course.location }}
            </span>
          </div>
          <p class="text-gray-600">
            {{ course.description }}
          </p>
          <div class="font-medium mt-4">
            {{ course.price }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end pr-8">
      <div class="transform -translate-y-2/4">
        <card-button :to="course.path" name="Mehr erfahren" />
      </div>
    </div>
  </div>
</template>

<script>
import CardButton from './CardButton.vue'
export default {
  components: { CardButton },
  props: {
    course: { type: Object, required: true },
  },
}
</script>
