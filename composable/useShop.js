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
const calenderProductsChecked = ref([])
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
  const calenderFiltered = computed(() => {
    const rudi = unref(calenderProductsChecked)
    return unref(calender).filter((c) => rudi.includes(c.title))
  })
  const calenderProductsAvailable = computed(() =>
    [...new Set(calender.value.map((c) => c.title))].sort((a, b) =>
      a.localeCompare(b)
    )
  )

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

  async function initShop() {
    const fetchedCollections = await shopify.collection.fetchAllWithProducts()
    advancedTrainings.value = fetchedCollections.filter(
      (c) => c.title === 'Fortbildung'
    )[0]?.products
    basicTrainings.value = fetchedCollections.filter(
      (c) => c.title === 'Ausbildung'
    )[0]?.products
    saftyTrainings.value = fetchedCollections.filter(
      (c) => c.title === 'Sicherheitstrainings'
    )[0]?.products
    tandemflights.value = fetchedCollections.filter(
      (c) => c.title === 'Tandemfliegen'
    )[0]?.products
    travels.value = fetchedCollections.filter(
      (c) => c.title === 'Reisen'
    )[0]?.products
    const fetchedProducts = await shopify.product.fetchAll()
    const calenderItems = fetchedProducts
      .flatMap((p) =>
        p.variants.map((v) => {
          return {
            title: p.title,
            productType: p.productType,
            slug: p.handle,
            dateString: v.title,
            id: v.id,
            startDate: undefined,
            endDate: undefined,
          }
        })
      )
      .filter(
        (e) =>
          ![
            'Höhenflug',
            'Panoramaflug',
            'Tandemsafari',
            'Tandemflug Geschenkkarte',
          ].includes(e.title)
      )
    calenderItems.forEach((s) => {
      try {
        const startDateArray = s.dateString.split(' ')[0].split('.')
        const startDate = new Date(
          `20${startDateArray[2]}-${startDateArray[1]}-${startDateArray[0]}`
        )
        const endDateArray = s.dateString.split(' ').splice(-1)[0].split('.')
        const endDate =
          startDateArray.join() !== endDateArray.join()
            ? new Date(
                `20${endDateArray[2]}-${endDateArray[1]}-${endDateArray[0]}`
              )
            : undefined
        s.startDate = startDate
        s.endDate = endDate
      } catch (e) {
        throw new Error(
          `The Kursdatum ${s.dateString} of the course could not be parsed`
        )
      }
    })
    calender.value = calenderItems.sort((a, b) => a.startDate - b.startDate)
    calenderProductsChecked.value = [
      ...new Set(calender.value.map((c) => c.title)),
    ].filter((p) => p !== 'Tagesbetreuung')
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

  function setCheckedProducts(change) {
    const rudi = unref(calenderProductsChecked)
    if (rudi.includes(change)) {
      calenderProductsChecked.value = rudi.filter((c) => c !== change)
      return
    }
    calenderProductsChecked.value.push(change)
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
    calenderFiltered,
    calenderProductsAvailable,
    calenderProductsChecked,
    cartItems,
    checkout,
    isCartItems,
    initShop,
    loadCheckout,
    getCourse,
    products,
    lineItemsChanged,
    refreshCart,
    removeItems,
    resetCart,
    saftyTrainings,
    setCheckout,
    setCheckedProducts,
    tandemflights,
    travels,
    updateItems,
    updateLineItems,
  }
}
