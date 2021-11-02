import { ref } from '@nuxtjs/composition-api'

const isCookieAgreement = ref(undefined)
const allCookies = ref({})

export function useData() {
  return {
    allCookies,
    isCookieAgreement,
  }
}
