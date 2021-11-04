import {
  computed,
  ref,
  useRoute,
  useRouter,
  unref,
  wrapProperty,
} from '@nuxtjs/composition-api'
import { isCookieAgreement } from './useData'

const useCookies = wrapProperty('$cookies', false)
const useShopify = wrapProperty('$shopify', false)

const collections = ref([])
const checkout = ref({})
const lineItemsChanged = ref([])
const products = ref([])

export function useShop() {
  const cookies = useCookies()
  const route = useRoute()
  const router = useRouter()
  const shopify = useShopify()

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

  const isCartItems = computed(
    () =>
      checkout.value?.lineItems?.length === 0 ||
      checkout.value?.lineItems === undefined
  )

  async function bookProduct(variantId) {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: 1,
        customAttributes: [],
      },
    ]
    const checkoutId = this.checkout.id
    await shopify.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((checkout) => {
        this.setCheckout(checkout)
      })
    router.push({ path: '/buchen' })
  }

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

  async function fetchCollections() {
    const change = await shopify.collection.fetchAllWithProducts()
    collections.value = change
  }

  async function fetchProduct() {
    const change = await shopify.product.fetchAll()
    products.value = change
  }

  async function loadCheckout() {
    if (isCookieAgreement.value) {
      const checkoutId = cookies.get('FlyTirol-checkoutId')
      try {
        const fetchedCheckout = await shopify.checkout.fetch(checkoutId)
        const createdAt =
          Date.parse(fetchedCheckout.createdAt) + 24 * 60 * 60 * 1000
        if (
          fetchedCheckout.ready === true &&
          fetchedCheckout.completedAt === null &&
          new Date().getTime() <= createdAt
        ) {
          // eslint-disable-next-line no-console
          console.log('Found Valid CheckoutId ', checkoutId)
          setCheckout(fetchedCheckout)
          return
        }
      } catch (e) {
        cookies.remove('FlyTirol-checkoutId')
        // eslint-disable-next-line no-console
        console.error(
          'The CheckoutId could not be loaded from the local storage.'
        )
      }
    }
    const createdCheckout = await shopify.checkout.create()
    setCheckout(createdCheckout)
  }

  function updateLineItems(id, e) {
    const quantity = parseInt(e.target.value)
    const updateIndex = unref(lineItemsChanged)
      .map((item) => item?.id)
      .indexOf(id)
    if (updateIndex === -1) {
      lineItemsChanged.value.push({ id, quantity })
    } else {
      const rudi = unref(lineItemsChanged)
      rudi[updateIndex] = { id, quantity }
      lineItemsChanged.value = rudi
    }
  }

  async function removeItems(checkoutId) {
    const lineItemsToRemove = unref(lineItemsChanged)
      .filter((item) => item.quantity === 0)
      .map((item) => item.id)
    if (lineItemsToRemove.length !== 0) {
      await shopify.checkout
        .removeLineItems(checkoutId, lineItemsToRemove)
        .then((c) => {
          setCheckout(c)
        })
    }
  }

  async function refreshCart() {
    const checkoutId = checkout.value?.id
    if (checkoutId === undefined) return
    await removeItems(checkoutId)
    await updateItems(checkoutId)
    lineItemsChanged.value = []
  }

  function resetCart() {
    cookies.remove('FlyTirol-checkoutId')
    loadCheckout()
  }

  async function updateItems(checkoutId) {
    const lineItemsToUpdate = unref(lineItemsChanged).filter(
      (item) => item.quantity !== 0
    )
    if (lineItemsToUpdate.length !== 0) {
      await shopify.checkout
        .updateLineItems(checkoutId, lineItemsToUpdate)
        .then((c) => {
          setCheckout(c)
        })
    }
  }

  return {
    advancedTrainings,
    basicTrainings,
    bookProduct,
    cartItems,
    category,
    checkout,
    isCartItems,
    fetchCollections,
    fetchProduct,
    loadCheckout,
    getCourse,
    products,
    lineItemsChanged,
    refreshCart,
    removeItems,
    resetCart,
    saftyTrainings,
    setCheckout,
    tandemflights,
    travels,
    updateItems,
    updateLineItems,
  }
}
