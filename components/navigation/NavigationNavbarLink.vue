<template>
  <nuxt-link :to="to" exact class="navbar--link" @click="toggleDropdown()">
    {{ name }}
    <span class="decorator"></span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'NavigationDropdownLink',
  props: {
    name: { type: String, required: true },
    to: { type: String, required: true },
  },
  methods: {
    toggleDropdown() {
      this.$store.commit('toggleDropdown')
    },
  },
}
</script>

<style lang="scss">
.navbar--link {
  @apply relative
        inline-block
        rounded-md
        text-lg
        font-medium
        mb-6
        py-1
        leading-5
        text-brand
        focus:outline-none
        transition
        duration-300
        ease-in-out;

  @screen lg {
    @apply text-base mx-4 my-0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    .decorator {
      @apply scale-x-100 origin-left;
    }
  }

  &.active {
    .decorator {
      @apply scale-x-100;
    }
  }

  .decorator {
    @apply absolute
        bottom-0
        left-0
        inline-block
        w-full
        h-0.5
        bg-brand
        transition
        duration-300
        ease-in-out
        transform
        origin-right
        scale-x-0;
  }
}
</style>
