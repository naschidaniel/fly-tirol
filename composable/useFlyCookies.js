import { onMounted, ref, watchEffect } from 'vue'
import { useCookie } from '#imports'

export function useFlyCookies() {
  const allCookies = ref({ name: undefined, value: undefined })
  const isCookieAgreement = ref(false)

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
    const cookieAgreement = useCookie('cookieAgreement', {
      path: '/',
      maxAge: 24 * 7 * 60 * 31,
      sameSite: true,
    })
    cookieAgreement.value = true
    isCookieAgreement.value = true
  }

  function setCookieCheckoutId(id) {
    const checkoutId = useCookie('checkoutId', {
      path: '/',
      maxAge: 24 * 7 * 60,
      sameSite: true,
    })
    checkoutId.value = id
  }

  function getCookieCheckoutId() {
    const checkoutId = useCookie('checkoutId')
    return checkoutId.value
  }

  function removeCookieCheckoutId() {
    const checkoutId = useCookie(`checkoutId`, {
      path: '/',
      maxAge: 0,
      sameSite: true,
    })
    checkoutId.value = undefined
  }

  function getAllCookies() {
    allCookies.value = document.cookie.split('; ').map((c) => {
      return { name: c.split('=')[0], value: c.split('=')[1] }
    })
  }

  function getCookieAgreementCookie() {
    const cookieAgreement = useCookie('cookieAgreement')
    if (cookieAgreement.value) {
      isCookieAgreement.value = true
    }
  }

  function removeAllCookies() {
    for (const entry of allCookies.value) {
      const cookie = useCookie(`${entry.name}`, {
        path: '/',
        maxAge: 0,
        sameSite: true,
      })
      cookie.value = undefined
    }
    isCookieAgreement.value = false
    allCookies.value = { name: undefined, value: undefined }
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
