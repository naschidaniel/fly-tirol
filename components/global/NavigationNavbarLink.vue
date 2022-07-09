<template>
  <nuxt-link :to="to" exact class="navbar--link" @click="isOpen = !isOpen">
    {{ name }}
    <span class="decorator"></span>
  </nuxt-link>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { useNavigation } from '~/composable/useNavigation'

export default defineComponent({
  name: 'NavigationDropdownLink',
  props: {
    name: { type: String, required: true },
    to: { type: String, required: true },
  },
  setup() {
    const { isOpen } = useNavigation()
    return { isOpen }
  },
})
</script>

<style scoped>
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
}
@screen xl {
  .navbar--link {
    @apply text-base mx-4 my-0;
  }
}
.navbar--link:last-child {
  margin-bottom: 0;
}
.navbar--link:hover .decorator {
  @apply scale-100 origin-left;
}
.navbar--link:focus .decorator {
  @apply scale-100 origin-left;
}
.navbar--link.active .decorator {
  @apply scale-100;
}
.navbar--link .decorator {
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
        origin-right
        scale-0;
}
</style>
