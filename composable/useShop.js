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

const advancedTrainings = ref([])
const basicTrainings = ref([])
const calender = ref([])
const saftyTrainings = ref([])
const tandemflights = ref([])
const travels = ref([])
const checkout = ref({})
const lineItemsChanged = ref([])
const products = ref([])

export function useShop() {
  const cookies = useCookies()
  const route = useRoute()
  const router = useRouter()
  const shopify = useShopify()

  const cartItems = computed(() => checkout.value?.lineItems)

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
    const checkoutId = unref(checkout).id
    await shopify.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((checkout) => {
        setCheckout(checkout)
      })
    router.push({ path: '/buchen' })
  }

  function getCourse(slug) {
    const routeName = route.value.name
    const courses =
      routeName === 'ausbildung'
        ? unref(basicTrainings)
        : routeName === 'fortbildung'
        ? unref(advancedTrainings)
        : routeName === 'reisen'
        ? unref(travels)
        : routeName === 'tandemfliegen'
        ? unref(tandemflights)
        : routeName === 'sicherheitstrainings'
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
    const collections = await shopify.collection.fetchAllWithProducts()
    advancedTrainings.value = collections.filter(
      (c) => c.title === 'Fortbildung'
    )[0]?.products
    basicTrainings.value = collections.filter(
      (c) => c.title === 'Ausbildung'
    )[0]?.products
    saftyTrainings.value = collections.filter(
      (c) => c.title === 'Sicherheitstrainings'
    )[0]?.products
    tandemflights.value = collections.filter(
      (c) => c.title === 'Tandemflüge'
    )[0]?.products
    travels.value = collections.filter((c) => c.title === 'Reisen')[0]?.products
  }

  async function fetchProducts() {
    const fetchedProducts = await shopify.product.fetchAll()
    calender.value = fetchedProducts
      .flatMap((p) =>
        p.variants.map((v) => {
          return {
            title: p.title,
            productType: p,
            slug: p.handle,
            dateString: v.title,
            id: v.id,
          }
        })
      )
      .filter(
        (e) =>
          ![
            'Höhenflug',
            'Panoramaflug',
            'Tandemsafari',
            'Tandemflug Gutscheincode',
            'Tandemflug Geschenkkarte',
          ].includes(e.title)
      )
    products.value = fetchedProducts
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
      const change = unref(lineItemsChanged)
      change[updateIndex] = { id, quantity }
      lineItemsChanged.value = change
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
    calender,
    cartItems,
    checkout,
    isCartItems,
    fetchCollections,
    fetchProducts,
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
