/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Product } from './Product';
import type { ProductVariantOption } from './ProductVariantOption';
export type RequestCart = {
    product: Product;
    selected_variants: Array<ProductVariantOption>;
    quantity: number;
    comment: string;
};

