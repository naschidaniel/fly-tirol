import { onMounted, ref, watch, wrapProperty } from '@nuxtjs/composition-api'

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

  return {
    acceptCookieAgreement,
    allCookies,
    isCookieAgreement,
    removeAllCookies,
  }
}