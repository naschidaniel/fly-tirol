import { ref } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import type { Product } from '@/types/Product'
import type { ProductVariant } from '@/types/ProductVariant'
import { ProductVariantOption } from '@/types/ProductVariantOption'

const calender = ref([])
const calenderCategoriesChecked: Ref<string[]> = ref([])
const calenderProductsChecked: Ref<string[]> = ref([])

export function useCalender() {
  function groupBy(array: any, key: string) {
    return array.reduce((result, currentValue) => {
      ;(result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      )
      return result
    }, {})
  }

  const calenderFiltered: ComputedRef<any> = computed(() => {
    const categoriesSelected = unref(calenderCategoriesChecked).map((s) =>
      s.toLowerCase()
    )
    const productsSelected = unref(calenderProductsChecked).map((s) =>
      s.toLowerCase()
    )
    return filterCalender(categoriesSelected, {
      products: productsSelected,
    })
  })

  function filterCalender(
    categories: string[],
    { products }: { products?: string[] }
  ): any {
    const calenderSorted = unref(calender)
    const filteredEntries = {}

    Object.keys(calenderSorted).forEach((key) => {
      const filteredMonthEntries = calenderSorted[key].filter((c) => {
        if (products !== undefined) {
          return (
            categories.includes(c.category.toLowerCase()) &&
            products.includes(c.name.toLowerCase())
          )
        }
      })
      if (filteredMonthEntries.length >= 1) {
        // @ts-ignore
        filteredEntries[key] = filteredMonthEntries
      }
    })
    return filteredEntries
  }

  async function initCalender() {
    const request: RequestInit = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(
      'http://127.0.0.1:8000/api/shop/products',
      request
    ).then((response) => {
      const data = response.json()
      return data
    })
    const _dates = response.data
      .flatMap((p: Product) => {
        return p.variants.flatMap((v: ProductVariant) => {
          return v.options.flatMap((o: ProductVariantOption) => {
            return {
              category: p.category,
              name: p.name,
              href: `${p.slug}`,
              price: p.price,
              year: o.start_year,
              startTime: o.start_iso_date
                ? new Date(o.start_iso_date as string).getTime()
                : undefined,
              month: o.start_month,
              monthLong: o.start_iso_date
                ? new Date(o.start_iso_date as string).toLocaleString('de-de', {
                    month: 'long',
                  })
                : undefined,
              value: o.value,
              options: v.options.filter(
                (option: ProductVariantOption) =>
                  option.start_iso_date !== undefined
              ),
            }
          })
        })
      })
      .filter((v) => v.monthLong !== undefined)
      .sort((a, b) => parseInt(a.startTime) - parseInt(b.startTime))
    calenderCategoriesChecked.value = [
      ...new Set(_dates.map((p) => p.category)),
    ] as string[]
    calenderProductsChecked.value = [
      ...new Set(_dates.map((p) => p.name)),
    ].filter((p) => p !== 'Tagesbetreuung') as string[]

    calender.value = groupBy(_dates, 'monthLong')
  }
  const calenderCategoriesAvailable: ComputedRef<string[]> = computed(() =>
    [
      ...new Set(
        Object.values(calender.value).flatMap((c) => c.map((r) => r.category))
      ),
    ].sort((a, b) => a.localeCompare(b))
  )

  const calenderProductsAvailable: ComputedRef<string[]> = computed(() => {
    const selectedCategories = unref(calenderCategoriesChecked)
    return [
      ...new Set(
        Object.values(calender.value).flatMap((c) =>
          c
            .filter((e) => selectedCategories.includes(e.category))
            .map((p) => p.name)
        )
      ),
    ].sort((a, b) => a.localeCompare(b))
  })

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

  function resetFilter(): void {
    calenderCategoriesChecked.value = unref(calenderCategoriesAvailable)
    calenderProductsChecked.value = unref(calenderProductsAvailable)
  }
  const isCalenderFiltered: ComputedRef<boolean> = computed(
    () => Object.keys(calenderFiltered.value).length >= 1
  )
  return {
    calender,
    calenderCategoriesAvailable,
    calenderCategoriesChecked,
    calenderProductsChecked,
    calenderProductsAvailable,
    calenderFiltered,
    setCheckedCategories,
    setCheckedProducts,
    isCalenderFiltered,
    initCalender,
    resetFilter,
  }
}
