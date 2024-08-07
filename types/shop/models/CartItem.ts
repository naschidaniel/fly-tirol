/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Product } from './Product';
import type { ProductVariantOption } from './ProductVariantOption';
export type CartItem = {
    readonly id?: string;
    product: Product;
    product_variant: Array<ProductVariantOption>;
    item_price: number;
    get_total_item_price: number;
    comment?: string;
    quantity?: number | null;
    readonly date_added?: string;
    cart?: string | null;
};

