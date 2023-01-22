import { ref } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import { useData } from './useData'
import type { CalenderEntry, CalenderMonth } from '@/types/Calender'
import type { Product } from '@/types/Product'
import type { ProductVariant } from '@/types/ProductVariant'
import { ProductVariantOption } from '@/types/ProductVariantOption'

const calender: Ref<CalenderEntry[]> = ref([])
const calenderCategoriesChecked: Ref<string[]> = ref([])
const calenderProductsChecked: Ref<string[]> = ref([])
const months = Array.from({ length: 36 }, (_, i) =>
  new Date(Date.UTC(2023, i, 1, 0, 0, 0)).toLocaleString('de-de', {
    month: 'long',
    year: 'numeric',
  })
)
const selectedDateString: Ref<string | undefined> = ref(undefined)

export function useCalender() {
  const { backend } = useData()
  const calenderFiltered: ComputedRef<CalenderMonth[]> = computed(() => {
    return months
      .map((month: string) => {
        return {
          monthLong: month,
          courses: calender.value.filter(
            (c) =>
              calenderCategoriesChecked.value.includes(c.category) &&
              calenderProductsChecked.value.includes(c.name) &&
              c.monthLong === month
          ),
        }
      })
      .filter((m) => m.courses.length >= 1)
  })

  async function initCalender(productPath: string | undefined = undefined) {
    const request: RequestInit = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(`${backend}/api/shop/products`, request).then(
      (response) => {
        const data = response.json()
        return data
      }
    )
    calender.value = response.data
      .flatMap((p: Product) => {
        return p.variants.flatMap((v: ProductVariant) => {
          return v.options.flatMap((o: ProductVariantOption) => {
            return {
              productId: p.id,
              category: p.category,
              name: p.name,
              href: `/${p.category}/${p.slug}/`.toLowerCase(),
              date_variant: v.date_variant,
              start_iso_date: o.start_iso_date,
              end_iso_date: o.end_iso_date,
              month: o.start_month,
              monthLong: o.start_iso_date
                ? new Date(o.start_iso_date as string).toLocaleString('de-de', {
                    month: 'long',
                    year: 'numeric',
                  })
                : undefined,
              value: o.value,
              options: p.variants.filter((e) => !e.date_variant),
            }
          })
        })
      })
      .filter((c: CalenderEntry) => c.date_variant)
      .sort((a: CalenderEntry, b: CalenderEntry) =>
        a.start_iso_date.localeCompare(b.start_iso_date)
      )
    calenderCategoriesChecked.value = calenderCategoriesChecked.value = [
      ...new Set(calender.value.map((p) => p.category)),
    ] as string[]
    calenderProductsChecked.value =
      productPath !== undefined
        ? ([
            ...new Set(
              calender.value
                .filter((c) => c.href === productPath)
                .map((p) => p.name)
            ),
          ] as string[])
        : ([...new Set(calender.value.map((p) => p.name))].filter(
            (p) => p !== 'Tagesbetreuung'
          ) as string[])
  }

  const calenderCategoriesAvailable: ComputedRef<string[]> = computed(() =>
    [...new Set(calender.value.map((c) => c.category))].sort((a, b) =>
      a.localeCompare(b)
    )
  )

  const calenderProductsAvailable: ComputedRef<string[]> = computed(() => {
    const selectedCategories = unref(calenderCategoriesChecked)
    return [
      ...new Set(
        calender.value
          .filter((e) => selectedCategories.includes(e.category))
          .map((p) => p.name)
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
    selectedDateString,
    months,
  }
}
