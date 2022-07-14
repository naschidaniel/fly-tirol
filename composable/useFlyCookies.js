import { computed, getCurrentInstance, onMounted, ref, watchEffect } from 'vue'

const allCookies = ref({})
export const isCookieAgreement = ref(true) // set FALSE TODO NUXT3

export function useFlyCookies() {
  // TODO NUXT3
  // const cookies = useCookies()

  watchEffect(() => {
    if (isCookieAgreement.value) {
      getAllCookies()
    }
  })

  onMounted(() => {
    getAllCookies()
    getCookieAgreementCookie()
  })

  function acceptCookieAgreement() {
    // cookies.set('cookieAgreement', 'true', {
    //   path: '/',
    //   maxAge: 60 * 60 * 24 * 7 * 31,
    //   sameSite: true,
    // })
    isCookieAgreement.value = true
  }

  function setCookieCheckoutId(id) {
    // cookies.set('FlyTirol-checkoutId', id, {
    //   path: '/',
    //   maxAge: 24 * 7 * 1,
    //   sameSite: true,
    // })
  }

  function getCookieCheckoutId() {
    return // cookies.get('FlyTirol-checkoutId')
  }

  function removeCookieCheckoutId() {
    // cookies.remove('FlyTirol-checkoutId')
  }

  function getAllCookies() {
    // allCookies.value = cookies.getAll()
  }

  function getCookieAgreementCookie() {
    // const cookieAgreement = cookies.get('cookieAgreement')
    // if (cookieAgreement) {
    //   isCookieAgreement.value = cookieAgreement
    // }
  }

  function removeAllCookies() {
    // cookies.removeAll()
    // isCookieAgreement.value = false
    // getAllCookies()
  }

  return {
    acceptCookieAgreement,
    allCookies,
    isCookieAgreement,
    setCookieCheckoutId,
    getCookieCheckoutId,
    removeCookieCheckoutId,
    removeAllCookies,
  }
}
