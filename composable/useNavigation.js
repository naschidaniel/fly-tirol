import { ref, useRoute } from '@nuxtjs/composition-api'

const isOpen = ref(false)

export function useNavigation() {
  const route = useRoute()

  const routeName = route.value.name
  const routeSlug = route.value.params.slug

  return {
    isOpen,
    routeName,
    routeSlug,
  }
}
