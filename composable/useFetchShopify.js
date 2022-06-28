import Client from 'shopify-buy'
import { useShopifyCalender } from './useShopifyCalender'
import { isFlyTirol, shopifyDomain, shopifyAccessToken } from './useData'
import { useFormat } from './useFormat'
import { products } from './useShopifyCart'

export const shopify = isFlyTirol
  ? Client.buildClient({
      domain: shopifyDomain,
      storefrontAccessToken: shopifyAccessToken,
      language: 'de-DE',
    })
  : undefined

export function useFetchShopify() {
  const format = useFormat()
  const shopifyCalender = useShopifyCalender()

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
    initShop,
  }
}
