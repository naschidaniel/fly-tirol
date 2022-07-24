import { computed, ComputedRef, ref, Ref, unref } from 'vue'
import { Calender, Product } from '@/types/data'

const calender: Ref<Calender> = ref({} as Calender)
const calenderCategoriesChecked: Ref<string[]> = ref([])
const calenderProductsChecked: Ref<string[]> = ref([])

export function useShopifyCalender() {
  const calenderFiltered: ComputedRef<Calender> = computed(() => {
    const categoriesSelected = unref(calenderCategoriesChecked).map((s) =>
      s.toLowerCase()
    )
    const productsSelected = unref(calenderProductsChecked).map((s) =>
      s.toLowerCase()
    )
    return filterCalender(categoriesSelected, {
      products: productsSelected,
      slug: undefined
    })
  })

  const calenderCategoriesAvailable: ComputedRef<string[]> = computed(() =>
    [
      ...new Set(
        Object.values(calender.value).flatMap((c) =>
          c.map((r) => r.productType)
        )
      ),
    ].sort((a, b) => a.localeCompare(b))
  )

  const calenderProductsAvailable: ComputedRef<string[]> = computed(() => {
    const selectedCategories = unref(calenderCategoriesChecked)
    return [
      ...new Set(
        Object.values(calender.value).flatMap((c) =>
          c.filter((e) => selectedCategories.includes(e.productType)).map((p) => p.productTitle)
        )
      ),
    ].sort((a, b) => a.localeCompare(b))
  })

  const isCalenderFiltered: ComputedRef<boolean> = computed(
    () => Object.keys(calenderFiltered.value).length >= 1
  )

  function filterCalender(categories: string[], { products, slug }: {products?: string[], slug?: string}): Calender {
    const calenderSorted = unref(calender)
    const filteredEntries = {}

    Object.keys(calenderSorted).forEach((key) => {
      const filteredMonthEntries = calenderSorted[key].filter((c) => {
        if (products !== undefined) {
          return (
            categories.includes(c.productType.toLowerCase()) &&
            products.includes(c.productTitle.toLowerCase())
          )
        } else if (slug !== undefined) {
          return (
            categories.includes(c.productType.toLowerCase()) &&
            slug.includes(c.slug.toLowerCase())
          )
        } else {
          return (
            categories.includes(c.productType.toLowerCase()) &&
            slug.includes(c.slug.toLowerCase()) && slug.includes(c.slug.toLowerCase())
          )
        }
      }
      )
      if (filteredMonthEntries.length >= 1) {
        filteredEntries[key] = filteredMonthEntries
      }
    })
    return filteredEntries
  }

  function initCalender(productsItemsSorted: Product[]): void {
    const calenderItemsSorted = productsItemsSorted.filter(
      (f) => f.isDateItem && f.isShowProduct
    )
    calenderCategoriesChecked.value = [
      ...new Set(calenderItemsSorted.map((c) => c.productType)),
    ]
    calenderProductsChecked.value = [
      ...new Set(calenderItemsSorted.map((c) => c.productTitle)),
    ].filter((p) => p !== 'Tagesbetreuung')
    const months = [...new Set(calenderItemsSorted.map((c) => c.month))]
    const calenderMonths = {} as Calender
    months.forEach(
      (key: string) =>
        (calenderMonths[key] = [
          ...calenderItemsSorted.filter((c) => c.month === key),
        ])
    )
    calender.value = calenderMonths
  }

  function resetFilter(): void {
    calenderCategoriesChecked.value = unref(calenderCategoriesAvailable)
    calenderProductsChecked.value = unref(calenderProductsAvailable)
  }

  function setCheckedCategories(change: string): void {
    const oldCalenderCategoriesChecked = unref(calenderCategoriesChecked)
    if (oldCalenderCategoriesChecked.includes(change)) {
      calenderCategoriesChecked.value = oldCalenderCategoriesChecked.filter(
        (c) => c !== change
      )
      return
    }
    calenderCategoriesChecked.value.push(change)
  }

  function setCheckedProducts(change: string): void {
    const oldCalenderProductsChecked = unref(calenderProductsChecked)
    if (oldCalenderProductsChecked.includes(change)) {
      calenderProductsChecked.value = oldCalenderProductsChecked.filter(
        (c) => c !== change
      )
      return
    }
    calenderProductsChecked.value.push(change)
  }

  function updateSelectedProduct(calenderItemId: string, month: string, e: Event): void {
    const updateCalender = unref(calender)
    const updateIndex = updateCalender[month].findIndex(
      (o) => o.id === calenderItemId
    )
    updateCalender[month][updateIndex].selectedId = (e.target as HTMLSelectElement).value
    calender.value = updateCalender
  }

  return {
    calender,
    calenderCategoriesAvailable,
    calenderFiltered,
    calenderProductsAvailable,
    calenderProductsChecked,
    calenderCategoriesChecked,
    filterCalender,
    initCalender,
    isCalenderFiltered,
    resetFilter,
    setCheckedCategories,
    setCheckedProducts,
    updateSelectedProduct,
  }
}
