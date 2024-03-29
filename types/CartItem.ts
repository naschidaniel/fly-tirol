/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductVariantOption } from './ProductVariantOption';

export type CartItem = {
    readonly id?: string;
    readonly product?: string;
    product_variant: Array<ProductVariantOption>;
    product_tax: number;
    product_price: number;
    item_price: number;
    get_total_item_tax: number;
    get_total_item_price: number;
    comment?: string;
    quantity?: number | null;
    readonly date_added?: string;
    cart?: string | null;
};

