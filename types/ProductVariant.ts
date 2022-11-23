/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductVariantOption } from './ProductVariantOption';

export type ProductVariant = {
    readonly id?: number;
    name: string;
    date_variant?: boolean;
    options: Array<ProductVariantOption>;
};

