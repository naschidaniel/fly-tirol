import Client from 'shopify-buy'
import { computed, ref, unref, watchEffect } from 'vue'
import { useFlyCookies } from './useFlyCookies.js'
import { useFormat } from './useFormat'
import { useShopifyCalender } from './useShopifyCalender.js'
import { useRouter } from '#imports'
import { useRuntimeConfig } from '#app'

export const products = ref([])
const checkout = ref({})
const lineItemsChanged = ref([])
const selectedOptionDateString = ref('')

export function useShopifyCart() {
  const config = useRuntimeConfig()
  const isFlyTirol = config.public.isFlyTirol
  const shopify = config.public.isFlyTirol
    ? Client.buildClient({
        domain: config.public.shopifyDomain,
        storefrontAccessToken: config.public.shopifyAccessToken,
        language: 'de-DE',
      })
    : undefined

  const flyCookies = useFlyCookies()
  const router = useRouter()
  const { formatPrice } = useFormat()
  const format = useFormat()
  const shopifyCalender = useShopifyCalender()

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
    if (!isFlyTirol) return
    if (flyCookies.isCookieAgreement.value && shopify !== undefined) {
      flyCookies.setCookieCheckoutId(change.id)
    }
    // Parse GraphQL Promise to Object
    const checkoutString = JSON.stringify(change)
    checkout.value = JSON.parse(checkoutString)
  }

  async function loadCheckout() {
    if (isFlyTirol && flyCookies.isCookieAgreement.value) {
      const checkoutId = flyCookies.getCookieCheckoutId()
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
          console.info('Found Valid CheckoutId ', checkoutId)
          setCheckout(fetchedCheckout)
          return
        }
      } catch (e) {
        flyCookies.removeCookieCheckoutId()
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
    flyCookies.removeCookieCheckoutId()
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

  async function initShop() {
    if (shopify === undefined) return
    // do not show Courses older then 21 days
    const maxStartDate = new Date()
    maxStartDate.setDate(maxStartDate.getDate() - 21)

    const shopifyProducts = await shopify.product.fetchAll()
    const fetchedProducts = shopifyProducts.flatMap((p) =>
      p.variants.map((v) => {
        return {
          productTitle: p.title,
          productType: p.productType,
          productPrices: [...new Set(p.variants.map((v) => v.price))],
          productOptions: p.options.map((o) => {
            return { name: o.name, values: o.values }
          }),
          slug: p.handle,
          variantTitle: v.title,
          dateString: '',
          id: v.id,
          isShowProduct: true,
          isDateItem: false,
          startDate: undefined,
          startDay: undefined,
          endDate: undefined,
          month: undefined,
          optionDateString: '',
          price: v.price,
          variants: [],
        }
      })
    )
    fetchedProducts.forEach((s) => {
      try {
        s.variants = [
          {
            productTitle: s.productTitle,
            title: s.variantTitle.replace(' / ', ' – '),
            option: undefined,
            optionDateString: s.optionDateString,
            price: s.price,
            id: s.id,
          },
        ]

        // Tandemflights Vouchers
        if (s.productOptions[0].name !== 'Kursdatum') {
          s.optionDateString = `${s.variantTitle} ${format.formatPrice(
            s.price
          )}`
          s.isDateItem = false
          return
        }

        s.isDateItem = true
        s.dateString = s.variantTitle.split(' / ')[0]
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
        s.startDay = startDate.toLocaleString('de', { weekday: 'short' })
        const month = startDate.toLocaleString('de', { month: 'long' })
        const year = startDate.getFullYear()
        s.month = `${month} ${year}`
        s.optionDateString = `${s.startDay}, ${s.dateString}`
        s.variants[0].optionDateString = s.optionDateString

        if (s.productOptions.length >= 2) {
          if (s.variantTitle.includes('inklusive Leihausrüstung')) {
            s.isShowProduct = false
          }
          if (s.variantTitle.includes('ohne Leihausrüstung')) {
            const secondVariantTitle = s.variantTitle.replace(
              'ohne Leihausrüstung',
              'inklusive Leihausrüstung'
            )
            const secondVariant = fetchedProducts.find(
              (c) =>
                c.variantTitle === secondVariantTitle &&
                c.productType === s.productType
            )
            s.variants[0].option = 'ohne Leihausrüstung'
            s.variants.push({
              productTitle: s.productTitle,
              title: secondVariant.variantTitle.replace(' / ', ' – '),
              option: 'inklusive Leihausrüstung',
              optionDateString: s.optionDateString,
              price: secondVariant.price,
              id: secondVariant.id,
            })
            s.selectedId = s.id
          }
        }
        if (s.startDate < maxStartDate) {
          s.isShowProduct = false
        }
      } catch (e) {
        throw new Error(
          `The Kursdatum ${s.dateString} of the course ${s.productType} - ${s.productTitle} could not be parsed`
        )
      }
    })
    const productsItemsSorted = fetchedProducts.sort(
      (a, b) => a.startDate - b.startDate
    )
    shopifyCalender.initCalender(productsItemsSorted)
    products.value = productsItemsSorted
  }

  return {
    bookProduct,
    cartItems,
    cartItemsLength,
    checkout,
    getCourse,
    isCartItems,
    initShop,
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
