import { ref } from '@nuxtjs/composition-api'

const allCookies = ref({})
const isCookieAgreement = ref(false)
const isOpen = ref(false)

export function useData() {
  return {
    allCookies,
    isCookieAgreement,
    isOpen,
  }
}
