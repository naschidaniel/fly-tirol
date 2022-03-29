import {
  computed,
  getCurrentInstance,
  onMounted,
  ref,
  watch,
} from '@nuxtjs/composition-api'

const wrapProperty =
  (property, makeComputed = true) =>
  () => {
    const vm = getCurrentInstance().proxy
    return makeComputed ? computed(() => vm[property]) : vm[property]
  }

const useCookies = wrapProperty('$cookies', false)

const allCookies = ref({})
export const isCookieAgreement = ref(false)

export function useCookieAgreement() {
  const cookies = useCookies()

  watch(isCookieAgreement, (_newValue, _oldValue) => {
    getAllCookies()
  })

  onMounted(() => {
    getAllCookies()
    getCookieAgreementCookie()
  })

  function acceptCookieAgreement() {
    cookies.set('cookieAgreement', 'true', {
      path: '/',
      maxAge: 60 * 60 * 24 * 7 * 31,
      sameSite: true,
    })
    isCookieAgreement.value = true
  }

  function getAllCookies() {
    allCookies.value = cookies.getAll()
  }

  function getCookieAgreementCookie() {
    const cookieAgreement = cookies.get('cookieAgreement')
    if (cookieAgreement) {
      isCookieAgreement.value = cookieAgreement
    }
  }

  function removeAllCookies() {
    cookies.removeAll()
    isCookieAgreement.value = false
    getAllCookies()
  }

  return {
    acceptCookieAgreement,
    allCookies,
    isCookieAgreement,
    removeAllCookies,
  }
}
