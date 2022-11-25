/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductVariant } from './ProductVariant';

export type CalenderEntry = {
  category: string,
  date_variant: boolean,
  end_iso_date: string,
  href: string,
  month: string,
  monthLong: string | undefined,
  name: string,
  options: ProductVariant[],
  start_iso_date: string,
  value: string,
}

export type CalenderMonth = {
  courses: CalenderEntry[],
  monthLong: string,
}
