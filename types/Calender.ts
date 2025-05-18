/* istanbul ignore file */
/* tslint:disable */

import type { ProductVariant } from '@/types/shop/models/ProductVariant'

export type CalenderEntry = {
  productId: string
  category: string
  date_variant: boolean
  end_iso_date: string
  href: string
  is_available: boolean
  month: string
  monthLong: string | undefined
  name: string
  options: ProductVariant[]
  start_iso_date: string
  value: string
}

export type CalenderMonth = {
  courses: CalenderEntry[]
  monthLong: string
}
