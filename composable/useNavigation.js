import { ref } from 'vue'
import { useRoute } from '#imports'

export function useNavigation() {
  const isOpen = ref(false)

  const route = useRoute()

  const routeName = route.name
  const routeSlug = route.params.slug

  return {
    isOpen,
    routeName,
    routeSlug,
  }
}
