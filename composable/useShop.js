import {
  computed,
  ref,
  wrapProperty,
  useRoute,
  unref,
} from '@nuxtjs/composition-api'
import { isCookieAgreement } from './useData'

const useCookies = wrapProperty('$cookies', false)

const collections = ref([])
const checkout = ref({})
const products = ref([])
const travels = ref([])

export function useShop() {
  const cookies = useCookies()
  const route = useRoute()

  const advancedTrainings = computed(
    () =>
      collections.value.filter((c) => c.title === 'Fortbildung')[0]?.products
  )

  const basicTrainings = computed(
    () => collections.value.filter((c) => c.title === 'Ausbildung')[0]?.products
  )

  const cartItems = computed(() => checkout.value?.lineItems)

  const saftyTrainings = computed(
    () =>
      collections.value.filter((c) => c.title === 'Sicherheitstrainings')[0]
        ?.products
  )

  const tandemflights = computed(
    () =>
      collections.value.filter((c) => c.title === 'Tandemflüge')[0]?.products
  )

  const travels = computed(
    () => collections.value.filter((c) => c.title === 'Reisen')[0]?.products
  )

  const category = route.value.name

  function getCourse(slug) {
    const courses =
      category === 'ausbildung'
        ? unref(basicTrainings)
        : category === 'fortbildung'
        ? unref(advancedTrainings)
        : category === 'reisen'
        ? unref(travels)
        : category === 'tandemfliegen'
        ? unref(tandemflights)
        : category === 'sicherheitstrainings'
        ? unref(saftyTrainings)
        : []
    return courses?.find((c) => c?.handle === slug)
  }
  function setCheckout(change) {
    if (isCookieAgreement.value) {
      cookies.set('FlyTirol-checkoutId', change.id, {
        path: '/',
        maxAge: 24 * 7 * 1,
        sameSite: true,
      })
    }
    checkout.value = change
  }

  function setCollections(change) {
    collections.value = change
  }

  function setProducts(change) {
    products.value = change
  }

  return {
    advancedTrainings,
    basicTrainings,
    cartItems,
    category,
    checkout,
    getCourse,
    products,
    saftyTrainings,
    setCheckout,
    setCollections,
    setProducts,
    tandemflights,
    travels,
  }
}
