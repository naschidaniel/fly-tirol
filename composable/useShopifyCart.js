import {
  computed,
  getCurrentInstance,
  ref,
  useRouter,
  unref,
} from '@nuxtjs/composition-api'
import Client from 'shopify-buy'
import { isCookieAgreement } from './useCookieAgreement'

const wrapProperty =
  (property, makeComputed = true) =>
  () => {
    const vm = getCurrentInstance().proxy
    return makeComputed ? computed(() => vm[property]) : vm[property]
  }

const useCookies = wrapProperty('$cookies', false)

const shopify = Client.buildClient({
  domain: process.env.SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  language: 'de-DE',
})

const checkout = ref({})
const lineItemsChanged = ref([])
const selectedOptionDateString = ref('')
export const products = ref([])

export function useShopifyCart() {
  const cookies = useCookies()
  const router = useRouter()

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
    await shopify.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((checkout) => {
        setCheckout(checkout)
      })
    router.push({ path: '/buchen' })
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
    bookProduct,
    cartItems,
    cartItemsLength,
    checkout,
    isCartItems,
    loadCheckout,
    products,
    lineItemsChanged,
    refreshCart,
    removeItems,
    resetCart,
    setCheckout,
    selectedOptionDateString,
    updateItems,
    updateLineItems,
  }
}
