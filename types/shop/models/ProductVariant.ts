/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

import type { ProductVariantOption } from './ProductVariantOption'

export type ProductVariant = {
  readonly id?: string
  name: string
  dates: number
  readonly product?: string
  date_variant?: boolean
  options: Array<ProductVariantOption>
}
