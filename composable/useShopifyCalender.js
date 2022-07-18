import { computed, ref, unref } from 'vue'

const calender = ref({})
const calenderCategoriesChecked = ref([])
const calenderProductsChecked = ref([])

export function useShopifyCalender() {
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

  const isCalenderFiltered = computed(
    () => Object.keys(calenderFiltered.value).length >= 1
  )

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

  function initCalender(productsItemsSorted) {
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
    const calenderMonths = {}
    months.forEach(
      (key) =>
        (calenderMonths[key] = [
          ...calenderItemsSorted.filter((c) => c.month === key),
        ])
    )
    calender.value = calenderMonths
  }

  function resetFilter() {
    calenderCategoriesChecked.value = unref(calenderCategoriesAvailable)
    calenderProductsChecked.value = unref(calenderProductsAvailable)
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

  function updateSelectedProduct(calenderItemId, month, e) {
    const updateCalender = unref(calender)
    const updateIndex = updateCalender[month].findIndex(
      (o) => o.id === calenderItemId
    )
    updateCalender[month][updateIndex].selectedId = e.target.value
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
