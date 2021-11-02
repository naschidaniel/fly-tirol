import { ref } from '@nuxtjs/composition-api'
import media from '~/static/media.json'

const allCookies = ref({})
const isCookieAgreement = ref(false)
const isOpen = ref(false)

export function useData() {
  return {
    allCookies,
    isCookieAgreement,
    isOpen,
    media,
  }
}
