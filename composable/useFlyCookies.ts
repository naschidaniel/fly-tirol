import { onMounted, ref, Ref, watchEffect } from 'vue'
import { Cookie } from '~~/types/data'
import { useCookie } from '#imports'

export function useFlyCookies() {
  const allCookies: Ref<Cookie[]> = ref([] as Cookie[])
  const isCookieAgreement: Ref<boolean> = ref(false)

  watchEffect(() => {
    if (isCookieAgreement.value) {
      getAllCookies()
    }
  })

  onMounted(() => {
    getAllCookies()
    getCookieAgreementCookie()
  })

  function acceptCookieAgreement(): void {
    const cookieAgreement = useCookie('cookieAgreement', {
      path: '/',
      maxAge: 24 * 7 * 60 * 31,
      sameSite: true,
    })
    cookieAgreement.value = 'true'
    isCookieAgreement.value = true
  }

  function setCookieCheckoutId(id: string): void {
    const checkoutId = useCookie('checkoutId', {
      path: '/',
      maxAge: 24 * 7 * 60,
      sameSite: true,
    })
    checkoutId.value = id
  }

  function getCookieCheckoutId(): string | null | undefined {
    const checkoutId = useCookie('checkoutId')
    return checkoutId.value
  }

  function removeCookieCheckoutId(): void {
    const checkoutId = useCookie(`checkoutId`, {
      path: '/',
      maxAge: 0,
      sameSite: true,
    })
    checkoutId.value = null
  }

  function getAllCookies(): void {
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

  function removeAllCookies(): void {
    for (const entry of allCookies.value) {
      const cookie = useCookie(`${entry.name}`, {
        path: '/',
        maxAge: 0,
        sameSite: true,
      })
      cookie.value = null
    }
    isCookieAgreement.value = false
    allCookies.value = [] as Cookie[]
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
