import { ref } from 'vue'
import { useRoute } from '#imports'

const isOpen = ref(false)

export function useNavigation() {
  const route = useRoute()

  const routeName = route.name
  const routeSlug = route.params.slug

  return {
    isOpen,
    routeName,
    routeSlug,
  }
}
