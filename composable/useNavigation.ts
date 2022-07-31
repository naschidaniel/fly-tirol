import { ref } from 'vue'

export function useNavigation() {
  const isOpen = ref(false)

  return {
    isOpen,
  }
}
