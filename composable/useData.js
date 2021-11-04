import {
  computed,
  onMounted,
  ref,
  watch,
  wrapProperty,
} from '@nuxtjs/composition-api'
import { useMedia } from './useMedia'

const useCookies = wrapProperty('$cookies', false)

const allCookies = ref({})
export const isCookieAgreement = ref(false)
const isOpen = ref(false)

export function useData() {
  const cookies = useCookies()
  const buildtime = computed(() =>
    process.env?.NUXT_ENV_CURRENT_DATE === undefined
      ? undefined
      : Date.parse(process.env.NUXT_ENV_CURRENT_DATE)
  )

  watch(isCookieAgreement, (_newValue, _oldValue) => {
    getAllCookies()
  })

  onMounted(() => {
    getAllCookies()
    getCookieAgreementCookie()
  })

  function getAllCookies() {
    allCookies.value = cookies.getAll()
  }

  function removeAllCookies() {
    cookies.removeAll()
    isCookieAgreement.value = false
    getAllCookies()
  }

  function acceptCookieAgreement() {
    cookies.set('FlyTirol-cookieAgreement', 'true', {
      path: '/',
      maxAge: 60 * 60 * 24 * 7 * 31,
      sameSite: true,
    })
    isCookieAgreement.value = true
  }

  function getCookieAgreementCookie() {
    const cookieAgreement = cookies.get('FlyTirol-cookieAgreement')
    if (cookieAgreement) {
      isCookieAgreement.value = cookieAgreement
    }
  }

  const media = useMedia()
  return {
    ...media,
    acceptCookieAgreement,
    allCookies,
    buildtime,
    isCookieAgreement,
    isOpen,
    removeAllCookies,
  }
}
