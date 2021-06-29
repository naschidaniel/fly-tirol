<template>
  <div class="card max-w-xs">
    <div class="card--container w-full rounded-xl bg-white shadow-xl">
      <div class="card--header aspect-w-2 aspect-h-3 rounded-t-xl bg-gray-200">
        <responsive-image
          v-if="member.picture"
          class="object-contain"
          :picture="member.picture"
          width="400"
          hight="300"
        />
        <div v-else class="flex justify-center items-center">
          <!-- https://heroicons.dev/ - emoji-happy - MIT Licence  -->
          <svg
            licence="<!-- https://heroicons.dev/ - emoji-happy - MIT Licence  -->"
            class="w-36 h-36 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div class="card--content p-4 pb-12">
        <div class="card--content__inner">
          <h3 class="text-2xl font-heading font-semibold mb-1">
            {{ member.name }}
          </h3>
          <div class="flex items-start text-sm -ml-1 mb-4">
            <!-- https://heroicons.dev/ - clipboard-list - MIT Licence  -->
            <svg
              licence="<!-- https://heroicons.dev/ - clipboard-list - MIT Licence  -->"
              class="w-4 h-4 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="block leading-none pt-1 ml-1">
              {{ member.position }}
            </span>
          </div>
          <p class="text-gray-600">
            {{ member.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResponsiveImage from './ResponsiveImage.vue'
export default {
  components: { ResponsiveImage },
  props: { member: { type: Object, required: true } },
}
</script>
