import {
  onMounted,
  ref,
  watch,
  wrapProperty,
  useRoute,
} from '@nuxtjs/composition-api'

const useCookies = wrapProperty('$cookies', false)

const allCookies = ref({})
export const isCookieAgreement = ref(false)
const isOpen = ref(false)

export function useData() {
  const cookies = useCookies()
  const route = useRoute()

  const buildTime = process.env.buildTime

  const routeName = route.value.name
  const routeSlug = route.value.params.slug

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
    buildTime,
    isCookieAgreement,
    isOpen,
    removeAllCookies,
    routeName,
    routeSlug,
  }
}
