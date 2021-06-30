<template>
  <div class="max-w-90 mx-auto pb-12">
    <div class="relative flex w-11/12 ml-auto pt-8 pb-4 2xl:pb-12 z-10">
      <div class="flex flex-col w-96 max-w-screen-sm flex-shrink-0">
        <div class="">
          <h2 class="mb-6">
            <span
              class="
                text-lg
                font-heading font-medium
                flex flex-row
                items-center
                mb-2
              "
            >
              <span class="inline-block bg-brand w-7 h-0.75 mr-2"></span>
              <span class="inline-block">{{ title.pre }}</span>
            </span>
            <span class="text-5xl font-heading font-bold">
              {{ title.main }}
            </span>
          </h2>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap w-full">
      <div
        v-for="member in members"
        :key="member.name"
        class="w-full lg:w-1/4 flex-grow-0 p-4"
      >
        <team-member-card v-if="member.name" :member="member" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: { members: { type: Array, required: true } },
  data() {
    return {
      title: {
        pre: 'Dein Fly Tirol',
        main: 'Team',
      },
    }
  },
}
</script>
