import Client from 'shopify-buy'
import { computed, ref, unref, Ref, onMounted, ComputedRef } from 'vue'
import { useRuntimeConfig } from '#app'
import { useFlyCookies } from './useFlyCookies'
import { useFormat } from './useFormat'
import { useShopifyCalender } from './useShopifyCalender.js'
import { Course, Product, ProductVariant } from '@/types/data'
import { ShopifyCart, ShopifyLineItems, ShopifyProducts } from '@/types/shopify'
import { useRouter } from '#imports'

export const products: Ref<Product[]> = ref([] as Product[])
const checkout: Ref<ShopifyCart> = ref({} as ShopifyCart)
const lineItemsChanged: Ref<ShopifyLineItems[]> = ref([] as ShopifyLineItems[])
const selectedOptionDateString: Ref<string> = ref('')

export function useShopifyCart() {
  const config = useRuntimeConfig()
  const isFlyTirol: boolean = config.public.isFlyTirol
  const shopify: Client | undefined = config.public.isFlyTirol
    ? Client.buildClient({
        domain: config.public.shopifyDomain,
        storefrontAccessToken: config.public.shopifyAccessToken,
        language: 'de-DE',
      })
    : undefined

  const flyCookies = useFlyCookies()
  const router = useRouter()
  const { formatPrice } = useFormat()
  const shopifyCalender = useShopifyCalender()

  const cartItems: ComputedRef<ShopifyLineItems[]> = computed(
    () => checkout.value?.lineItems
  )

  const isCartItems = computed(
    () =>
      checkout.value?.lineItems?.length === 0 ||
      checkout.value?.lineItems === undefined
  )

  const cartItemsLength = computed(() => checkout.value?.lineItems?.length || 0)

  async function bookProduct(variantId: string, { customAttributes }) {
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

  function setCheckout(change: Client.Cart): void {
    if (!isFlyTirol) return
    if (flyCookies.isCookieAgreement.value && shopify !== undefined) {
      flyCookies.setCookieCheckoutId(change.id as string)
    }
    // Parse GraphQL Promise to Object
    const checkoutString = JSON.stringify(change)
    checkout.value = JSON.parse(checkoutString)
  }

  async function loadCheckout(): Promise<void> {
    if (isFlyTirol && flyCookies.isCookieAgreement.value) {
      const checkoutId = flyCookies.getCookieCheckoutId()
      try {
        const fetchedCheckout = (await shopify?.checkout.fetch(
          checkoutId
        )) as ShopifyCart
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

  function getCourse(category: string, slug: string): Course {
    const courses: Product[] =
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

  function getPrice(courses: Product[]): string {
    const prices = [...new Set(courses?.flatMap((v) => v.productPrices))]
    const pricePrefix = prices.length >= 2 ? 'ab' : undefined
    const price = formatPrice(prices[0])
    if (pricePrefix !== undefined) {
      return `${pricePrefix} ${price}`
    }
    return price
  }

  function updateLineItems(id: string, e: Event): void {
    const quantity = parseInt((e.target as HTMLSelectElement).value)
    const updateIndex = unref(lineItemsChanged)
      .map((item) => item?.id)
      .indexOf(id)
    if (updateIndex === -1) {
      lineItemsChanged.value.push({ id, quantity } as ShopifyLineItems)
    } else {
      const change = unref(lineItemsChanged)
      change[updateIndex] = { id, quantity } as ShopifyLineItems
      lineItemsChanged.value = change
    }
  }

  async function removeItems(checkoutId: string): Promise<void> {
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

  async function refreshCart(): Promise<void> {
    const checkoutId = checkout.value?.id
    if (checkoutId === undefined) return
    await removeItems(checkoutId)
    await updateItems(checkoutId)
    lineItemsChanged.value = []
  }

  function resetCart(): void {
    flyCookies.removeCookieCheckoutId()
    loadCheckout()
  }

  async function updateItems(checkoutId: string): Promise<void> {
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

  function resetLineItemsChanged(): void {
    lineItemsChanged.value = []
  }

  async function initShop(): Promise<void> {
    if (shopify === undefined) return
    // do not show Courses older then 21 days
    const maxStartDate = new Date()
    maxStartDate.setDate(maxStartDate.getDate() - 21)

    const shopifyProducts =
      (await shopify.product.fetchAll()) as ShopifyProducts[]
    const fetchedProducts: Product[] = shopifyProducts.flatMap((p) =>
      p.variants.map((v) => {
        return {
          productTitle: p.title,
          productType: p.productType,
          productPrices: [
            ...new Set(p.variants.map((v) => parseFloat(v.price))),
          ],
          productOptions: p.options.map((o) => {
            return { name: o.name, values: o.values }
          }),
          slug: p.handle,
          variantTitle: v.title,
          dateString: '',
          id: v.id,
          isShowProduct: true,
          isDateItem: false,
          optionDateString: '',
          price: parseFloat(v.price),
          variants: [] as ProductVariant[],
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
          s.optionDateString = `${s.variantTitle} ${formatPrice(s.price)}`
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
    const productsItemsSorted = fetchedProducts.sort((a, b) => {
      if (a.startDate === undefined || b.startDate === undefined) return 1
      return a.startDate.getTime() - b.startDate.getTime()
    })
    shopifyCalender.initCalender(productsItemsSorted)
    products.value = productsItemsSorted
  }

  onMounted(() => {
    selectedOptionDateString.value = ''
  })

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
    resetLineItemsChanged,
    selectedOptionDateString,
    setCheckout,
    updateItems,
    updateLineItems,
  }
}
