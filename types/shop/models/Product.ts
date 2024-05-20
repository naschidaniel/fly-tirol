/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductVariant } from './ProductVariant';
export type Product = {
    readonly id?: string;
    name: string;
    allow_comment?: boolean;
    slug: string;
    href: string;
    total_dates: number;
    is_shipping?: boolean;
    is_voucher?: boolean;
    price?: number;
    readonly category?: string;
    vatrate?: Product.vatrate;
    variants: Array<ProductVariant>;
};
export namespace Product {
    export enum vatrate {
        NORMAL_VATRATE = 'NORMAL_VATRATE',
        REDUCED_VATRATE = 'REDUCED_VATRATE',
        ZERO_VATRATE = 'ZERO_VATRATE',
    }
}

