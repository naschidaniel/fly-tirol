import {
  computed,
  ref,
  useRouter,
  unref,
  wrapProperty,
} from '@nuxtjs/composition-api'
import { isCookieAgreement } from './useData'
import { formatPrice } from '~/util/formatPrice'

const useCookies = wrapProperty('$cookies', false)
const useShopify = wrapProperty('$shopify', false)

const advancedTrainings = ref([])
const basicTrainings = ref([])
const calender = ref({})
const calenderCategoriesChecked = ref([])
const calenderProductsChecked = ref([])
const saftyTrainings = ref([])
const tandemflights = ref([])
const travels = ref([])
const checkout = ref({})
const lineItemsChanged = ref([])
const products = ref([])

export function useShop() {
  const cookies = useCookies()
  const router = useRouter()
  const shopify = useShopify()

  const cartItems = computed(() => checkout.value?.lineItems)

  const calenderFiltered = computed(() => {
    const categoriesSelected = unref(calenderCategoriesChecked).map((s) =>
      s.toLowerCase()
    )
    const productsSelected = unref(calenderProductsChecked).map((s) =>
      s.toLowerCase()
    )
    const filteredEntries = filterCalender(categoriesSelected, {
      products: productsSelected,
    })
    return filteredEntries
  })

  function filterCalender(categories, { products, slug }) {
    const calenderSorted = unref(calender)
    const filteredEntries = {}

    function _selectEntry(c) {
      if (products !== undefined) {
        return (
          categories.includes(c.productType.toLowerCase()) &&
          products.includes(c.productTitle.toLowerCase())
        )
      } else {
        return (
          categories.includes(c.productType.toLowerCase()) &&
          slug.includes(c.slug.toLowerCase())
        )
      }
    }
    Object.keys(calenderSorted).forEach((key) => {
      const filteredMonthEntries = calenderSorted[key].filter((c) =>
        _selectEntry(c)
      )
      if (filteredMonthEntries.length >= 1) {
        filteredEntries[key] = filteredMonthEntries
      }
    })
    return filteredEntries
  }

  const calenderCategoriesAvailable = computed(() =>
    [
      ...new Set(
        Object.values(calender.value).flatMap((c) =>
          c.map((r) => r.productType)
        )
      ),
    ].sort((a, b) => a.localeCompare(b))
  )

  const calenderProductsAvailable = computed(() => {
    const selectedCategories = unref(calenderCategoriesChecked)
    return [
      ...new Set(
        Object.values(calender.value).flatMap((c) =>
          c
            .filter((e) => selectedCategories.includes(e.productType))
            .map((p) => p.productTitle)
        )
      ),
    ].sort((a, b) => a.localeCompare(b))
  })

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
          optionTitle: '',
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
            title: s.variantTitle,
            option: undefined,
            price: s.price,
            id: s.id,
          },
        ]
        if (s.productOptions[0].name !== 'Kursdatum') {
          s.optionTitle = `${s.variantTitle} ${formatPrice(s.price)}`
          s.isDateItem = false
          return
        }
        s.isDateItem = true
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
            s.variants = [
              {
                productTitle: s.productTitle,
                title: s.variantTitle,
                option: 'ohne Leihausrüstung',
                price: s.price,
                id: s.id,
              },
              {
                productTitle: s.productTitle,
                title: secondVariant.variantTitle,
                option: 'inklusive Leihausrüstung',
                price: secondVariant.price,
                id: secondVariant.id,
              },
            ]
            s.selectedId = s.id
          }
        }
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
        s.optionTitle = `${s.startDay}, ${s.dateString}`
      } catch (e) {
        throw new Error(
          `The Kursdatum ${s.dateString} of the course ${s.productType} - ${s.productTitle} could not be parsed`
        )
      }
    })
    const productsItemsSorted = fetchedProducts.sort(
      (a, b) => a.startDate - b.startDate
    )
    const calenderItemsSorted = productsItemsSorted.filter(
      (f) => f.isDateItem && f.isShowProduct
    )
    products.value = productsItemsSorted

    calenderCategoriesChecked.value = [
      ...new Set(calenderItemsSorted.map((c) => c.productType)),
    ]
    calenderProductsChecked.value = [
      ...new Set(calenderItemsSorted.map((c) => c.productTitle)),
    ].filter((p) => p !== 'Tagesbetreuung')
    const months = [...new Set(calenderItemsSorted.map((c) => c.month))]
    const calenderMonths = {}
    months.forEach(
      (key) =>
        (calenderMonths[key] = [
          ...calenderItemsSorted.filter((c) => c.month === key),
        ])
    )
    calender.value = calenderMonths
  }

  const isCalenderFiltered = computed(
    () => Object.keys(calenderFiltered.value).length >= 1
  )

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

  function setCheckedCategories(change) {
    const oldCalenderCategoriesChecked = unref(calenderCategoriesChecked)
    if (oldCalenderCategoriesChecked.includes(change)) {
      calenderCategoriesChecked.value = oldCalenderCategoriesChecked.filter(
        (c) => c !== change
      )
      return
    }
    calenderCategoriesChecked.value.push(change)
  }

  function setCheckedProducts(change) {
    const oldCalenderProductsChecked = unref(calenderProductsChecked)
    if (oldCalenderProductsChecked.includes(change)) {
      calenderProductsChecked.value = oldCalenderProductsChecked.filter(
        (c) => c !== change
      )
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

  function updateSelectedProduct(calenderItemId, month, e) {
    const updateCalender = unref(calender)
    const updateIndex = updateCalender[month].findIndex(
      (o) => o.id === calenderItemId
    )
    updateCalender[month][updateIndex].selectedId = e.target.value
    calender.value = updateCalender
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

  function resetFilter() {
    calenderCategoriesChecked.value = unref(calenderCategoriesAvailable)
    calenderProductsChecked.value = unref(calenderProductsAvailable)
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
    calenderCategoriesAvailable,
    calenderProductsChecked,
    calenderCategoriesChecked,
    cartItems,
    checkout,
    filterCalender,
    isCartItems,
    initShop,
    isCalenderFiltered,
    loadCheckout,
    products,
    lineItemsChanged,
    refreshCart,
    removeItems,
    resetCart,
    resetFilter,
    saftyTrainings,
    setCheckout,
    setCheckedCategories,
    setCheckedProducts,
    tandemflights,
    travels,
    updateItems,
    updateLineItems,
    updateSelectedProduct,
  }
}
