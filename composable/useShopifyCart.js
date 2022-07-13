import { computed, ref, unref } from 'vue'
import { useRouter } from '@nuxtjs/composition-api'
import { shopify } from './useFetchShopify'
import { useFlyCookies } from './useFlyCookies'
import { isFlyTirol } from './useData'
import { useFormat } from '~/composable/useFormat'

const checkout = ref({})
const lineItemsChanged = ref([])
const selectedOptionDateString = ref('')
export const products = ref([])

export function useShopifyCart() {
  const cookies = useFlyCookies()
  const router = useRouter()
  const { formatPrice } = useFormat()

  const cartItems = computed(() => checkout.value?.lineItems)

  const isCartItems = computed(
    () =>
      checkout.value?.lineItems?.length === 0 ||
      checkout.value?.lineItems === undefined
  )

  const cartItemsLength = computed(() => checkout.value?.lineItems?.length || 0)

  async function bookProduct(variantId, { customAttributes }) {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: 1,
        customAttributes,
      },
    ]
    const checkoutId = unref(checkout).id
    await shopify?.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((checkout) => {
        setCheckout(checkout)
      })
    router.push({ path: '/buchen' })
  }

  function setCheckout(change) {
    if (cookies.isCookieAgreement.value && shopify !== undefined) {
      cookies.setCheckoutIdCookie(change.id)
    }
    checkout.value = change
  }

  async function loadCheckout() {
    if (isFlyTirol && cookies.isCookieAgreement.value) {
      const checkoutId = cookies.getCheckoutIdCookie()
      try {
        const fetchedCheckout = await shopify?.checkout.fetch(checkoutId)
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
        cookies.removeCheckoutIdCookie()
        // eslint-disable-next-line no-console
        console.error(
          'The CheckoutId could not be loaded from the local storage.'
        )
      }
    }
    const createdCheckout = await shopify?.checkout.create()
    setCheckout(createdCheckout)
  }

  function getCourse(category, slug) {
    const courses =
      products.value.filter(
        (s) =>
          s.isShowProduct &&
          s.productType.toLowerCase() === category &&
          s.slug === slug
      ) ?? []
    const dates = courses.length
    const price = getPrice(courses)
    const options = courses
    return { dates, price, options }
  }

  function getPrice(courses) {
    const prices = [...new Set(courses?.flatMap((v) => v.productPrices))]
    const pricePrefix = prices.length >= 2 ? 'ab' : undefined
    const price = formatPrice(prices[0])
    if (pricePrefix !== undefined) {
      return `${pricePrefix} ${price}`
    }
    return price
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
      await shopify?.checkout
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
    cookies.removeCheckoutIdCookie()
    loadCheckout()
  }

  async function updateItems(checkoutId) {
    const lineItemsToUpdate = unref(lineItemsChanged).filter(
      (item) => item.quantity !== 0
    )
    if (lineItemsToUpdate.length !== 0) {
      await shopify?.checkout
        .updateLineItems(checkoutId, lineItemsToUpdate)
        .then((c) => {
          setCheckout(c)
        })
    }
  }

  return {
    bookProduct,
    cartItems,
    cartItemsLength,
    checkout,
    getCourse,
    isCartItems,
    lineItemsChanged,
    loadCheckout,
    products,
    refreshCart,
    removeItems,
    resetCart,
    selectedOptionDateString,
    setCheckout,
    updateItems,
    updateLineItems,
  }
}
